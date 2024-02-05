const { default: mongoose, Schema } = require("mongoose");
const userModel = require("../product_models/user.model");
const orderModel = require("./order.model");
const { stripBasename } = require("@remix-run/router");

module.exports = mongoose.model("payments",
    mongoose.Schema(
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: userModel,
                require: true
            },
            order_id: {
                type: Schema.Types.ObjectId,
                ref: orderModel,
                require: true
            },
            payment: {
                type: Number,
                require: true
            }
        },{
            timestamps:true
        })
)