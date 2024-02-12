const express = require('express');
const userController = require('../../../app/controller/backend/user.controller');
const router = express.Router()

router
    .get("/user", userController.all )
    .post("/updateUser/:id", userController.update )
    .get("/delete/:id", userController.delete);
module.exports = () => router;