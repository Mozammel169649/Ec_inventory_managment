import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const get_all_role = createAsyncThunk(
    "role/get_all_role",
    async (params, thunkAPI) => {
        // console.log("i am from get user role")
        const res = await axios.get("/role");
        // console.log(res.data);
        return res.data;
    });

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        role: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_all_role.fulfilled, (state, action) => {
                state.role = action.payload;
            })
    }
})

export default roleSlice.reducer;