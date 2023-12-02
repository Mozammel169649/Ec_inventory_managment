const { default: mongoose, Schema } = require("mongoose");
const userModel = require("./user.model");
const supplierModel = require("./supplier.model");

module.exports = mongoose.model("product_stoke",
    mongoose.Schema({
        product_number: {
            type: Schema.Types.ObjectId,
            required: true,
            ref : productModel
        },
        stoke:{
            type : Number,
            required : true,
        },
        creator: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: userModel
        },
        suipplier:{
            type: Schema.Types.ObjectId,
            required : true,
            ref : supplierModel
        },

    },{
        timestamps: true,
    }))