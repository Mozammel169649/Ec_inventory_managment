const express = require("express")
const router = express.Router()
const supplierController = require('../../../app/controller/backend/supplier.controller');
router
    .get("/supplier", supplierController.all)
    .get("/supplier/:id", supplierController.singleData)
    .post("/createsupplier", supplierController.create)
    .put("/updatesupplier/:id", supplierController.update)
    .delete("/deletesupplier/:id", supplierController.delete)

module.exports = () => router;