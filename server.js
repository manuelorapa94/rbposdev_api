const config = require('./config.json');
const mySqlConnection = require('./databaseHelpers/mySqlWrapper');
const accessTokenDBHelper = require('./databaseHelpers/accessTokensDBHelper')(mySqlConnection);
const dbAccess = require('./databaseHelpers/mySqlDbAccess')(mySqlConnection);
const userDBHelper = require('./databaseHelpers/userDBHelper')(mySqlConnection);
const oAuthModel = require('./authorisation/accessTokenModel')(userDBHelper, accessTokenDBHelper);
const oAuth2Server = require('node-oauth2-server');
const express = require('express');
const expressApp = express();
const path = require("path");
const fs = require('fs');

const multer = require('multer');
//const upload = multer({ dest:'uploads/'});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

const cors = require('cors');
const loggerService = require('./logger_service');
const logger = new loggerService('rbService');
expressApp.oauth = oAuth2Server({
  model: oAuthModel,
  grants: ['password'],
  debug: true
});

let port = config.serviceport;
const publicAreaRoutesMethods = require('./publicArea/publicAreaRoutesMethods.js')(dbAccess);
const publicAreaRoutes = require('./publicArea/publicAreaRoutes.js')(express.Router(), expressApp, publicAreaRoutesMethods);
const restrictedAreaRoutesMethods = require('./restrictedArea/restrictedAreaRoutesMethods.js')(dbAccess);
const restrictedAreaRoutes = require('./restrictedArea/restrictedAreaRoutes.js')(express.Router(), expressApp, restrictedAreaRoutesMethods);
const authRoutesMethods = require('./authorisation/authRoutesMethods')(userDBHelper);
const authRoutes = require('./authorisation/authRoutes')(express.Router(), expressApp, authRoutesMethods);
const bodyParser = require('body-parser');

expressApp.use(bodyParser.json({ limit: "200mb" }));

//set the bodyParser to parse the urlencoded post data
expressApp.use(bodyParser.urlencoded({ extended: true }));

//set the oAuth errorHandler
expressApp.use(expressApp.oauth.errorHandler());

expressApp.use(cors({
  origin: '*'
}));

expressApp.use(express.static(__dirname +'/public'));

expressApp.post('/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).send(req.file);
  
  } catch (error) {
    logger.error(`Upload Error: ${error}`);
  }
});

expressApp.get('/images/:image_id', function (req, res) {
  try {
    logger.info(`Get Image: ${req.params.image_id}`);
    res.sendFile(path.join(__dirname, "./uploads/" + req.params.image_id));
  } catch (error) {
    logger.error(`Get Image Error: ${error}`);
  }
});

expressApp.get('/base64image/:image_id', function (req, res) {
  try {
    logger.info(`Get Base64image Image: ${req.params.image_id}`);
    const contents = fs.readFileSync(path.join(__dirname, "./uploads/" + req.params.image_id), {encoding: 'base64'});
    res.send(contents) ;
  } catch (error) {
    logger.error(`Get Base64image Error: ${error}`);
  }
});

//set the authRoutes for registration and & login requests
expressApp.use('/auth', authRoutes);

//set the restrictedAreaRoutes used to demo the accesiblity or routes that are OAuth2 protected
expressApp.use('/dataservice', restrictedAreaRoutes);

//set public routes to access pos data
expressApp.use('/api', publicAreaRoutes);

//init the server
expressApp.listen(port, () => {
  logger.info(`listening on port ${port}`);
});