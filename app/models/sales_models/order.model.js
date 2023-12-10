const { default: mongoose, Schema } = require("mongoose");
const userModel = require("../product_models/user.model");
const orderProductListModel = require("./orderProductList.model");

module.exports = mongoose.model("order",
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
        price:{
            type: Number,
            require: true,
        },
    },
        {
            timestamps: true,
        }
    ))