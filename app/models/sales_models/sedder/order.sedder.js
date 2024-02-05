const { default: mongoose, Schema } = require("mongoose");
const orderModel = require("../order.model");
const orderProductListModel = require("../orderProductList.model");
const { db_url } = require("../../../../configs/db_config");

const order_id = async () => {
    let products = await orderProductListModel.findOne();
    return products;
}

const product_list = async () => [
    {
        user: "656ba5871f0ab1baa9ad1891",
        order_list: await order_id(),
        price: 5800
    }
]

module.exports = async () => mongoose.connect(db_url)
    .then(async () => {
        await orderModel.deleteMany({})
        await orderModel.insertMany(await product_list())

        console.log("order sedder complite")
    })