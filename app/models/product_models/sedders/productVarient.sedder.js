const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const userModel = require("../user.model");
const productVarientModel = require("../productVarient.model");
const varientModel = require("../varient.model");
const productModel = require("../product.model");

const product_id =async()=> {
    let product = await productModel.findOne()
    return product._id;
} 
const varient_id =async()=> {
    let varient = await varientModel.findOne()
    return varient.name;
} 
const creator_id = async () => {
    const user = await userModel.findOne()
    return user._id;
}

const product_varients = async () => [
    {
        product_id:await product_id(),
        varient_name: await varient_id(),
        variebt_value: "M",
        creator: await creator_id()
    }
]

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await productVarientModel.deleteMany({})
        await productVarientModel.insertMany(await product_varients())

        console.log("product_varients sedder complite")
    })