import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const get_all_category = createAsyncThunk(
    "category/get_all_category",
    async () => {
        const res = await axios.get("/category");
        return res.data;
    });
export const delete_category = createAsyncThunk(
    "catagory/delete_category",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/deleteCategory/${params}`);
        return res.data;
    });
export const update_category = createAsyncThunk(
    "catagory/update_category",
    async (update, thunkAPI) => {
        // console.log(update);
        const res = await axios.put(`/updateCategory/${update.id}`,update);
        return res.data; 
    });
export const create_category = createAsyncThunk(
    "catagory/create_category",
    async (data, thunkAPI) => {
        const res = await axios.post('/category/create',data);
        return res.data;
    });


const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categorys: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_all_category.fulfilled, (state, action) => {
                state.categorys = action.payload;
            })
            .addCase(create_category.fulfilled, (state, action) => {
                state.catagory = action.payload;
            })
            .addCase(update_category.fulfilled, (state, action) => {
            })
            .addCase(delete_category.fulfilled, (state, action) => {
            })
    }
})

export const { getUser, updateUserData, deleteUser } = categorySlice.actions;
export default categorySlice.reducer;