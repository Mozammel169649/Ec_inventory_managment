const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const colorModel = require("../color.model");


const colors = [
    {
        color: "red"
    },
    {
        color: "blue"
    },
    {
        color: "white"
    },
    {
        color: "black"
    },
    {
        color: "yellow"
    },
]

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await colorModel.deleteMany({})
        await colorModel.insertMany(colors)

        console.log("color sedder complite")
    })