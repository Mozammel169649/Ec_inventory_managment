const express = require("express")
const productModel = require("../../../app/models/product_models/product.model");
const checkAuthMiddelware = require("../../../app/middelware/isAuth.middelware");
const router = express.Router()

router
    .get("/product",async function (req,res) {
        const data = await productModel.find();
        return res.json(data);
    });

module.exports = ()=> router;