const jwt = require('jsonwebtoken');
const productStokeModel = require('../../models/product_models/productStoke.model');

const controller = {
    all: async (req, res)=> {
        // console.log("all stock controller hitted");
        const data = await productStokeModel.find().populate([{ path:'supplier'},{ path:'creator'}]);
        // const data = await productStokeModel.find();
        console.log("from stock model",data);
        return res.json(data);
    },
    create : async(req, res)=>{
        const {atoken} = req.cookies
        const decoded = jwt.decode(atoken, '6fd286f7-708a-429b-b53a-2bc5272e0db6', algorithms=['HS256'])
        const {product_code,stock,supplier} = req.body
        // console.log(req.body);

        const Data = new productStokeModel({
            titproduct_codele: product_code,
            stock : stock,
            supplier : supplier,
            creator : decoded._id
        });
        await Data.save();
        return res.json(Data);
    },
    update: async (req, res)=>{
        const id = req.body.id;
        const {stock,product_code} = req.body;
        // console.log(req.body);
        const data = await productStokeModel.findByIdAndUpdate({_id:id},{stock : stock, product_code :product_code });
        // console.log(data);
        return res.json(data);
    },
    delete: async (req, res)=>{
        // console.log("hello");
        const id = req.params.id;
        const user = await productStokeModel.findByIdAndDelete({_id:id});
        // console.log(user);
        return res.json(user);
    }

}
module.exports = controller;