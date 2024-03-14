import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { get_all_product, update_product } from '../../../redux/features/product/productSlice';



function Edit() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_all_product());
        
    }, []);

    const { id } = useParams();
    const users = useSelector(state => state.product.products);
    console.log(users)
    const product = users.find(e => e._id === id);
    const [updateProduct, setUpdateProduct] = useState({ id: product._id, title : product.title});



    const setUpdateData = async (event) => {
        event.preventDefault();
        dispatch(update_product(updateProduct))
        dispatch(get_all_product())
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update Data</h3>
            </center>
            <div>
                <form method='POST' onSubmit={setUpdateData}>
                    <div className="form-group p-2">
                        <label >title</label>
                        <input type="text" onChange={(e) => setUpdateProduct({ ...updateProduct, title: e.target.value })} defaultValue={updateProduct.title} className="form-control" id="name" />
                    </div>
                   
                    
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit