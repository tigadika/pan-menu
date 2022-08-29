module.exports = (err, req, res, next) => {
  let code, message;
  let detail = [];

  switch (err.name) {
    case "ValidationError":
      code = 400;
      message = "Validation Error";
      for (const key in err.errors) {
        detail.push(err.errors[key].message);
      }
      break;
    case "InvalidUser":
      code = 401;
      message = "Unauthorized";
      detail = "Username / Email is invalid";
      break;
    case "InvalidPassword":
      code = 401;
      message = "Unauthorized";
      detail = "Password is invalid";
      break;
    case "JsonWebTokenError":
      code = 401;
      message = "Unauthorized";
      detail = "Invalid token";
      break;
    case "TokenExpiredError":
      code = 401;
      message = "Unauthorized";
      detail = "Invalid token: expired";
      break;
    case "Unauthorized":
      code = 401;
      message = "Unauthorized";
      detail = "You tried to do unauthorized action/s";
      break;
    default:
      code = 500;
      message = "Internal Server Error";
      detail = err;
      break;
  }
  console.log(err);

  res.status(code).json({
    code,
    message,
    detail,
  });
};
