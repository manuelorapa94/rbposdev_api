/* The userDBHelper is an object which will handle all of the user related db
operations  such as saving new users or retrieving existing ones. You can find
it in the userDBHelper.js in this projects databaseHelpers folder. */
let mySqlConnection;

// admin database
const config = require('./../config.json');
const loggerService = require('./../logger_service');
const logger = new loggerService('rbService');

module.exports = (injectedMySqlConnection) => {
  mySqlConnection = injectedMySqlConnection
  return {
    registerUserInDB: registerUserInDB,
    updateUserInDB: updateUserInDB,
    removeUserInDB: removeUserInDB,
    getUserFromCrentials: getUserFromCrentials,
    doesUserExist: doesUserExist,
    getTenantDBConnection: getTenantDBConnection,
    // mobile api controllers
    doesUserExistInSystemAcccessTable: doesUserExistInSystemAcccessTable,
    registerUserSystemAccessInDB: registerUserSystemAccessInDB,
  }
}


function getTenantDBConnection(username, callback) {

  var dname = username.split("@")[1];

  mySqlConnection.tenantInfoByDomainName(dname, function (results) {

    var tenantInfo = results.results[0];
    var dbCS = {
      "host": tenantInfo.dbhost,
      "user": tenantInfo.dbuser,
      "port": tenantInfo.dbport,
      "password": tenantInfo.dbpassword,
      "database": tenantInfo.dbname
    };

    callback(dbCS, err);
  });
}

/**
 * attempts to register a user in the DB with the specified details.
 * it provides the results in the specified callback which takes a
 * DataResponseObject as its only parameter
 *
 * @param username
 * @param password
 * @param registrationCallback - takes a DataResponseObject
 */
function registerUserInDB(username, password, password_expired, active, mobilenumber, emailaddress, registrationCallback) {

  var dname = username.split("@")[1];

  mySqlConnection.tenantInfoByDomainName(dname, function (results) {

    var tenantInfo = results.results[0];
    var dbCS = {
      "host": tenantInfo.dbhost,
      "user": tenantInfo.dbuser,
      "port": tenantInfo.dbport,
      "password": tenantInfo.dbpassword,
      "database": tenantInfo.dbname
    };

    const registerUserQuery = `INSERT INTO users (username, user_password, created_datetime, passwordchanged_datetime, password_expired, active, emailverified_datetime, smsverified_datetime, mobilenumber, emailaddress) 
    VALUES ('${username}', SHA('${password}'), NOW(), NOW(), ${password_expired}, ${active}, NOW(), NOW(), '${mobilenumber}', '${emailaddress}')`

    logger.info('registerUserInDB query is: ', registerUserQuery);

    try {
      mySqlConnection.queryByDbCS(dbCS, 0, registerUserQuery, function (result) {
        registrationCallback(result, err);
      });
    } catch (error) {
      registrationCallback(null, error);
    }

  });
}

function registerUserSystemAccessInDB(bodyDataRequest, registrationCallback) {
  var dbCS = {
    "host": config.admindb.host,
    "user": config.admindb.user,
    "port": config.admindb.port,
    "password": config.admindb.password,
    "database": config.admindb.databasename
  };

  const registerUserQuery = `INSERT INTO users (username, user_password, created_datetime, mobilenumber, emailaddress, lastname, firstname, registered_from) 
  VALUES ('${bodyDataRequest.username}', SHA('${bodyDataRequest.password}'), NOW(), '${bodyDataRequest.mobilenumber}', '${bodyDataRequest.emailaddress}', '${bodyDataRequest.lastname}', '${bodyDataRequest.firstname}', '${bodyDataRequest.registered_from}')`

  logger.info('registerUserInDB query is: ', registerUserQuery);

  try {
    //execute the query to get the user
    mySqlConnection.queryByDbCS(dbCS, 0, registerUserQuery, function (result, err) {
      registrationCallback(result, err);
    });
  } catch (error) {
    registrationCallback(null, error);
  }

}

function updateUserInDB(param, user_id, username, password, password_expired, active, mobilenumber, emailaddress, callback) {

  //create query using the data in the req.body to update the clients in the db
  const updateUsersQuery = `UPDATE users c SET 
  username = '${username}', 
  password = '${password}', 
  password_expired = ${password_expired},
  active = ${active},
  mobilenumber = '${mobilenumber}',
  emailaddress = '${emailaddress}'
  WHERE user_id = '${user_id}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, updateUsersQuery, callback)
}

function removeUserInDB(param, user_id, callback) {

  //create query using the data in the req.body to delete the clients in the db
  const deleteUsersQuery = `DELETE FROM users WHERE user_id = '${user_id}'`

  mySqlConnection.queryByTenantIdUserID(param.tenantid, param.userid, deleteUsersQuery, callback)
}

/**
 * Gets the user with the specified username and password.
 * It provides the results in a callback which takes an:
 * an error object which will be set to null if there is no error.
 * and a user object which will be null if there is no user
 *
 * @param username
 * @param password
 * @param callback - takes an error and a user object
 */
function getUserFromCrentials(username, password, callback) {

  mySqlConnection.tenantInfoByUserName(username, function (resp) {

    if (!resp.results) {
      callback(false);
    }
    else {
      if (resp.results.length > 0) {
        var userInfo = resp.results[0];
        if (userInfo.user_password !== mySqlConnection.sha1(password)) {
          callback(false, null);
          return;
        }
        else {
          callback(false, userInfo);
        }
      }
      else {
        callback(false, null);
      }
    }
  });
}

/**
 * Determines whether or not user with the specified userName exists.
 * It provides the results in a callback which takes 2 parameters:
 * an error object which will be set to null if there is no error, and
 * secondly a boolean value which says whether or the user exists.
 * The boolean value is set to true if the user exists else it's set
 * to false or it will be null if the results object is null.
 *
 * @param username
 * @param callback - takes an error and a boolean value indicating
 *                   whether a user exists
 */
function doesUserExist(username, callback) {

  // const doesUserExistQuery = `SELECT * FROM users WHERE username = '${username}'`
  // const sqlCallback = (dataResponseObject) => {
  //     const doesUserExist = dataResponseObject.results !== null ? dataResponseObject.results.length > 0 ? true : false : null
  //     callback(dataResponseObject.error, doesUserExist)
  // }
  // mySqlConnection.query(doesUserExistQuery, sqlCallback)

  var dname = username.split("@")[1];

  try {
    mySqlConnection.tenantInfoByDomainName(dname, function (results) {

      var tenantInfo = results.results[0];
      var dbCS = {
        "host": tenantInfo.dbhost,
        "user": tenantInfo.dbuser,
        "port": tenantInfo.dbport,
        "password": tenantInfo.dbpassword,
        "database": tenantInfo.dbname
      };

      const doesUserExistQuery = `SELECT * FROM users WHERE username = '${username}'`
      logger.info('doesUserExist query is: ', doesUserExistQuery);

      try {
        mySqlConnection.queryByDbCS(dbCS, 0, doesUserExistQuery, function (result) {
          callback(result.results.length > 0);
        });
      } catch (err) {
        callback(createDataResponseObject(err, null))
      }

    });
  } catch (error) {
    logger.error("doesUserExist error: " + error.message);
    callback(false);
  }

}

function doesUserExistInSystemAcccessTable(username, callback) {
  var dbCS = {
    "host": config.admindb.host,
    "user": config.admindb.user,
    "port": config.admindb.port,
    "password": config.admindb.password,
    "database": config.admindb.databasename
  };

  const doesUserExistQuery = `SELECT * FROM users WHERE username = '${username}'`
  logger.info('doesUserExist query is: ', doesUserExistQuery);

  try {
    mySqlConnection.queryByDbCS(dbCS, 0, doesUserExistQuery, function (result) {
      callback(result.results.length > 0);
    });
  } catch (error) {
    logger.error("doesUserExistInSystemAcccessTable error: " + error.message);
    callback(false);
  }

}