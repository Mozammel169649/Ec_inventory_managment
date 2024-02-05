const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const userModel = require("../../product_models/user.model");
const useraddressModel = require("../useraddress.model");

const user_id = async()=>{
    const user = await userModel.findOne();
    return user._id;
 } 

const user_address =async()=> [
    {
        address:"mirpur-2,Dhaka 1216",
        user: await user_id()
    },
];

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
       await useraddressModel.deleteMany({})
       await useraddressModel.insertMany(await user_address())

       console.log("user address sedder complite")
    })