module.exports = {
  queryByTenantIdUserID: queryByTenantIdUserID,
  queryByDbCS: queryByDbCS,
  tenantInfoByUserName: getTenantInfoByUserName,
  tenantInfoByTenantId: getTenantInfoByTenantId,
  adminDataAccess: getadminDataAccess,
  queryAdminDatabase: queryAdminDatabase,
  query: query,
  sha1: SHA1,
  releaseAllPools: releaseAllPools
}

//get the mySql object
const mySql = require('mysql')
const config = require('./../config.json')
let conPools = [];
var adminConPool = null;

//object which holds the connection to the db
let connection = null
function releaseAllPools() {
    if (!conPools) {
      // there are no pools to release
    }
    else {
      conPools.forEach(function(p){
        p.end(function (err) {
          // all connections in the pool have ended
        });
      });
    }
}

//get the mySql object
const loggerService = require('./../logger_service');
const logger = new loggerService('rbService');

/**
 * Create the connection to the db
 */
function getPoolByTenantID(tenant_id, callback) {

  if (!tenant_id || tenant_id == 'undefined') {
    callback(null);
    return;
  }

  // check if the pools objects contains the pool for the connection
  var poolCon = conPools.find(function(p){
    return p.tenant_id === tenant_id;
  });

  // if pool for the tenant is not found, then create it
  if (!poolCon){

    getTenantInfoByTenantId(tenant_id, function(result){
      var tenantInfo = result.results[0];
      
      if (!tenantInfo.dbhost) {
        callback(null);
        return;
      }

      var dbCS = {
        "host" : tenantInfo.dbhost,
        "user" : tenantInfo.dbuser,
        "port" : tenantInfo.dbport,
        "password" : tenantInfo.dbpassword,
        "database" : tenantInfo.dbname
      };

      var pool = mySql.createPool({
        connectionLimit : 200,
        host: dbCS.host,
        user: dbCS.user,
        port: dbCS.port,
        password: dbCS.password,
        database: dbCS.database,
        timezone: 'Z'
      });
  
      var tenantPool = {
        tenant_id: tenant_id,
        db_pool: pool
      }
      conPools.push(tenantPool);

      callback(pool);
    });

  }
  else {
    callback(poolCon.db_pool);
  }
}

function initializeAdminDBConnection() {
  connection = mySql.createConnection({
    host: config.admindb.host,
    user: config.admindb.user,
    port: config.admindb.port,
    password: config.admindb.password,
    database: config.admindb.databasename,
    timezone: 'Z'
  })
}
/**
 * executes the specified sql query and provides a callback which is given
 * with the results in a DataResponseObject
 *
 * @param dbCS
 * @param queryString
 * @param callback - takes a DataResponseObject
 */
async function queryByTenantIdUserID(tenant_id, user_id, option, queryString, [values], callback){

  try {

    if (!tenant_id) {
      callback(createDataResponseObject("No tenant_id specified."));
      return;
    }

    const qs = queryString;
    await getPoolByTenantID(tenant_id, function(pool) {

      if (!pool) {
        callback(createDataResponseObject("Unable to establish connection to the database"));
        return;
      }

      pool.query(qs, [values], function(error, results, fields){

        if (!error) {
          logger.info('queryByTenantIdUserID | query: ', qs, ' results: ', results);
        }
        else {
          logger.error('queryByTenantIdUserID | query: ' + qs + ' error: ', error);
        }

        if(option === "single") {
          if (!results) {
            callback(createDataResponseObject(error, results));
          }
          else {
            if(results.length > 0) {
              callback(createDataResponseObject(error, results[0]));
            }
            else {
              callback(createDataResponseObject(error, results));
            }
          } 
        }
        else {
          callback(createDataResponseObject(error, results));
        }
      });
    });

  } catch (error) {
    callback(createDataResponseObject(error))
  }
}

/**
 * executes the specified sql query and provides a callback which is given
 * with the results in a DataResponseObject
 *
 * @param dbCS
 * @param queryString
 * @param callback - takes a DataResponseObject
 */
function queryByDbCS(dbCS, user_id, queryString, callback) {

  try {
  
    function handleDisconnect() {
      connection = mySql.createConnection(dbCS); 

      connection.connect(function (err) {              
        if (err) {                                    
          logger.error('error when connecting to db:', err);
          setTimeout(handleDisconnect, 5000);
        }                                   
      });                                     
      
      connection.on('error', function (err) {
        logger.error('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
          handleDisconnect();                        
        } else {                                     
          throw err;
        }
      });
    }

    handleDisconnect();

    const qs = queryString;
    connection.query(queryString, function (error, results, fields) {
      try {
        if (!error) {
          logger.info('queryByDbCS | query: ', qs, ' results: ', results);
        }
        else {
          logger.error('queryByDbCS | query: ' + qs + ' error: ', error);
        }
       
        if (connection.state != 'disconnected') {
          connection.end();
        }

        callback(createDataResponseObject(error, results));

      } catch (error) {
        callback(createDataResponseObject(error, null));
      }
    })

  } catch (error) {
    callback(createDataResponseObject(error, null));
  }
}

function getTenantInfoByUserName(userName, callback) {

  try {
    // Get the admindb connection parameters
    var dbCS = {
      "host": config.admindb.host,
      "user": config.admindb.user,
      "port": config.admindb.port,
      "password": config.admindb.password,
      "database": config.admindb.databasename
    };

    function handleDisconnect() {
      connection = mySql.createConnection(dbCS); 
     
      connection.connect(function (err) {             
        if (err) {                                   
          logger.error('error when connecting to db:', err);
          setTimeout(handleDisconnect, 5000); 
        }                                    
      });                                   
    
      connection.on('error', function (err) {
        logger.error('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          handleDisconnect();                        
        } else {                                    
          throw err;
        }
      });
    }

    handleDisconnect();

    const queryString = `SELECT u.user_id, u.username, u.user_password, tu.tenant_id, t.dbhost, t.dbuser, t.dbport, t.dbpassword, t.dbname, u.FirstName, u.LastName, u.current_location_id
      FROM users u LEFT JOIN tenantusers tu ON u.user_id = tu.user_id LEFT JOIN tenants t ON tu.tenant_id = t.tenant_id
      WHERE LCASE(u.username)='` + userName.toLowerCase() + `'`;

    const qs = queryString;
    connection.query(queryString, function (error, results, fields) {

      if (!error) {
        logger.info('getTenantInfoByUserName | query: ', qs, ' results: ', results);
      }
      else {
        logger.error('getTenantInfoByUserName | query: ' + qs + ' error: ', error);
      }

      //disconnect from the method
      if (connection.state != 'disconnected') {
        connection.end();
      }

      //send the response in the callback
      callback(createDataResponseObject(error, results))
    })

  } catch (err) {
    callback(createDataResponseObject(err))
  }
}

async function getTenantInfoByTenantId(tenant_id, callback){

  const queryString = "SELECT * FROM tenants WHERE tenant_id='" + tenant_id + "'";

  try {
    // Get the admindb connection parameters
    if (!adminConPool) {
      var dbCS = {
        "host": config.admindb.host,
        "user": config.admindb.user,
        "port": config.admindb.port,
        "password": config.admindb.password,
        "database": config.admindb.databasename
      };

      adminConPool = mySql.createPool({
        connectionLimit : 200,
        host: dbCS.host,
        user: dbCS.user,
        port: dbCS.port,
        password: dbCS.password,
        database: dbCS.database,
        timezone: 'Z'
      });
    }

    //connection.connect();

    adminConPool.query(queryString, function (error, results, fields) {
      if (!error) {
        logger.info('getTenantInfoByTenantId | query: ', queryString, ' results: ', results);
      }
      else {
        logger.error('getTenantInfoByTenantId | query: ' + queryString + ' error: ' + error);
      }

      //if (connection.state != 'disconnected') {
      //  connection.end();
      ///}

      callback(createDataResponseObject(error, results))
    });

  } catch (err) {
    logger.error('getTenantInfoByTenantId | query: ' + queryString + ' error: ' + error);
    callback(createDataResponseObject(err))
  }
}

// function initConnection(dbCS) {
//    connection = mySql.createConnection({
//     host: dbCS.host,
//     user: dbCS.user,
//     port: dbCS.port,
//     password: dbCS.password,
//     database: dbCS.database
//   })
// }

function getadminDataAccess(queryStringadmin, callback){

  try {
   
    // Get the admindb connection parameters
    if (!adminConPool) {
      var dbCS = {
        "host": config.admindb.host,
        "user": config.admindb.user,
        "port": config.admindb.port,
        "password": config.admindb.password,
        "database": config.admindb.databasename
      };

      adminConPool = mySql.createPool({
        connectionLimit : 200,
        host: dbCS.host,
        user: dbCS.user,
        port: dbCS.port,
        password: dbCS.password,
        database: dbCS.database,
        timezone: 'Z'
      });
    }
    
    //connection.connect()

    const qString = queryStringadmin;
    adminConPool.query(qString, function (error, results, fields) {

      if (!error) {
        logger.info('getadminDataAccess | query: ', qString, ' results: ', results);
      }
      else {
        logger.error('getadminDataAccess | query: ' + qString + ' error: ' + error);
      }

      // if (connection.state != 'disconnected') {
      //   connection.end();
      // }

      callback(createDataResponseObject(error, results));
    });

  } catch (err) {
    callback(createDataResponseObject(err));
  }
}

/**
 * executes the specified sql query and provides a callback which is given
 * with the results in a DataResponseObject
 *
 * @param queryString
 * @param callback - takes a DataResponseObject
 */
function query(dbCS, queryString, [values], callback) {

  try {
    function handleDisconnect() {
      connection = mySql.createConnection(dbCS); // Recreate the connection, since
      // the old one cannot be reused.

      connection.connect(function (err) {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
          logger.error('error when connecting to db:', err);
          setTimeout(handleDisconnect, 5000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });                                     // process asynchronous requests in the meantime.
      // If you're also serving http, display a 503 error.
      connection.on('error', function (err) {
        logger.error('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
          handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout

          //callback(createDataResponseObject(err, null));

          // if (err.code === 'PROTOCOL_ENQUEUE_AFTER_QUIT') {
          //   // Ignore if the connection has already ended
          // }
          // else{
          throw err;
          // }
        }
      });
    }

    handleDisconnect();

    const qString = queryString;

    //execute the query and collect the results in the callback
    connection.query(queryString, [values], function (error, results, fields) {

      if (!error) {
        logger.info('mySqlWrapper | query: ', qString, ' results: ', results);
      }
      else {
        logger.error('mySqlWrapper | query: ' + qString + ' error: ' + error);
      }

      if (connection.state != 'disconnected') {
        connection.end();
      }

      callback(createDataResponseObject(error, results))
    });

  } catch (err) {
    callback(createDataResponseObject(err));
  }
}

// function query for admin database table
function queryAdminDatabase(query, callback) {
  initializeAdminDBConnection()

  const qString = query;
  connection.connect((err) => {
    if (err) throw err;

    connection.query(query, (error, results) => {

      if (!error) {
        logger.info('queryAdminDatabase | query: ', qString, ' results: ', results);
      }
      else {
        logger.error('queryAdminDatabase | query: ' + qString + ' error: ' + error);
      }

      callback({
        error: error,
        results: results
      })
    });
  });
}

/**
 * creates and returns a DataResponseObject made out of the specified parameters.
 * A DataResponseObject has two variables. An error which is a boolean and the results of the query.
 *
 * @param error
 * @param results
 * @return {DataResponseObject<{error, results}>}
 */
function createDataResponseObject(error, results) {
  return {
    error: error,
    results: results === undefined ? null : results === null ? null : results
  };
}

/**
* Secure Hash Algorithm (SHA1)
* http://www.webtoolkit.info/
**/
function SHA1(msg) {
  function rotate_left(n, s) {
    var t4 = (n << s) | (n >>> (32 - s));
    return t4;
  }

  function lsb_hex(val) {
    var str = '';
    var i;
    var vh;
    var vl;
    for (i = 0; i <= 6; i += 2) {
      vh = (val >>> (i * 4 + 4)) & 0x0f;
      vl = (val >>> (i * 4)) & 0x0f;
      str += vh.toString(16) + vl.toString(16);
    }
    return str;
  }

  function cvt_hex(val) {
    var str = '';
    var i;
    var v;
    for (i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f;
      str += v.toString(16);
    }
    return str;
  }

  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, '\n');
    var utftext = '';
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }

  var blockstart;
  var i, j;
  var W = new Array(80);
  var H0 = 0x67452301;
  var H1 = 0xEFCDAB89;
  var H2 = 0x98BADCFE;
  var H3 = 0x10325476;
  var H4 = 0xC3D2E1F0;
  var A, B, C, D, E;
  var temp;
  msg = Utf8Encode(msg);
  var msg_len = msg.length;
  var word_array = new Array();
  for (i = 0; i < msg_len - 3; i += 4) {
    j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 |
      msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
    word_array.push(j);
  }
  switch (msg_len % 4) {
    case 0:
      i = 0x080000000;
      break;
    case 1:
      i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;
      break;
    case 2:
      i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;
      break;
    case 3:
      i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;
      break;
  }
  word_array.push(i);
  while ((word_array.length % 16) != 14) word_array.push(0);
  word_array.push(msg_len >>> 29);
  word_array.push((msg_len << 3) & 0x0ffffffff);
  for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
    for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
    for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    A = H0;
    B = H1;
    C = H2;
    D = H3;
    E = H4;
    for (i = 0; i <= 19; i++) {
      temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 20; i <= 39; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 40; i <= 59; i++) {
      temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 60; i <= 79; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    H0 = (H0 + A) & 0x0ffffffff;
    H1 = (H1 + B) & 0x0ffffffff;
    H2 = (H2 + C) & 0x0ffffffff;
    H3 = (H3 + D) & 0x0ffffffff;
    H4 = (H4 + E) & 0x0ffffffff;
  }
  var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

  return temp.toLowerCase();
}