const userModel = require("../../models/product_models/user.model");

const controller = {
    all: async function (req, res) {
        const data = await userModel.find();
        // console.log("user Data ok",data);
        return res.json(data);
    },
    update: async function (req, res){
        const id = req.params.id;
        const {userName,email,role} = req.body?.updateUser;
        console.log("id email", email, id);
        const user = await userModel.findByIdAndUpdate({_id:id},{userName:userName, email:email , role:role});
        console.log("user from update controller",user);
        return res.json(user);
    },
    delete: async function(req,res){
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete({_id:id});
        return res.json(user);
    }
}

module.exports = controller;