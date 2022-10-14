let userDBHelper;
const loggerService = require('./../logger_service');
const logger = new loggerService('rbService');

module.exports = injectedUserDBHelper => {
  userDBHelper = injectedUserDBHelper
  return {
    registerusers: registerUsers,
    signupusers: signUpUsers,
    //    updateuser: updateUser,
    //    removeuser: removeUser,
    login: login
  };
};

/* handles the api call to register the user and insert them into the users table.
  The req body should contain a username and password. */
function registerUsers(req, res) {

  logger.info(`authRoutesMethods: registerUser: req.body is:`, req.body);

  //query db to see if the user exists already
  userDBHelper.doesUserExist(req.body.username, (result) => {

    //check if the user exists
    if (result) {
      const message = result > 0 ? "User already exists" : "Operation unsuccessful";
      sendResponse(res, message, "");
      return;
    }

    //register the user in the db
    userDBHelper.registerUserInDB(req.body.username, req.body.password, req.body.password_expired, req.body.active, req.body.mobilenumber, req.body.emailaddress, dataResponseObject => {

      //create message for the api response
      const message = dataResponseObject.error === null ? "Registration was successful" : "Failed to register user"

      sendResponse(res, message, dataResponseObject.error);
    });
  });
}

function signUpUsers(req, res) {

  logger.info(`authRoutesMethods: signupusers: req.body is:`, req.body);

  // /query db to see if the user exists already
  userDBHelper.doesUserExistInSystemAcccessTable(req.body.username, (result) => {
    //check if the user exists
    if (result) {
      const message = result > 0 ? "User already exists" : "Operation unsuccessful";
      sendResponse(res, message, "");
      return;
    }

    //register the user in the db
    userDBHelper.registerUserSystemAccessInDB(req.body, dataResponseObject => {

      //create message for the api response
      const message = dataResponseObject.error === null ? "Registration was successful" : "Failed to register user"

      sendResponse(res, message, dataResponseObject.error === null);
    });
  });
}

/*  async function updateUser(req, res){

    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.info(`authRoutesMethods: updateUser: req.body is:`, req.body);

          //create the staff in the db
          userDBHelper.updateUserInDB(param, req.body.user_id, req.body.username, req.body.password, req.body.password_expired, req.body.active, req.body.mobilenumber, req.body.emailaddress, dataResponseObject => {
        
        //create message for the api response
        const message =  dataResponseObject.error === null  ? "Update Users was successful" : "Failed to update Users"
        
        sendResponse(res, message, dataResponseObject.error)
      })
  }

  async function removeUser(req, res){

    var param = { tenantid: req.query.tenant_id, userid: req.query.user_id };

    logger.info(`authRoutesMethods: removeUser: req.body is:`, req.body);

          //create the staff in the db
          userDBHelper.removeUserInDB(param, req.body.user_id, dataResponseObject => {
        
        //create message for the api response
        const message =  dataResponseObject.error === null  ? "Delete Users was successful" : "Failed to delte Users"
        
        sendResponse(res, message, dataResponseObject.error)
      })
  }
*/

function login(registerUserQuery, res) {
  var resss = "";
}

//sends a response created out of the specified parameters to the client.
//The typeOfCall is the purpose of the client's api call
function sendResponse(res, message, error) {
  res
    .status(error !== null ? 200 : 400)
    .json({
      'message': message,
      'error': error,
    })
}
