import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function View() {
    const { id } = useParams();
    const users = useSelector(state => state.stock.stocks);
    const data = users.find(e => e._id === id);
    // console.log("brand view",data);

    
    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> skick Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>product code : {data?.product_code}</p>
                <p>Queintity : {data?.stock}</p>
                <p>creator : {data?.creator?.userName}</p>
                <p>creator_Role : {data?.creator?.role}</p>
                <p>supplier : {data?.supplier?.name}</p>
                <p>supplier Email : {data?.supplier?.email}</p>
            </div>

        </div>
    )
}

export default View