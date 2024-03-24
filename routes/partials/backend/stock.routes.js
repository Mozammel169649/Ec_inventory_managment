const express = require("express")
const router = express.Router()
const stockController = require('../../../app/controller/backend/stock.controller');
router
    .get("/stock", stockController.all)
    .post("/createstock", stockController.create)
    .put("/updatestock/:id", stockController.update)
    .delete("/deletestock/:id", stockController.delete)

module.exports = () => router;