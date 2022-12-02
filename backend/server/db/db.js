const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;
const connectDB = () => {
  mongoose.connect(url, () => {
    console.log("CONNECTION SUCCESSFULLY");
  })
}

module.exports = connectDB;
