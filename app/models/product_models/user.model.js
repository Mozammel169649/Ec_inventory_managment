const { default: mongoose } = require("mongoose");

module.exports = mongoose.model("users",
    mongoose.Schema({
        userName: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            default: 'user',
        },
        address: String,
        contact: String,
    },
        {
            timestamps: true,
        }
    ));