const { default: mongoose, Schema } = require("mongoose");
const userModel = require("./user.model");
const supplierModel = require("./supplier.model");
const productModel = require("./product.model");

module.exports = mongoose.model("product_stoke",
    mongoose.Schema({
        product_number: {
            type: String,
            require: true,
            ref: "productModel"
        },
        stoke: {
            type: Number,
            require: true,
            ref: "productModel",
        },
        creator: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "userModel"
        },
        supplier: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "supplierModel"
        },

    }, {
        timestamps: true,
    }))