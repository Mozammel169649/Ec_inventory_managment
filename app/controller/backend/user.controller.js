const userModel = require("../../models/product_models/user.model");

const controller = {
    all: async (req, res)=> {
        const data = await userModel.find();
        // console.log("user Data ok",data);
        return res.json(data);
    },
    update: async (req, res)=>{
        const id = req.body.id;
        const {userName,email,role} = req.body;
        console.log('user role from user controller', role);
        const user = await userModel.findByIdAndUpdate({_id:id},{userName:userName, email:email , role:role});
        // console.log(user);
        return res.json(user);
    },
    delete: async (req, res)=>{
        console.log("hello");
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete({_id:id});
        // console.log(user);
        return res.json(user);
    }
}

module.exports = controller;