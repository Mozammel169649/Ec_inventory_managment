const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const productModel = require("../product.model");
const userModel = require("../user.model");
const supplierModel = require("../supplier.model");
const productStokeModel = require("../productStoke.model");


const get_stoke_product_number = async ()=>{
    let product = await productModel.findOne()
    return product.product_number;
} 
const get_creater_id = async ()=> {
    let creator = await userModel.findOne()
    return creator._id;
}
const get_supplier_id = async ()=> {
    let supplier = await supplierModel.findOne()
    return supplier._id;
}
const get_productStok =async()=> {
    let product = await productModel.findOne()
    return product.stokes;
} 

const stoke = async()=>[
    {
        product_number:await get_stoke_product_number(),
        stoke: await get_productStok(),
        creator:await get_creater_id(),
        supplier:await get_supplier_id()
    }
];

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await productStokeModel.deleteMany({});
        await productStokeModel.insertMany(await stoke());

        console.log("stoke sedder complite");
    }

    )