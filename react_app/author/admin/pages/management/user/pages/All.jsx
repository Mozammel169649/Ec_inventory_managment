import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_all_user, delete_user } from '../../../../redux/features/user/userSlice';
import { Link } from 'react-router-dom';


function All() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(get_all_user());
  }, []);

  const handleDelete = (id) => {
    dispatch(delete_user(id));
    dispatch(get_all_user());
  }

  return (
    <div>
      <div>
        <h5> All User</h5>
      </div>

      <div>
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
              user.length &&
              user?.map(ele =>
                <tr>
                  <td>{ele?.userName}</td>
                  <td>{ele?.email}</td>
                  <td>
                    {ele?.role}
                  </td>
                  <td class="justify-content-center"  >
                    <Link to={`userView/${ele?._id}`} className='btn btn-info m-2'>View</Link>
                    <Link to={`editUser/${ele?._id}`} className='btn btn-warning m-2'>Edit</Link>
                    <button onClick={() => handleDelete(ele?._id)} className='btn btn-danger m-2'>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className='mb-4'>
        pagination.....
      </div>
    </div>
  )
}

export default All


