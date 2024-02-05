const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const categoryModel = require("../category.model");
const userModel = require("../user.model");

const get_user_id = async () => {
    let user = await userModel.findOne();
    return user._id;
}

const categories = async()=> [
    {
        title: "Shoes",
        creator: await get_user_id(),
        status: true,
    },
    {
        title: "Cloth",
        creator: await get_user_id(),
        status: true,
    },
    {
        title: "pants",
        creator: await get_user_id(),
        status: true,
    }
];

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await categoryModel.deleteMany({});
        await categoryModel.insertMany(await categories());

        console.log("category sedder complite");
    }

    )