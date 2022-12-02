const { Schema, model } = require("mongoose");

const schema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Admin = model("admin", schema);
module.exports = Admin;
