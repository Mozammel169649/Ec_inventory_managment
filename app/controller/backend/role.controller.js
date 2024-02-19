const userRoleModel = require("../../models/user_models/userRole.model");

const controller = {
    all: async function (req, res) {
        console.log("i am from user role api")
        const data = await userRoleModel.find();
        return res.json(data);
    },
}

module.exports = controller;