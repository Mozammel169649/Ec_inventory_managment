import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function View() {
    const { id } = useParams();
    const users = useSelector(state => state.brand.brands);
    const data = users.find(e => e._id === id);
    console.log("brand view",data);

    
    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> Brand Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>category : {data?.title}</p>
                <p>creator : {data?.creator?.userName}</p>
                <p>creator_Role : {data?.creator?.role}</p>
            </div>

        </div>
    )
}

export default View