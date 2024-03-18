const jwt = require('jsonwebtoken');
const productModel = require('../../models/product_models/product.model');


const controller = {
    all: async (req, res)=> {
        console.log('res from controler',res.cookie);
        const data = await productModel.find().populate([{ path:'categories'},{ path:'brand'},{ path:'creator'}]);
        // console.log("from product model",data);
        return res.json(data)
    },
    create : async(req, res)=>{
        const {atoken} = req.cookies
        const decoded = jwt.decode(atoken, '6fd286f7-708a-429b-b53a-2bc5272e0db6', algorithms=['HS256'])
        console.log("product creator body data", req.body);
        // const {} = req.body

        // const Data = new brandModel({
        //     // title:,
        //     // product_number:,
        //     // categories:,
        //     // brand:,
        //     // creator:,
        //     // discount:,
        //     // stokes:,
        //     // varient:,
        //     // supplier:,
        //     // price:,
        //     // short_discription:,
        //     // discription:,
        //     // seo_title:,
        //     // status:,
        //     // date:,
        //     // image:,
        //     // related_images: ,
        //     // taqs:,
        // });
        // await Data.save();
        // return res.json(Data);
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