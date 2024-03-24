const jwt = require('jsonwebtoken');
const supplierModel = require('../../models/product_models/supplier.model');

const controller = {
    all: async (req, res) => {
        // console.log("all route ok");
        const data = await supplierModel.find().populate('creator');
        return res.json(data);
    },
    singleData: async (req, res) => {
        // const id = req.params.id;
        console.log('res from controler', req.params);
        const data = await supplierModel.findOne({ _id: req.params.id });
        // console.log("from product model",data);
        return res.json(data)
    },
    create: async (req, res) => {
        const { atoken } = req.cookies
        const decoded = jwt.decode(atoken, '6fd286f7-708a-429b-b53a-2bc5272e0db6', algorithms = ['HS256'])
        const {name, email, number, address, discription} = req.body
        console.log(req.body);
        const Data = new supplierModel({
            name: name,
            address:address,
            email:email,
            number:number,
            discription:discription,
            creator : decoded._id
        });
        await Data.save();
        return res.json(Data);
    },
    update: async (req, res) => {
        const { id, name, email, number, address, discription } = req.body;
        // console.log(req.body);
        const user = await supplierModel.findByIdAndUpdate({ _id: id }, { name: name, email: email, number: number, address: address, discription: discription });
        // console.log("update user", user);
        return res.json(user);
    },
    delete: async (req, res) => {
        // console.log("hello");
        const id = req.params.id;
        const user = await supplierModel.findByIdAndDelete({ _id: id });
        // console.log(user);
        return res.json(user);
    }

}
module.exports = controller;