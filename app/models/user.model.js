const { default: mongoose } = require("mongoose");

module.exports = mongoose.model("users",
    mongoose.Schema({
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
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