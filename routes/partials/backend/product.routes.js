const express = require("express")
const router = express.Router()
const productController = require('../../../app/controller/backend/product.controller');

router
    .get("/product", productController.all)
    .get("/product/:id", productController.singleData)
    .post("/createproduct", productController.create)
    .put("/updateproduct", productController.update)
    .delete("/deleteproduct/:id", productController.delete)


    























    
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