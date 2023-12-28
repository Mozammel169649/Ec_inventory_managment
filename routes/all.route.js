const express = require('express');
const userRoutes = require('./partials/backend/user.routes');
const productRoutes = require('./partials/backend/product.routes');
const router = express.Router();

router.use(userRoutes());
router.use(productRoutes());

module.exports =()=> router;