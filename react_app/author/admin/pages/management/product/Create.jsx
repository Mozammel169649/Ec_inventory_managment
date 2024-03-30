import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { create_product, get_all_product } from '../../../redux/features/product/productSlice';
import { get_all_category } from '../../../redux/features/category/categorySlice';
import { get_all_brand } from '../../../redux/features/brand/brandSlice';
import Select from 'react-select';
import { get_all_supplier } from '../../../redux/features/supplier/supplierSlice';
import { Editor } from '@tinymce/tinymce-react';

function Create() {

    const dispatch = useDispatch();
    const [data, setdata] = useState({
        short_discription: "",
        discription: "",
    });
    const [price, setprice] = useState({ price: 0 })

    const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);
    const [selectedBrandOptions, setSelectedBrandOptions] = useState([]);
    const [selectedSupplierOptions, setSelectedSupplierOptions] = useState([]);

    useEffect(() => {
        // console.log("product useEffect run");
        dispatch(get_all_category());
        dispatch(get_all_brand());
        dispatch(get_all_supplier());

    }, []);

    const handleChangeCategory = (selected) => {
        setSelectedCategoryOptions(selected);
    };
    const handleChangeBrand = (selected) => {
        setSelectedBrandOptions(selected);
    };
    const handleChangeSupplier = (selected) => {
        console.log(selected)
        setSelectedSupplierOptions(selected);
    };

    // useSelector(state => console.log(state))
    const category = useSelector(state => state.category.categorys);
    const brand = useSelector(state => state.brand.brands);
    const supplier = useSelector(state => state.supplier.suppliers);

    const Category_options = [];
    category.map((ele) => {
        return (
            Category_options.push({ label: ele.title, value: ele._id },)
        )
    })
    const brand_options = [];
    brand.map((ele) => {
        return (
            brand_options.push({ label: ele.title, value: ele._id },)
        )
    })
    const supplier_options = [];
    supplier.map((ele) => {
        return (
            supplier_options.push({ label: ele.name, value: ele._id },)
        )
    })
    const handleshortdiscriptionEditor = (content) => {
        setdata({ ...data, short_discription: content });
    };
    const handlediscriptionEditor = (content) => {
        setdata({ ...data, discription: content });
    };



    const pricesetup = (e) => {
        const main_price = price.price;
        const discount_percentig = e;
        const current_price = Math.ceil(main_price - discount_percentig / 100 * main_price);

        document.getElementById("crt_price").value = current_price;
    }

    const createData = async (event) => {
        event.preventDefault();
        let form = event.target;

        // if(form.status?.checked == false){
        //     setdata({ ...data, status: false });
        // }else{
        //     setdata({ ...data, status: true });
        // }

        let formData = new FormData(form);
        await formData.append("short_discription", data?.short_discription);
        await formData.append("discription", data?.discription);
        // await formData.append("status", data?.status);
        // console.log(data);
        await dispatch(create_product(formData));
        dispatch(get_all_product());
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
                                    <input type="text" className="form-control" name="title" id="title" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="code">Product code</label>
                                    <input type="text" className="form-control" name="code" id="code" />

                                </div>
                                <div className="form-group p-2">
                                    <label for="short_discription">Short Discription</label>
                                    <Editor
                                        className="form-control"
                                        name="short_discription"
                                        id="short_discription"
                                        onEditorChange={handleshortdiscriptionEditor}
                                        apiKey='2hom0d7uzv176aenof59sq7i7d418azo7otw06gq4v0l4u87'
                                        init={{
                                            height: "200px"
                                        }}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label for="discription">Discription</label>
                                    <Editor
                                        name="discription"
                                        onEditorChange={handlediscriptionEditor}
                                        id="discription"
                                        apiKey='2hom0d7uzv176aenof59sq7i7d418azo7otw06gq4v0l4u87'
                                        init={{
                                            height: "200px"
                                        }}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label for="seo_title">SEO Title</label>
                                    <input type="text" className="form-control" name="seo_title" id="seo_title" />
                                </div>
                                {/* <div className="form-group p-2">
                                    <label for="tags">Tags</label>
                                    <input multiple type="text" className="form-control" name="tags[]" id="tags" />
                                </div> */}
                                <div className="form-group p-2">
                                    <label for="price">Price</label>
                                    <input type="Number" onChange={(e) => setprice({ price: e.target.value })} className="form-control" name="price" id="price" />
                                    {/* <input type="Number" onChange={(e) => crtValueSet(e)} className="form-control" name="price" id="price" /> */}
                                </div>
                                <div className="form-group p-2">
                                    <label for="discount">Discount</label>
                                    <input type="Number" onChange={(e) => pricesetup(e.target.value)} className="form-control" name="discount" id="discount" />
                                </div>

                            </div>
                            <div className='col-md-4'>
                                <div className="form-group p-2">
                                    <label for="supplier">Supplier</label>
                                    <Select
                                        name='supplier'
                                        className="text-dark"
                                        options={supplier_options}
                                        value={selectedSupplierOptions}
                                        onChange={handleChangeSupplier}
                                    />

                                </div>
                                <div className="form-group p-2">
                                    <label for="stock">Stocks</label>
                                    <input type="Number" className="form-control" name="stock" id="stock" />
                                </div>
                                <div className="form-group p-2" >
                                    <label for="category">Category</label>
                                    <Select
                                        name='category'
                                        className="text-dark"
                                        options={Category_options}
                                        isMulti
                                        value={selectedCategoryOptions}
                                        onChange={handleChangeCategory}
                                    />
                                </div>

                                <div className="form-group p-2" >
                                    <label for="brand">Brand</label>
                                    <Select
                                        name='brand'
                                        className="text-dark"
                                        options={brand_options}
                                        value={selectedBrandOptions}
                                        onChange={handleChangeBrand}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label for="status">Status</label>
                                    <input type="checkbox" className='m-2' name="status" id="status" />
                                    <label for="status">Is Active</label>
                                </div>
                                {/* <div className="form-group p-2">
                                    <label for="varient">Varient</label>
                                    <input type="text" className="form-control" name="varient" id="varient" />
                                </div> */}
                                <div className="form-group p-2">
                                    <label for="image" >Image</label>
                                    <input type="file" className="form-control" name="image" id="image" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="rtd_image">Related image</label>
                                    <input type="file" multiple className="form-control" name="rtd_image[]" id="rtd_image" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group p-2 col-md-6 mx-auto">
                            <label for="crt_price">Current price</label>
                            <input type='Number' name="crt_price" id='crt_price' value={""} className="form-control " readOnly />
                        </div>
                        <button type="submit" className="btn btn-primary m-2 mt-4 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Create