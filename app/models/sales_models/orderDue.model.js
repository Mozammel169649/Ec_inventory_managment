const { default: mongoose, Schema } = require("mongoose");
const userModel = require("../product_models/user.model");
const orderProductListModel = require("./orderProductList.model");
const orderModel = require("./order.model");

module.exports = mongoose.model("order_due",
    mongoose.Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'userModel',
            require: true,
        },
        order_id:{
            type: Schema.Types.ObjectId,
            ref: 'orderModel',
            require:true,
        },
        due_price:{
            type: Number,
            require: true,
        }
    },
        {
            timestamps: true,
        }
    ))