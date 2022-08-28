const mongoose = require("mongoose");
const UserSchema = require("./User");
const MenuSchema = require("./Menu");

module.exports = {
  User: mongoose.model("User", UserSchema),
  Menu: mongoose.model("Menu", MenuSchema),
};
