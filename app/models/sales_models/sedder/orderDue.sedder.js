const { default: mongoose, Schema } = require("mongoose");
const orderModel = require("../order.model");
const { db_url } = require("../../../../configs/db_config");
const orderDueModel = require("../orderDue.model");

const order_id = async () => {
    let order = await orderModel.findOne();
    return order;
}

const order_due = async () => [
    {
        user: "656ba5871f0ab1baa9ad1891",
        order_list: await order_id(),
        due_price:600
    }
]

module.exports = async () => mongoose.connect(db_url)
    .then(async () => {
        await orderDueModel.deleteMany({})
        await orderDueModel.insertMany(await order_due())

        console.log("orderDue sedder complite")
    })