const { default: mongoose, Schema } = require("mongoose");
const userModel = require("./user.model");
const productModel = require("./product.model");


module.exports = mongoose.model("discount", 
mongoose.Schema({
    product_number: {
        type: String,
        require: true,
        ref : "productModel"
    },
    discount :{
      type: Number,
      require : true,
      ref : "productModel"
    },
    creator:{
        type: Schema.Types.ObjectId,
        require : true,
        ref : "userModel"
    },
},
{
    timestamps: true,
}))