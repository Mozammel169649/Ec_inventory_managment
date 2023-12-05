const { default: mongoose, Schema } = require("mongoose");
const userModel = require("./user.model");

module.exports = mongoose.model("categories",
        mongoose.Schema({
            title: {
                type: String,
                require: true,
            },
            creator: {
                type: Schema.Types.ObjectId,
                require: true,
                ref: "userModel",
            },
            status: {
                type: Boolean,
                default: true,
            }
        }, {
            timestamps: true,
        })
    )