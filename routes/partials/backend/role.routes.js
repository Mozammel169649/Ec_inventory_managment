const express = require('express');
const roleController = require("../../../app/controller/backend/role.controller");
const router = express.Router()

router
    .get("/role", roleController.all )
module.exports = () => router;