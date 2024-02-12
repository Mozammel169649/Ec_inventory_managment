const express = require('express');
const router = express.Router();
const webController = require("../../../app/controller/frontend/web.controller");

router
    .get("/", function (req, res) {
      return res.render("frontend/pages/home");
    })
    .get("/dashboard/admin", function (req, res) {
        return res.render("backend/pages/admin/dashboard");
    })
    .get("/dashboard/seller", function (req, res) {
        return res.render("backend/pages/seller/dashboard");
    })
    .get("/dashboard/manager", function (req, res) {
        return res.render("backend/pages/manager/dashboard");
    })
    

    .get("/homeNav", webController.navDinamic )


module.exports = () => router;