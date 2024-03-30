import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
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
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className='ml-3'>:</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product title</td>
                            <td>:</td>
                            <td>{products.title}</td>
                        </tr>
                        <tr>
                            <td>Product number</td>
                            <td>:</td>
                            <td>{products.product_number}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>:</td>
                            <td> {products?.categories?.map((e) => <p>{e.title}</p>)}</td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>:</td>
                            <td>{products?.brand?.map((e) => <p>{e.title}</p>)}</td>
                        </tr>
                        <tr>
                            <td>Creator name</td>
                            <td>:</td>
                            <td>{products.creator?.userName}</td>
                        </tr>
                        <tr>
                            <td>Creator email </td>
                            <td>:</td>
                            <td>{products.creator?.email}</td>
                        </tr>
                        <tr>
                            <td>Creator Role </td>
                            <td>:</td>
                            <td>{products.creator?.role}</td>
                        </tr>
                        <tr>
                            <td> Product discount </td>
                            <td>:</td>
                            <td> {products.discount}</td>
                        </tr>
                        <tr>
                            <td>Product stocks </td>
                            <td>:</td>
                            <td>{products.stokes}</td>
                        </tr>
                        <tr>
                            <td>Supplier name </td>
                            <td>:</td>
                            <td>{products.supplier?.name}</td>
                        </tr>
                        <tr>
                            <td>Supplier email  </td>
                            <td>:</td>
                            <td>Supplier email </td>
                        </tr>
                        <tr>
                            <td> Supplier Nunber</td>
                            <td>:</td>
                            <td>{products.supplier?.number}</td>
                        </tr>
                        <tr>
                            <td> Price</td>
                            <td>:</td>
                            <td>{products.price}</td>
                        </tr>
                        <tr>
                            <td>Current_price</td>
                            <td>:</td>
                            <td>{products.current_price}</td>
                        </tr>
                        <tr>
                            <td>Short_discription</td>
                            <td>:</td>
                            <td>{products.short_discription}</td>
                        </tr>
                        <tr>
                            <td>Discription</td>
                            <td>:</td>
                            <td>{products.discription}</td>
                        </tr>
                        <tr>
                            <td>Seo_title</td>
                            <td>:</td>
                            <td>{products.seo_title}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>:</td>
                            <td> {products.status ? "Active" : "Unactive"}</td>
                        </tr>
                        <tr>
                            <td>Thumb Image</td>
                            <td>:</td>
                            <td><img style={{ height: "200px" }} src={"/" + products?.image} alt="" /></td>
                        </tr>
                        <tr>
                            <td>Related Image</td>
                            <td>:</td>
                            <td>{products?.related_images?.map((ele) => {
                                return (
                                    <img style={{ height: "200px" }} src={"/" + ele} alt="" />
                                )
                            })}</td>

                        </tr>
                    </tbody>
                </table>

            </div>

        </div >
    )
}

export default View