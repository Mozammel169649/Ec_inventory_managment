const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const userModel = require("../user.model");

let users = [
    {
        userName: "admin",
        email: "admin@gmail.com",
        password: "admin",
    },
    {
        userName: "user",
        email: "user@gmail.com",
        password: "user",
    },
];

module.exports = () => mongoose.connect(db_url)
    .then( async () => {
        await userModel.deleteMany({});
        await userModel.insertMany(users);

        console.log("user seeding complete");

    });

