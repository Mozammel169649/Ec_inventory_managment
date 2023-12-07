const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const userModel = require("../user.model");
const brandModel = require("../brand.model");


const get_user_id = async () => {
    let user = await userModel.findOne();
    return user._id;
}

const brands = async() => [
    {
        title: "Bosundra",
        creator: await get_user_id(),
        status: true,
    },
    {
        title: "Jomuna",
        creator: await get_user_id(),
    },
    {
        title: "Bata",
        creator: await get_user_id(),
        status: true,
    }
];

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await brandModel.deleteMany({});
        await brandModel.insertMany( await brands());

        console.log("brand sedder complite");
    })