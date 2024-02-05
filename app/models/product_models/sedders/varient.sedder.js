const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const userModel = require("../user.model");
const varientModel = require("../varient.model");

const creator_id =async()=>{
const user = await userModel.findOne()
return user._id;
}

const varients = async()=> [
    {
        name: "size",
        creator : await creator_id()
    },
    {
        name: "color",
        creator : await creator_id()
    },
   
]

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
        await varientModel.deleteMany({})
        await varientModel.insertMany( await varients())

        console.log("varient sedder complite")
    })