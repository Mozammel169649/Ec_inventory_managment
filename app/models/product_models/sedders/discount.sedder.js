const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const discountModel = require("../discount.model");
const productModel = require("../product.model");
const userModel = require("../user.model");

const Discount_product_number = async ()=>{
    let product = await productModel.findOne()
    return product.product_number;
} 
const get_creater_id = async ()=> {
    let creator = await userModel.findOne()
    return creator._id;
}
const productDiscount =async()=> {
    let product = await productModel.findOne()
    return product.discount;
} 

const product_discont = async()=>[
    {
        product_number:await Discount_product_number(),
        discount :await productDiscount(),
        creator: await get_creater_id()
    }
];

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await discountModel.deleteMany({});
        await discountModel.insertMany(await product_discont());

        console.log("discount sedder complite");
    }

    )