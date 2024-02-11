import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { updateUserData } from '../../../../redux/features/user/userSlice';

function Edit() {
const dispatch = useDispatch();
const {id} = useParams()
const users = useSelector(state => state.users.users);
const user = users.find(e => e.id === id);
const [updateUser, setUpdateUser] = useState({id :user.id , email:user.email, role:user.role, userName:user.userName})


const setUpdateData =async (event)=>{
  event.preventDefault();
  axios.post(`/updateUser/${id}`,{updateUser})
  .then(res => {
    console.log("edit responce data",res.data);
    dispatch(updateUserData(res.data))
  })
  .catch(err => console.log(err))
}

  return (
    <div className='col-md-6 mx-auto'>
      <center>
        <h3>Update Data</h3>
      </center> 
      <div>
        <form method='POST' onSubmit={setUpdateData}>
        {/* <form method='POST' onSubmit={setUpdateData}> */}
        <div className="form-group p-2">
          <label >Name</label>
          <input type="text" onChange={(e)=>setUpdateUser({...updateUser, userName:e.target.value})} defaultValue={updateUser.userName} className="form-control" id="name" />
        </div>
        <div className="form-group p-2">
          <label >Email</label>
          <input type="email" onChange={(e)=>setUpdateUser({...updateUser, email:e.target.value})} defaultValue={updateUser.email} className="form-control" id="email" />
        </div>
        <div className="form-group p-2">
          <label >Role</label>
          <input type="text" onChange={(e)=>setUpdateUser({...updateUser, role:e.target.value})} defaultValue={updateUser.role} className="form-control" id="role" />
        </div>
        <button type="submit" class="btn btn-primary m-2">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Edit