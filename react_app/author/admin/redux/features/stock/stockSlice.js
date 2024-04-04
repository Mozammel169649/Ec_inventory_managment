import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const get_all_stock = createAsyncThunk(
    "stock/get_all_stock",
    async () => {
        // console.log("get_all_stoke hitted");
        const res = await axios.get("/stock");
        // console.log(res);
        return res.data;
    });
export const delete_stock = createAsyncThunk(
    "stock/delete_stock",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/deletestock/${params}`);
        return res.data;
    });
export const update_stock = createAsyncThunk(
    "stock/update_stock",
    async (update, thunkAPI) => {
        // console.log(update);
        const res = await axios.put(`/updatestock/${update.id}`,update);
        return res.data; 
    });
export const create_stock = createAsyncThunk(
    "stock/create_stock",
    async (data, thunkAPI) => {
        const res = await axios.post('/createstock',data);
        return res.data;
    });


const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        stocks: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_all_stock.fulfilled, (state, action) => {
                state.stocks = action.payload;
            })
            .addCase(create_stock.fulfilled, (state, action) => {
                state.stocks = action.payload;
            })
            .addCase(update_stock.fulfilled, (state, action) => {
            })
            .addCase(delete_stock.fulfilled, (state, action) => {
            })
    }
})

export default stockSlice.reducer;