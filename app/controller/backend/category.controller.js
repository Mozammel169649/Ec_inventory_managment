const categoryModel = require("../../models/product_models/category.model");
const jwt = require('jsonwebtoken');

const controller = {
    all: async (req, res)=> {
        const data = await categoryModel.find().populate('creator');
        // console.log("user Data ok",data);
        return res.json(data);
    },
    create : async(req, res)=>{
        const {atoken} = req.cookies
        const decoded = jwt.decode(atoken, '6fd286f7-708a-429b-b53a-2bc5272e0db6', algorithms=['HS256'])
        const {title} = req.body

        const Data = new categoryModel({
            title: title,
            creator : decoded._id
        });
        await Data.save();
        return res.json(Data);
    },
    update: async (req, res)=>{
        const id = req.body.id;
        const {title} = req.body;
        // console.log(req.body);
        const user = await categoryModel.findByIdAndUpdate({_id:id},{title : title});
        // console.log(user);
        return res.json(user);
    },
    delete: async (req, res)=>{
        // console.log("hello");
        const id = req.params.id;
        const user = await categoryModel.findByIdAndDelete({_id:id});
        // console.log(user);
        return res.json(user);
    }

}
module.exports = controller;