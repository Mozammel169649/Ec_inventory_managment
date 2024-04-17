const { default: mongoose, Schema } = require("mongoose");
const userRoleModel = require("../user_models/userRole.model");

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
            ref: "userRoleModel"
        },
        // secrate_code :{
        //     type: String,
        // },
        address: String,
        contact: String,
    },
        {
            timestamps: true,
        }
    ));