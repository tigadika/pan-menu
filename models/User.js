const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { hashPass } = require("../helpers/hashPassword");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    uniqueCaseInsensitive: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  //! need to be change
  role: {
    type: String,
    default: "admin",
  },
});

UserSchema.plugin(uniqueValidator, {
  type: "mongoose-unique-validator",
  message: "{PATH} has been registered",
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = await hashPass(this.password);
  next();
});

module.exports = UserSchema;
