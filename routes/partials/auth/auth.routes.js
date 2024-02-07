const express = require("express");
const authController = require("../../../app/controller/auth/auth.controller");
const router = express.Router()

router
    .post("/signUp_submit", authController.signUp)
    .post("/login-submit", authController.login)
    // .get("/logout", authController.logout)

module.exports = () => router;