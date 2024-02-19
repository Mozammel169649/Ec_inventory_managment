import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function View() {
    const { id } = useParams();
    const users = useSelector(state => state.users.users);
    const user = users.find(e => e._id === id);

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> User Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>UserName : {user.userName}</p>
                <p>Email : {user.email}</p>
                <p>Role : {user.role}</p>
            </div>

        </div>
    )
}

export default View