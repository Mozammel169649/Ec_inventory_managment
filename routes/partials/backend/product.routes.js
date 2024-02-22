const express = require("express")
const productModel = require("../../../app/models/product_models/product.model");
const checkAuthMiddelware = require("../../../app/middelware/isAuth.middelware");
const router = express.Router()

router
    .get("/product", async function (req, res) {
        const data = await productModel.find();
        return res.json(data);
    })


    

    .get("/t", async function (req, res) {
        return res.json([{ a: 1 }, { a: 2 },{ a: 3 }]);
    })
    .get("/t/:id", async function (req, res) {
        return res.json({ a: req.params.id });
    })
    .post("/t", async function (req, res) {
        return res.json(req.body);
    })
    .put("/t/:id", async function (req, res) {
        return res.json(req.body);
    })
    .delete("/t/:id", async function (req, res) {

        return res.json("delete "+req.params.id);
    })
    ;

module.exports = () => router;