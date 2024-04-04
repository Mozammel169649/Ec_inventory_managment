import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const get_all_brand = createAsyncThunk(
    "brand/get_all_brand",
    async () => {
        const res = await axios.get("/brand");
        return res.data;
    });
export const delete_brand = createAsyncThunk(
    "brand/delete_brand",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/deletebrand/${params}`);
        return res.data;
    });
export const update_brand = createAsyncThunk(
    "brand/update_brand",
    async (update, thunkAPI) => {
        // console.log(update);
        const res = await axios.put(`/updatebrand/${update.id}`,update);
        return res.data; 
    });
export const create_brand = createAsyncThunk(
    "brand/create_brand",
    async (data, thunkAPI) => {
        const res = await axios.post('/createbrand',data);
        return res.data;
    });


const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        brands: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_all_brand.fulfilled, (state, action) => {
                state.brands = action.payload;
            })
            .addCase(create_brand.fulfilled, (state, action) => {
                state.brands = action.payload;
            })
            .addCase(update_brand.fulfilled, (state, action) => {
            })
            .addCase(delete_brand.fulfilled, (state, action) => {
            })
    }
})

export default brandSlice.reducer;