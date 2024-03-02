const brandSedder = require("./app/models/product_models/sedders/brand.sedder");
const categorySedder = require("./app/models/product_models/sedders/category.sedder");
const supplierSedder = require("./app/models/product_models/sedders/supplier.sedder");
const userseeder = require("./app/models/product_models/sedders/user.sedder")
const productSedder = require("./app/models/product_models/sedders/product.sedder")
const discountSedder = require("./app/models/product_models/sedders/discount.sedder")
const proudctStokeSedder = require("./app/models/product_models/sedders/proudctStoke.sedder");
const orderProductListSedder = require("./app/models/sales_models/sedder/orderProductList.sedder");
const orderSedder = require("./app/models/sales_models/sedder/order.sedder");
const orderDueSedder = require("./app/models/sales_models/sedder/orderDue.sedder");
const orderHistorySedder = require("./app/models/sales_models/sedder/orderHistory.sedder");
const paymentSedder = require("./app/models/sales_models/sedder/payment.sedder")
const userContactSedder = require("./app/models/user_models/sedder/userContact.sedder")
const userRoleSedder = require("./app/models/user_models/sedder/userRole.sedder")
const colorSedder = require("./app/models/product_models/sedders/color.sedder");
const sizeSedder = require("./app/models/product_models/sedders/size.sedder")
const useraddressSedder = require("./app/models/user_models/sedder/useraddress.sedder")

const productVarientSedder = require("./app/models/product_models/sedders/productVarient.sedder")
const varientSedder = require("./app/models/product_models/sedders/varient.sedder")

const seed = async()=> {
  
    // ------  usersedder --------//
    // await userseeder();
    // await userRoleSedder();
    // await userContactSedder();
    // await useraddressSedder();

    // // ------  productsedder --------//
    // await brandSedder();
    await categorySedder();
    // await supplierSedder();
    // await productSedder(); 
    // await discountSedder();
    // await proudctStokeSedder();

    // //-------- product varient ----------//
    //  await sizeSedder();
    //  await colorSedder();
    // await varientSedder();
    // await productVarientSedder();


    // // ------  selasedder --------//
    // await orderProductListSedder();
    // await orderSedder();
    // await orderDueSedder();
    // await orderHistorySedder();
    // await paymentSedder()
    
}

seed()