const { default: mongoose, Schema } = require("mongoose");
const userModel = require("./user.model");
const productVarientModel = require("./productVarient.model");

module.exports = mongoose.model("stoke_Log", //stokLog is not have sedder
    mongoose.Schema({
        product: {
            type: Schema.Types.ObjectId,
            require: true,
            ref : "productModel"
        },
        type:{
            type:Schema.Types.ObjectId,
            require: true,
            ref : "productVarientModel"
        },
        quantity:{
            type: Number,
            require: true,
        },
        creator: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "userModel"
        },
    },{
        timestamps: true,
    }))