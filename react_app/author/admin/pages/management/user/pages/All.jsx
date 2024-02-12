import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../../../../redux/features/user/userSlice';
import { Link } from 'react-router-dom';


function All() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.users);
  useEffect(() => {
    const modelData = async () => {
      const response = await axios.get('/user')
      dispatch(getUser(response.data));
    }
    modelData();
  }, []);

  const handleDelete =(id)=>{
    axios.get(`/delete/${id}`,)
    .then(res => {
      // console.log(res.data?.id);
      dispatch(deleteUser(res.data?.id))
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h5> All User</h5>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            user.map(ele =>
              <tr>
                <td>{ele?.userName}</td>
                <td>{ele?.email}</td>
                <td>
                  {ele?.role}
                </td>
                <td class="justify-content-center"  >
                  <Link to ={`userView/${ele?.id}`} className='btn btn-info m-2'>View</Link>
                  <Link to ={`editUser/${ele?.id}`} className='btn btn-warning m-2'>Edit</Link>
                  <button onClick={()=>handleDelete(ele?.id)} className='btn btn-danger m-2'>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default All 