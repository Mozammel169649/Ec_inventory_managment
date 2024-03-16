import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { create_product, get_all_product } from '../../../redux/features/product/productSlice';
import { get_all_category } from '../../../redux/features/category/categorySlice';
import { get_all_brand } from '../../../redux/features/brand/brandSlice';
import { get_all_stock } from '../../../redux/features/stock/stockSlice';


function Create() {

    const dispatch = useDispatch();
    const [data, setdata] = useState({});

    useEffect(() => {
        // console.log("product useEffect run");
        dispatch(get_all_category());
        dispatch(get_all_stock());
        dispatch(get_all_brand());

    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    // useSelector(state => console.log(state))
    const category = useSelector(state => state.category.categorys);
    const brand = useSelector(state => state.brand.brands);
    const stock = useSelector(state => state.stock.stocks);

    // console.log("category", category);
    // console.log("category", data);
    // console.log("brand", brand);

    const stockData =(ele)=>{
    
        var copydata = {...data , product: ele}

        console.log(copydata);

        setdata(copydata);

        // // console.log("product stock number to get data",ele);
        const adata = stock.find((e)=>e._id == ele);
        // // console.log("stock details",adata);

        const stockdata = document.getElementById("stock").value = adata?.stock;
        setdata({ ...data, stocks: stockdata })


        // // console.log("stock data", stockdata);

        const supplierdata = document.getElementById("supplier").value = adata?.supplier.name;
        setdata({ ...data, supplier: supplierdata })

        
        // // console.log("stock data", supplierdata);

    }

    // console.log(data);

    const createData = async (event) => {
        event.preventDefault();
        console.log(event);
        // await
        //     dispatch(create_product(data));
        // dispatch(get_all_product());
    }

    return (

        <div>
            <center>
                <h3>Create product</h3>
            </center>
            <div className='mx-auto'>

                <div>
                    <form method='POST' onSubmit={createData} >

                        <div className='d-flex'>
                            <div className='col-md-8'>
                                <div className="form-group p-2">
                                    <label for="title">Title</label>
                                    <input type="text" onChange={(e) => setdata({ ...data, title: e.target.value })} className="form-control" name="title" id="title" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="number">Product code</label>

                                    <select onChange={(e) => stockData(e.target.value) } className="form-control" name="number" id="number">
                                        <option value="">Select Product code</option>
                                        {stock?.map((ele) => {
                                            return (
                                                <option className='p-2' key={ele.id} value={ele._id}>{ele.product_code}</option>
                                            )
                                        })}
                                    </select>

                                </div>
                                <div className="form-group p-2">
                                    <label for="short_discription">Short Discription</label>
                                    <textarea type="text" onChange={(e) => setdata({ ...data, short_discription: e.target.value })} className="form-control" name="short_discription" id="short_discription" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="discription">Discription</label>
                                    <textarea type="text" onChange={(e) => setdata({ ...data, discription: e.target.value })} className="form-control" name="discription" id="discription" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="seo_title">SEO Title</label>
                                    <input type="text" onChange={(e) => setdata({ ...data, seo_title: e.target.value })} className="form-control" name="seo_title" id="seo_title" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="tags">Tags</label>
                                    <input multiple type="text" onChange={(e) => setdata({ ...data, tags: e.target.value })} className="form-control" name="tags[]" id="tags" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="price">Price</label>
                                    <input type="text" onChange={(e) => setdata({ ...data, price: e.target.value })} className="form-control" name="price" id="price" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="discount">Discount</label>
                                    <input type="text" onChange={(e) => setdata({ ...data, discount: e.target.value })} className="form-control" name="discount" id="discount" />
                                </div>

                            </div>
                            <div className='col-md-4'>
                                <div className="form-group p-2">
                                    <label for="supplier">Supplier</label>
                                    <input type="text" className="form-control" name="supplier" id="supplier" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="stock">Stocks</label>
                                    <input type="text"  className="form-control" name="stock" id="stock" />
                                </div>
                                <div className="form-group p-2" >
                                    <label for="category">Category</label>
                                    <select onChange={(e) => setdata({ ...data, category: e.target.value })}
                                        className='form-control' name="category[]" id="category">
                                             <option value="">Select Category</option>
                                        {category?.map((ele) => {
                                            return (
                                                <option className='p-2' key={ele.id} value={ele._id}>{ele.title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group p-2" >
                                    <label for="brand">Brand</label>
                                    <select onChange={(e) => setdata({ ...data, brand: e.target.value })}
                                        className='form-control' name="brand[]" id="brand">
                                              <option value="">Select Brand</option>
                                        {brand?.map((ele) => {
                                            return (
                                                <option className='p-2' key={ele.id} value={ele._id}>{ele.title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group p-2">
                                    <label for="status">Status</label>
                                    <input type="checkbox" className='m-2' onChange={(e) => setdata({ ...data, status: e.target.value })} name="status" id="status" />
                                    <label for="status">Is Active</label>
                                </div>
                                <div className="form-group p-2">
                                    <label for="varient">Varient</label>
                                    <input type="text" onChange={(e) => setdata({ ...data, varient: e.target.value })} className="form-control" name="varient" id="varient" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="date" >Date</label>
                                    <input type="date" onChange={(e) => setdata({ ...data, date: e.target.value })} className="form-control" name="date" id="date" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="image" >Image</label>
                                    <input type="file" onChange={(e) => setdata({ ...data, image: e.target.value })} className="form-control" name="image" id="image" />
                                    <img src="" alt="" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="rtd_image">Related image</label>
                                    <input type="file" onChange={(e) => setdata({ ...data, rtd_image: e.target.value })} className="form-control" name="rtd_image[]" id="rtd_image" />
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group p-2 col-md-6 mx-auto">
                            <label for="crt_price">Current price</label>
                            <input type="text" onChange={(e) => setdata({ ...data, crt_price: e.target.value })} name="crt_price" id='crt_price' className="form-control text-success" />
                        </div>
                        <button type="submit" className="btn btn-primary m-2 mt-4 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Create