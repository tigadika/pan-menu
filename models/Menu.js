const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [100, "Price min 100 IDR"],
  },
  image: {
    type: String,
  },
  isInStock: {
    type: Boolean,
    default: true,
  },
});

module.exports = MenuSchema;
