import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { get_all_user, update_user } from '../../../../redux/features/user/userSlice';
import { useEffect } from 'react';
import { get_all_role } from '../../../../redux/features/user/roleSlice';


function Edit() {

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("useEffect run");
        dispatch(get_all_role());
        
    }, []);


    const { id } = useParams();
    const users = useSelector(state => state.users.users);
    console.log(users)
    const role = useSelector(state => state.role.role);
    console.log(role)
    const user = users.find(e => e._id === id);
    const [updateUser, setUpdateUser] = useState({ id: user._id, email: user.email, role: user.role, userName: user.userName });



    const setUpdateData = async (event) => {
        event.preventDefault();
        dispatch(update_user(updateUser))
        dispatch(get_all_user())
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update Data</h3>
            </center>
            <div>
                <form method='POST' onSubmit={setUpdateData}>
                    <div className="form-group p-2">
                        <label >Name</label>
                        <input type="text" onChange={(e) => setUpdateUser({ ...updateUser, userName: e.target.value })} defaultValue={updateUser.userName} className="form-control" id="name" />
                    </div>
                    <div className="form-group p-2">
                        <label >Email</label>
                        <input type="email" onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })} defaultValue={updateUser.email} className="form-control" id="email" />
                    </div>
                    <div className="form-group p-2" >
                        <label for="role">Role</label>
                        <select onChange={(e) => setUpdateUser({ ...updateUser, role: e.target.value })}
                         value={updateUser.role} className='form-control' name="role">
                            {role?.map((ele) => {
                                return (
                                    <option className='m-2'>{ele.role}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit