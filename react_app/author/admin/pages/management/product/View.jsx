import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { get_single_product } from '../../../redux/features/product/productSlice';

function View() {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_single_product(id));
    }, [])

    const products = useSelector(state => state.product.singleProduct);

    console.log(products.image)
    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> product Detalse </h3>
            </center>
            <div className='text-center mt-4 '>

                <p> Product title  : {products.title}</p>
                <p> Product number : {products.product_number}</p>
                <div>
                    <label htmlFor="">Category :</label> 
                    {products?.categories?.map((e) => <p>{e.title}</p>)}
                </div>
                <div>
                    <label htmlFor="">Brand :</label>
                    {products?.brand?.map((e) =><p>{e.title}</p>)}
                </div>
                <p> Creator name  : {products.creator?.userName}</p>
                <p> Creator email : {products.creator?.email}</p>
                <p> Creator Role  : {products.creator?.role}</p>
                <p> Product discount : {products.discount}</p>
                <p> Product stocks : {products.stokes}</p>
                <p> Supplier name : {products.supplier?.name}</p>
                <p> Supplier email : {products.supplier?.email}</p>
                <p> Supplier Name : {products.supplier?.number}</p>
                <p> Price : {products.price}</p>
                <p> Current_price : {products.current_price}</p>
                <p> Short_discription : {products.short_discription}</p>
                <p> Discription : {products.discription}</p>
                <p> Seo_title : {products.seo_title}</p>
                <p> Status : {products.status ? "true" : "false"}</p>
                <p> Current_price : {products.current_price}</p>
                <div> Image : <img style={{ height: "200px" }} src={"/" + products?.image} alt="" /> </div>
                <div> Related_image : <img style={{ height: "200px" }} src={"/" + products?.related_images} alt="" /> </div>
                
            </div>

        </div >
    )
}

export default View