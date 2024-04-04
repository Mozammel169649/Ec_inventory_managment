import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function View() {
    const { id } = useParams();
    const users = useSelector(state => state.supplier.suppliers);
    const data = users.find(e => e._id === id);
    console.log("supplier view",data);

    
    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> Supplier Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>Name : {data?.name}</p>
                <p>Email : {data?.email}</p>
                <p>Creator : {data?.creator?.userName}</p>
                <p>Creator_Role : {data?.creator?.role}</p>
                <p>Number : {data.number}</p>
                <p>discription : {data.discription}</p>
                <p>Address : {data.address}</p>
            </div>
        </div>
    )
}

export default View