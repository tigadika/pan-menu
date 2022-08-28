const { User } = require("../models");
const { readToken } = require("../helpers/webToken");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = readToken(access_token);

    const foundUser = await User.findOne({
      email: payload.email,
    });

    req.user = {
      id: foundUser.id,
      role: foundUser.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
