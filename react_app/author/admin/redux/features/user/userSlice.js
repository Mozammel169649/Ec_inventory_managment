import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {

    getUser: (state, action) => {
      state.users = action.payload.map(user => {
        return { id: user._id, userName: user.userName, email: user.email, role: user.role }
      })
    },
    updateUserData: (state, action) => {
      const index = state.users.findIndex(e => e._id === action.payload.id)
      state.users[index] = {
        email: action.payload.email,
        userName: action.payload.userName,
        role: action.payload.role,
      }
    },
    deleteUser:(state, action)=>{
      state.users =state.users.filter( (e) => e.id !== action.payload );
     }
  },
})

export const { getUser, updateUserData , deleteUser} = userSlice.actions;
export default userSlice.reducer;