const { default: mongoose, Schema } = require("mongoose");
const productModel = require("../product_models/product.model");
const userModel = require("../product_models/user.model");

module.exports = mongoose.model("order_product_list",
    mongoose.Schema({
        product: {
            type: [Schema.Types.ObjectId],
            require: true,
            ref: 'productModel',
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'userModel',
            require: true,
        },
    }, {
        timestamps: true,
    }
    ))