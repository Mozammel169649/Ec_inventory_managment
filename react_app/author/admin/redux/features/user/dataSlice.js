import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const get_all_data = createAsyncThunk(
    "data/get_all_data",
    async (params, thunkAPI) => {
        const res = await axios.get("/t");
        return res.data;
    }
);
export const get_single_data = createAsyncThunk(
    "data/get_single_data",
    async (params = {}, thunkAPI) => {
        const res = await axios.get("/t/" + params.id);
        return res.data;
    }
);
export const create_data = createAsyncThunk(
    "data/create_data",
    async (form, thunkAPI) => {
        const res = await axios.post("/t", form);
        return res.data;
    }
);
export const update_data = createAsyncThunk(
    "data/update_data",
    async (params = {}, thunkAPI) => {
        const res = await axios.put("/t/" + params.id, params.form);
        return res.data;
    }
);
export const delete_data = createAsyncThunk(
    "data/delete_data",
    async (params = {}, thunkAPI) => {
        const res = await axios.delete("/t/" + params.id);
        return res.data;
    }
);


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data_list: [],
        single_data: {},
        search_key: '',
        show_active_data: true,
        selected_data_list: [],
        data_show_limit: 10,
    },
    reducers: {
        set_search_key: async (state, { payload }) => {
            state.search_key = payload.search_key;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_all_data.fulfilled, (state, action) => {
                state.data_list = action.payload;
            })
            .addCase(get_single_data.fulfilled, (state, action) => {
                state.single_data = action.payload;
            })
            .addCase(create_data.fulfilled, (state, action) => {})
            .addCase(update_data.fulfilled, (state, action) => {})
            .addCase(delete_data.fulfilled, (state, action) => {})
    }
})

export const { getUser, updateUserData, deleteUser } = dataSlice.actions;
export default dataSlice.reducer;