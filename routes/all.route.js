const express = require('express');
const userRoutes = require('./partials/backend/user.routes');
const roleRoutes = require('./partials/backend/role.routes');
const productRoutes = require('./partials/backend/product.routes');
const categoryRoutes = require('./partials/backend/category.routes');
const brandRoutes = require('./partials/backend/brand.routes');
const supplierRoutes = require('./partials/backend/supplier.routes');
const websiteRoutes = require('./partials/frontend/website.routes');
const authRoutes = require('./partials/auth/auth.routes');
const stockRoutes = require('./partials/backend/stock.routes');
const router = express.Router();

router.use(userRoutes());
router.use(categoryRoutes());
router.use(brandRoutes());
router.use(supplierRoutes());
router.use(productRoutes());
router.use(websiteRoutes());
router.use(authRoutes());
router.use(roleRoutes());
router.use(stockRoutes())
module.exports =()=> router;