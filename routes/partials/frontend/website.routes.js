const express = require('express');
const router = express.Router();
const webController = require("../../../app/controller/frontend/web.controller");

router
    .get("/", function (req, res) {
      return res.render("frontend/pages/home");
    })
    .get("/homeNav", webController.navDinamic )
    
module.exports = () => router;