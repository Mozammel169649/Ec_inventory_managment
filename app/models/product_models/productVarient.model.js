const { default: mongoose, Schema } = require("mongoose");
const productModel = require("./product.model");
const userModel = require("./user.model");
const varientModel = require("./varient.model");


module.exports = mongoose.model("product_varient", //varient is not have sedder
    mongoose.Schema({
        product_id: {
            type: Schema.Types.ObjectId,
            ref : "productModel",
            require : true
        },
        varient_name: {
            type: String,
            ref : 'varientModel',
            require : true
        },
        variebt_value: {
            type: String,
            require : true
        },
        creator: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "userModel"
        },
    },{
        timestamps: true,
    }))