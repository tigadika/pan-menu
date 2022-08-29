const mongoose = require("mongoose");

module.exports = function connection() {
  mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("DB Connected");
  });
};
