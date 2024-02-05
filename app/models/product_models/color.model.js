const { default: mongoose, Schema } = require("mongoose");
const productModel = require("./product.model");
const userModel = require("./user.model");


module.exports = mongoose.model("color_varient",
    mongoose.Schema({
        color: {
            type : String,
            require: true
        },
        creator:{
            type: Schema.Types.ObjectId,
            require : true,
            ref : "userModel"
        },

    },{
        timestamps: true,
    }))