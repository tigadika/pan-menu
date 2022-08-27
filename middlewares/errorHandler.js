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
    default:
      code = 500;
      message = "Internal Server Error";
      detail = err;
      break;
  }

  res.status(code).json({
    code,
    message,
    detail,
  });
};
