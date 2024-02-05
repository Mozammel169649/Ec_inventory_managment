const { default: mongoose, Schema } = require("mongoose");
const userModel = require("../product_models/user.model");

module.exports = mongoose.model("user_address",
    mongoose.Schema(
        {
            address: {
                type: String,
                require: true
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: 'userModel',
                require: true
            }
        },
        {
            timestamp: true
        }
    ))