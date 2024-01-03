const express = require('express');
const router = express.Router();

router
    .get("/", function (req, res) {
        return res.render("home");
    })
    .get("/dashboard", function (req, res) {
        return res.render("backend/pages/admin/dashboard");
    })
    .get("/login", function (req, res) {
        console.log("login ok")
        return res.render("frontend/pages/login");
    })
    .get("/register", function (req, res) {
        return res.render("frontend/pages/register");
    })

module.exports = () => router;