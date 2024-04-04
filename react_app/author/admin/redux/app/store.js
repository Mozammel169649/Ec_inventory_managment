import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
// import dataSlice from "../features/user/dataSlice";
import roleSlice from "../features/user/roleSlice";
import categorySlice from "../features/category/categorySlice";
import brandSlice from "../features/brand/brandSlice";
import supplierSlice from "../features/supplier/supplierSlice";
import productSlice from "../features/product/productSlice";
import stockSlice from "../features/stock/stockSlice";

const store = configureStore({
    reducer: {
      users : userSlice,
      // data : dataSlice,
      product : productSlice,
      role : roleSlice,
      category : categorySlice,
      brand : brandSlice,
      supplier : supplierSlice,
      stock : stockSlice,
    }
})

export default store;