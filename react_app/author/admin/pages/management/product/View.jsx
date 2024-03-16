import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function View() {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const data = products.find(e => e._id === id);

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> product Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>UserName : {data.title}</p>
                <p>Email : {data.stokes}</p>
                <p>Role : {data.price}</p>
            </div>

        </div>
    )
}

export default View