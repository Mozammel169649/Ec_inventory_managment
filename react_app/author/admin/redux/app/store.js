import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import dataSlice from "../features/user/dataSlice";
import roleSlice from "../features/user/roleSlice";

const store = configureStore({
    reducer: {
      users : userSlice,
      data : dataSlice,
      role : roleSlice
    }
})

export default store;