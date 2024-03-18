const jwt = require('jsonwebtoken');
const brandModel = require('../../models/product_models/brand.model');

const controller = {
    all: async (req, res)=> {
        const data = await brandModel.find().populate('creator');
        // const data = await brandModel.find();
        // console.log("from brand model",data);
        return res.json(data);
    },
    create : async(req, res)=>{
        const {atoken} = req.cookies
        const decoded = jwt.decode(atoken, '6fd286f7-708a-429b-b53a-2bc5272e0db6', algorithms=['HS256'])
        const {title} = req.body

        const Data = new brandModel({
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
        const user = await brandModel.findByIdAndUpdate({_id:id},{title : title});
        // console.log(user);
        return res.json(user);
    },
    delete: async (req, res)=>{
        // console.log("hello");
        const id = req.params.id;
        const user = await brandModel.findByIdAndDelete({_id:id});
        // console.log(user);
        return res.json(user);
    }

}
module.exports = controller;