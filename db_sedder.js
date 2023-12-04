const brandSedder = require("./app/models/product_models/sedders/brand.sedder");
const categorySedder = require("./app/models/product_models/sedders/category.sedder");
const supplierSedder = require("./app/models/product_models/sedders/supplier.sedder");
// const userseeder = require("./app/models/product_models/sedders/user.sedder")
const productSedder = require("./app/models/product_models/sedders/product.sedder")
const discountSedder = require("./app/models/product_models/sedders/discount.sedder")
const proudctStokeSedder = require("./app/models/product_models/sedders/proudctStoke.sedder")

const seed = async()=> {
    // await userseeder();
    await brandSedder();
    await categorySedder();
    await supplierSedder();
    await productSedder(); 
    await discountSedder();
    await proudctStokeSedder();
}

seed()