import axios from 'axios';
import React, { useEffect, useState } from 'react'

function All() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const modelData = async () => {
      const response = await axios.get('/user')
      setUser(response.data)
      console.log(response.data)
    }
    modelData();
  }, []);

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
                  <div class="form-check form-switch d-inline-block">
                    <input class="form-check-input d-inline-block" type="checkbox"
                      role="switch" id="" />
                  </div>
                </td>
                <td class="justify-content-center"  >
                  <button className='btn btn-info m-2'>View</button>
                  <button className='btn btn-warning m-2'>Edit</button>
                  <button className='btn btn-danger m-2'>Delete</button>
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