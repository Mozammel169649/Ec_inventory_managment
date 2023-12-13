const { default: mongoose, Schema } = require("mongoose");
const userModel = require("../product_models/user.model");
const orderModel = require("./order.model");

module.exports = mongoose.model("history",
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
        pamyment_status : {
            type : String,
            default: "complite"
        }
    },
        {
            timestamps: true,
        }
    ))