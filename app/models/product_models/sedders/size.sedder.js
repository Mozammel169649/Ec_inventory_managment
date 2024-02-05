const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const sizeModel = require("../size.model");

const sizes = [
    {
        size: "s"
    },
    {
        size: "M"
    },
    {
        size: "L"
    },
    {
        size: "xL"
    },
    {
        size: "xxL"
    },
]

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await sizeModel.deleteMany({})
        await sizeModel.insertMany(sizes)

        console.log("size sedder complite")
    })