const categoryModel = require("../../models/product_models/category.model");

const controller = {
    all: async (req, res)=> {
        const data = await categoryModel.find();
        // console.log("user Data ok",data);
        return res.json(data);
    },
    create : async(res,req)=>{

    },
    update: async (req, res)=>{
        const id = req.body.id;
        const {userName,email,role} = req.body;
        // console.log(req.body);
        const user = await categoryModel.findByIdAndUpdate({_id:id},{userName:userName, email:email , role:role});
        // console.log(user);
        return res.json(user);
    },
    delete: async (req, res)=>{
        console.log("hello");
        const id = req.params.id;
        const user = await categoryModel.findByIdAndDelete({_id:id});
        // console.log(user);
        return res.json(user);
    }

}
module.exports = controller;