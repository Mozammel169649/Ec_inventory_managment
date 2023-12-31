const express = require('express');
const userRoutes = require('./partials/backend/user.routes');
const productRoutes = require('./partials/backend/product.routes');
const websiteRoutes = require('./partials/frontend/website.routes');
const authRoutes = require('./partials/auth/auth.routes');
const router = express.Router();

router.use(userRoutes());
router.use(productRoutes());
router.use(websiteRoutes());
router.use(authRoutes());

module.exports =()=> router;