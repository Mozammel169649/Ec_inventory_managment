const express = require('express');
const userModel = require('../../../app/models/product_models/user.model');
const checkAuthMiddelware = require('../../../app/middelware/isAuth.middelware');
const router = express.Router()

router
    .get("/user", async function (req, res) {
        const data = await userModel.find();
        return res.json(data);
    });

module.exports = () => router;