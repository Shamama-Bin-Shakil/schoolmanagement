const { Schema, model } = require("mongoose");

const schema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
  
})

const Contact = model("contact", schema);
module.exports = Contact;