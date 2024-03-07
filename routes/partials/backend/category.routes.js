const express = require("express")
const router = express.Router()
const categoryController = require('../../../app/controller/backend/category.controller');
router
    .get("/category", categoryController.all)
    .post("/category/create", categoryController.create)
    .put("/updateCategory/:id", categoryController.update)
    .delete("/deleteCategory/:id", categoryController.delete)

module.exports = () => router;