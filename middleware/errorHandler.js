const constants = require("../constants");

const errorhandler = (error, req, res, next) => {
  const statusCode = res.status ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      console.log("StatusCode" , constants.VALIDATION_ERROR)

      res.json({
        title: "Validation Failed",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorised",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Validation Failed",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    default:
      console.log("Unkonown error!", error.message);
      break;
  }
};

module.exports = errorhandler;
