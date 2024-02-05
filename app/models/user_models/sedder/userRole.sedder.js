const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const userRoleModel = require("../userRole.model");

const user_role = [
    {
        role : 'admin'
    },
    {
        role : 'user'
    }
];

module.exports = () => mongoose.connect(db_url)
    .then(async () => {
       await userRoleModel.deleteMany({})
       await userRoleModel.insertMany(user_role)

       console.log("user role sedder complite")
    })