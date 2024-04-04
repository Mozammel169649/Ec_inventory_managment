import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const get_all_supplier = createAsyncThunk(
    "supplier/get_all_supplier",
    async () => {
        const res = await axios.get("/supplier");
        // console.log(res);
        return res.data;
    });
export const get_single_supplier = createAsyncThunk(
    "supplier/get_single_supplier",
    async (params) => {
        console.log("get_single_supplier params",params);
        // const res = await axios.get(`/supplier/${params}`);
        return res.data;
    });
export const delete_supplier = createAsyncThunk(
    "supplier/delete_supplier",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/deletesupplier/${params}`);
        return res.data;
    });
export const update_supplier = createAsyncThunk(
    "supplier/update_supplier",
    async (update, thunkAPI) => {
        // console.log(update);
        const res = await axios.put(`/updatesupplier/${update.id}`,update);
        return res.data; 
    });
export const create_supplier = createAsyncThunk(
    "supplier/create_supplier",
    async (data, thunkAPI) => {
        const res = await axios.post('/createsupplier',data);
        return res.data;
    });


const supplierSlice = createSlice({
    name: 'supplier',
    initialState: {
        suppliers: [],
        singleSuppliers:{}
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_all_supplier.fulfilled, (state, action) => {
                state.suppliers = action.payload;
            })
            .addCase(get_single_supplier.fulfilled, (state, action) => {
                state.singleSuppliers = action.payload;
            })
            .addCase(create_supplier.fulfilled, (state, action) => {
                state.suppliers = action.payload;
            })
            .addCase(update_supplier.fulfilled, (state, action) => {
            })
            .addCase(delete_supplier.fulfilled, (state, action) => {
            })
    }
})

export const { getUser, updateUserData, deleteUser } = supplierSlice.actions;
export default supplierSlice.reducer;