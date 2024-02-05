const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const supplierModel = require("../supplier.model");
const userModel = require("../user.model");

const get_user_id = async () => {
    let user = await userModel.findOne();
    return user._id;
}

const suppliers = async()=> [
    {
        name : "Amjad ali",
        email :"amjadali123@gamil.com",
        number:"0188345637",
        creator: await get_user_id(),
        address:"H-Bock,Mirpur-2,Dhaka",
        discription:" He is a Bata importer",
    },
    {
        name : "Ali hossain",
        email :"alihossain@gamil.com",
        number:"0198345639",
        creator: await get_user_id(),
        address:"H-Bock,Mirpur-2,Dhaka",
        discription:" He is a shoes importer",
    },
    {
        name : "mozammel hossain",
        email :"mozammelhossain@gamil.com",
        number:"0168345623",
        creator: await get_user_id(),
        address:"H-Bock,Mirpur-2,Dhaka",
        discription:" He is a lotto importer",
    },
]

module.exports = ()=> mongoose.connect(db_url)
.then(async()=>{
    await supplierModel.deleteMany({})
    await supplierModel.insertMany(await suppliers())

    console.log("supplier sedder complite")
})