const express = require('express');
const userModel = require('../../../app/models/product_models/user.model');
const router = express.Router()

router
    .get("/user", async function (req,res) {
        const data = await userModel.find();
        return res.json(data);
    });

module.exports = ()=> router;