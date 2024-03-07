const express = require("express")
const router = express.Router()
const brandController = require('../../../app/controller/backend/brand.controller');
router
    .get("/brand", brandController.all)
    .post("/createbrand", brandController.create)
    .put("/updatebrand/:id", brandController.update)
    .delete("/deletebrand/:id", brandController.delete)

module.exports = () => router;