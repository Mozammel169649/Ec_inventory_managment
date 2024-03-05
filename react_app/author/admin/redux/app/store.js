import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import dataSlice from "../features/user/dataSlice";
import roleSlice from "../features/user/roleSlice";
import categorySlice from "../features/category/categorySlice";
import brandSlice from "../features/brand/brandSlice";
import supplierSlice from "../features/supplier/supplierSlice";

const store = configureStore({
    reducer: {
      users : userSlice,
      data : dataSlice,
      role : roleSlice,
      category : categorySlice,
      brand : brandSlice,
      supplier : supplierSlice
    }
})

export default store;