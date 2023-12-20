const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const userModel = require("../../product_models/user.model");
const userContactModel = require("../userContact.model");

const user_id = async()=>{
    const user = await userModel.findOne();
    return user._id;
 } 

const user_contact =async()=> [
    {
        contact:"01881558315",
        user: await user_id()
    },
];

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
       await userContactModel.deleteMany({})
       await userContactModel.insertMany(await user_contact())

       console.log("user contact sedder complite")
    })