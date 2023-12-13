const { default: mongoose, Schema } = require("mongoose");
const orderModel = require("../order.model");
const { db_url } = require("../../../../configs/db_config");
const orderHistoryModel = require("../orderHistory.model");

const order_id = async () => {
    let order = await orderModel.findOne();
    return order;
}

const order_history = async () => [
    {
        user: "656ba5871f0ab1baa9ad1891",
        order_id: await order_id(),
        price:5650,
        due_price:600,
        pyment_status: true

    }
]

module.exports = async () => mongoose.connect(db_url)
    .then(async () => {
        await orderHistoryModel.deleteMany({})
        await orderHistoryModel.insertMany(await order_history())

        console.log("order history sedder complite")
    })