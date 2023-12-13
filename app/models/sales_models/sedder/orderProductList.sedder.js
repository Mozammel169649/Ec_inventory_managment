const { default: mongoose } = require("mongoose");
const orderProductListModel = require("../orderProductList.model");
const userModel = require("../../product_models/user.model");
const productModel = require("../../product_models/product.model");
const { db_url } = require("../../../../configs/db_config");

const customer_id = async()=>{
   const user = await userModel.findOne();
   return user._id;
} 
const orderProduct = async()=>{
  const products = await productModel.find();
  return products.map(i=>i._id);
}

const products = async() => [
    {
        product: await orderProduct(),
        user : await customer_id(),
    }
]


module.exports = () => mongoose.connect(db_url)
    .then( async () => {
        await orderProductListModel.deleteMany({});
        await orderProductListModel.insertMany(await products());
        
        console.log("order product List seeding complete");

    });
