const userModel = require("../../models/product_models/user.model");

const controller = {
    all: async function (req, res) {
        const data = await userModel.find();
        // console.log("user Data ok",data);
        return res.json(data);
    },
    update: async function (req, res){
        const id = req.body.id;
        const {userName,email,role} = req.body;
        // console.log(req.body);
        const user = await userModel.findByIdAndUpdate({_id:id},{userName:userName, email:email , role:role});
        // console.log(user);
        return res.json(user);
    },
    delete: async function(req,res){
        console.log("hello");
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete({_id:id});
        // console.log(user);
        return res.json(user);
    }
}

module.exports = controller;