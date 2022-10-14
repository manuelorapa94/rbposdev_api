const winston = require('winston');
const config = require('./config.json');
require('winston-daily-rotate-file');

dateFormat = () => {
    return new Date(Date.now()).toISOString();
};

winston.addColors({
    debug: 'green',
    info: 'cyan',
    silly: 'magenta',
    warn: 'yellow',
    error: 'red'
});

var dailyFileTransport = new (winston.transports.DailyRotateFile)({
    //filename: path.normalize(logSettings.directory + "//" + logSettings.name + "%DATE%.log"),
    filename: config.log.path + "\\" + config.log.name + "%DATE%.log",
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: config.maxsize,
    maxFiles: config.maxfiles // days, put 14d for example
});

class LoggerService {
    constructor(route) {
        this.log_data = null;
        this.route = route;
        this.requestId = null;
        const logger = winston.createLogger({
            transports: [
                new winston.transports.Console({
                    colorize: true
                }),
                dailyFileTransport
            ],
            format: winston.format.printf((info) => {
                //let message = '${dateFormat()} | ${info.level.toUpperCase()} | ${route}.log | ${info.message} | ';
                let withReqId = `${dateFormat()} | ${info.level.toUpperCase()} | ${this.requestId} | ${info.message} | `;
                let withoutReqId = `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message} | `;
                let message = this.requestId ? withReqId : withoutReqId;
                message = info.obj ? message + `data:${JSON.stringify(info.obj)} | ` : message;
                message = this.log_data ? message + `log_data:${JSON.stringify(this.log_data)} | ` : message;
                return message;
            })
        });
        this.logger = logger;
    }
    setRequestId(reqId) {
        this.requestId = reqId;
    }
    setLogData(log_data) {
        this.log_data = log_data;
    }
    async info(message) {
        this.logger.log('info', message);
    }
    async info(message, obj) {
        this.logger.log('info', message, { obj });
    }
    async debug(message) {
        this.logger.log('debug', message);
    }
    async debug(message, obj) {
        this.logger.log('debug', message, { obj });
    }
    async error(message) {
        this.logger.log('error', message);
    }
    async error(message, obj) {
        this.logger.log('error', message, { obj });
    }
}

module.exports = LoggerService;