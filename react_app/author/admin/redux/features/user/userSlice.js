import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fatchData = createAsyncThunk("users/fatchData", async()=>{
  console.log('ghghg');
  const res = await axios.get("/user");
  return res.data;
})



const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  // reducers: {
  //   getUser: async (state) => {
  //     console.log("getUser ok")
  //     const response = await axios.get('/user')
  //     // console.log("api ok", response)
  //     state.users = response.data;
  //     // console.log("state",state.users);
  //   },
  //   updateUserData: (state, action) => {
  //     const index = state.users.findIndex(e => e._id === action.payload.id)
  //     state.users[index] = {
  //       email: action.payload.email,
  //       userName: action.payload.userName,
  //       role: action.payload.role,
  //     }
  //   },
  //   deleteUser:(state, action)=>{
  //     state.users =state.users.filter( (e) => e.id !== action.payload );
  //    }
  // },
  extraReducers : (builder)=>{
    builder.addCase(fatchData.fulfilled, (state, action) =>{
      state.users = action.payload;
      console.log(state);
    })
  }
})

export const { getUser, updateUserData , deleteUser} = userSlice.actions;
export default userSlice.reducer;