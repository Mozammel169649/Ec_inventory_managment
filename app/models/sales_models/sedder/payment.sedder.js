const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const paymentModel = require("../payment.model");
const userModel = require("../../product_models/user.model");
const orderModel = require("../order.model");

const customer_id = async()=>{
    const user = await userModel.findOne();
    return user._id;
 } 
 const order_id = async()=>{
    const order = await orderModel.findOne();
    return order._id;
 } 

const payment = async()=>[{
    user: await customer_id(),
    order_id:await order_id(),
    payment:800,
}]

module.exports = () => mongoose.connect(db_url)
    .then(async()=> {
        await paymentModel.deleteMany({})
        await paymentModel.insertMany(await payment())

        console.log("payment sedder complite")
    })