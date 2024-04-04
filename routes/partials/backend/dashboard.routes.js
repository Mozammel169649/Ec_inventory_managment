const express = require("express")
const router = express.Router()
router
.get("/dashboard/admin", function (req, res) {
    return res.render("backend/pages/admin/dashboard");
})
.get("/dashboard/seller", function (req, res) {
    return res.render("backend/pages/seller/dashboard");
})
.get("/dashboard/manager", function (req, res) {
    return res.render("backend/pages/manager/dashboard");
})

module.exports = () => router;