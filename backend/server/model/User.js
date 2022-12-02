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
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    birth_date: {
        type: String,
        require: true
    },
    otp: {
        type: String,
    },
})

const User = model("user", schema);
module.exports = User;