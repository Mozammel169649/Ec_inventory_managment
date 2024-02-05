const express = require('express');
const router = express.Router();

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
    .get("/login", function (req, res) {
        console.log("login ok")
        return res.render("frontend/pages/login");
    })
    .get("/register", function (req, res) {
        return res.render("frontend/pages/register");
    })

module.exports = () => router;