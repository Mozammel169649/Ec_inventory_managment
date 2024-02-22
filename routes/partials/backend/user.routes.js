const express = require('express');
const userController = require('../../../app/controller/backend/user.controller');
const router = express.Router()

router
    .get("/user", userController.all )
    .put("/updateUser/:id", userController.update )
    .delete("/userDelete/:id", userController.delete);
module.exports = () => router;