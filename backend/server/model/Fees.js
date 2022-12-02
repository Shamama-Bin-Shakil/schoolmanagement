const { Schema, model } = require("mongoose");

const schema = Schema({
    userid: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    month: {
        type: String,
        require: true
    },
    fees: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },

  
})

const Fees = model("fee", schema);
module.exports = Fees;