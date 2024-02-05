const { default: mongoose, Schema } = require("mongoose");
const userModel = require("../product_models/user.model");

module.exports = mongoose.model("user_contact",
    mongoose.Schema(
        {
            contact: {
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