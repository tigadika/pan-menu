if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const port = process.env.PORT || 3000;

mongoose.connect(
  process.env.DB_CONNECTION,
  () => { console.log('DB Connected'); }
);

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); 
