
//// data loade hocce na.....


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_single_product, get_all_product, update_product } from '../../../redux/features/product/productSlice';
import { get_all_category } from '../../../redux/features/category/categorySlice';
import { get_all_brand } from '../../../redux/features/brand/brandSlice';
import Select from 'react-select';
import { get_all_supplier, get_single_supplier } from '../../../redux/features/supplier/supplierSlice';
import { Editor } from '@tinymce/tinymce-react';
import { useParams } from 'react-router';

function Create() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loding, setLoding] = useState(true)
    const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);
    const [selectedBrandOptions, setSelectedBrandOptions] = useState([]);
    const [selectedSupplierOptions, setSelectedSupplierOptions] = useState([]);

    useEffect(async () => {
        await dispatch(get_single_product(id));

    }, []);


    // console.log('selectedSupplierOptions', selectedSupplierOptions);
    const singleData = useSelector(state => state.product?.singleProduct);

    // console.log("singleData", singleData);

    const loadData = async () => {
        await dispatch(get_all_category());
        await dispatch(get_all_brand());
        await dispatch(get_all_supplier());
        setLoding(false)
    }

    const category = useSelector(state => state.category.categorys);
    const brands = useSelector(state => state.brand.brands);
    const suppliers = useSelector(state => state.supplier.suppliers);


    useEffect(() => {
        loadData();
    }, []);

    // if (loding) {
    //     return <div>loading......</div>
    // }


    const { _id, brand, supplier, seo_title, categories, creator, discount, discription, image, price, product_number,
        related_images, short_discription, status, stokes, title, varient, current_price } = singleData

    // setSelectedSupplierOptions({ label: supplier?.name, value: supplier?._id }) //main problem

    // console.log("single Data",singleData);
    // console.log("supplier Data", supplier);



    // useEffect(async () => {
    //     console.log("hello");
    //     console.log(supplier);
    //     await dispatch(get_single_supplier(supplier));
    // }, [supplier]);

    // const singleSuppliers = useSelector(state => state.supplier.singleSuppliers);
    // console.log("single supplier",singleSuppliers);

    // const singleSuppliers = useSelector(state => state.supplier.singleSuppliers);
    // console.log(singleSuppliers);
    // console.log({ label: singleSuppliers.name, value: singleSuppliers._id });
    //    setSelectedCategoryOptions({ label: singleSuppliers.name, value: singleSuppliers._id })


    // if (brand) {
    //        brand.map((ele)=> setSelectedBrandOptions(ele))
    // }
    // if (categories) {
    //     brand.map((ele)=> setSelectedCategoryOptions(ele));




    const [data, setdata] = useState({
        id: _id,
        title: title,
        product_number: product_number,
        categories: categories,
        brand: brand,
        creator: creator,
        discount: discount,
        stokes: stokes,
        varient: varient,
        supplier: supplier,
        price: price,
        short_discription: short_discription,
        discription: discription,
        seo_title: seo_title,
        status: status,
        current_price: current_price,
        image: image,
        related_images: related_images
    });

    const handleChangeCategory = (selected) => {
        setSelectedCategoryOptions(selected);
    };
    const handleChangeBrand = (selected) => {
        setSelectedBrandOptions(selected);
    };
    const handleChangeSupplier = (selected) => {
        setSelectedSupplierOptions(selected);
    };


    const Category_options = [];
    category.map((ele) => {
        return (
            Category_options.push({ label: ele.title, value: ele._id },)
        )
    })
    const brand_options = [];
    brands.map((ele) => {
        return (
            brand_options.push({ label: ele.title, value: ele._id },)
        )
    })
    const supplier_options = [];
    suppliers.map((ele) => {
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
        const main_price = price;
        const discount_percentig = e;
        const current_price = Math.ceil(main_price - discount_percentig / 100 * main_price);
        document.getElementById("crt_price").value = current_price;
    }

    const updateData = async (event) => {
        event.preventDefault()
        console.log(data);

        // await dispatch(update_product(data));
        // dispatch(get_all_product());
    }







    return (

        <div>
            <center>
                <h3>Edit product</h3>
            </center>
            <div className='mx-auto'>

                <div>
                    <form method='POST' onSubmit={updateData} >
                        <div className='d-flex'>
                            <div className='col-md-8'>
                                <div className="form-group p-2">
                                    <label for="title">Title</label>
                                    <input type="text" onChange={(e) => setdata({ ...data, title: e.target.value })} defaultValue={title} className="form-control" name="title" id="title" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="code">Product code</label>
                                    <input type="text" onChange={(e) => setdata({ ...data, product_number: e.target.value })} defaultValue={product_number} className="form-control" name="code" id="code" />

                                </div>
                                <div className="form-group p-2">
                                    <label for="short_discription">Short Discription</label>
                                    <Editor
                                        className="form-control"
                                        name="short_discription"
                                        id="short_discription"
                                        initialValue={short_discription}
                                        onEditorChange={handleshortdiscriptionEditor}
                                        apiKey='2hom0d7uzv176aenof59sq7i7d418azo7otw06gq4v0l4u87'
                                        init={{
                                            height: "200px"
                                        }}
                                        defaultValue="Your default value goes here"
                                    />
                                </div>

                                <div className="form-group p-2">
                                    <label for="discription">Discription</label>
                                    <Editor
                                        name="discription"
                                        initialValue={discription}
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
                                    <input type="text" onChange={(e) => setdata({ ...data, seo_title: e.target.value })} defaultValue={seo_title} className="form-control" name="seo_title" id="seo_title" />
                                </div>
                                {/* <div className="form-group p-2">
                                    <label for="tags">Tags</label>
                                    <input multiple type="text" className="form-control" name="tags[]" id="tags" />
                                </div>   */}
                                <div className="form-group p-2">
                                    <label for="price">Price</label>
                                    <input type="Number" onChange={(e) => setdata({ ...data, price: e.target.value })} defaultValue={price} className="form-control" name="price" id="price" />

                                </div>
                                <div className="form-group p-2">
                                    <label for="discount">Discount</label>
                                    <input type="Number" onChange={(e) => pricesetup(e.target.value)} defaultValue={discount} className="form-control" name="discount" id="discount" />
                                </div>

                            </div>
                            <div className='col-md-4'>
                                <div className="form-group p-2">
                                    <label for="supplier">Supplier</label>
                                    <Select
                                        name='suppliers'
                                        className="text-dark"
                                        options={supplier_options}
                                        value={selectedSupplierOptions}
                                        onChange={handleChangeSupplier}
                                    />

                                </div>
                                <div className="form-group p-2">
                                    <label for="stock">Stocks</label>
                                    <input type="Number" onChange={(e) => setdata({ ...data, stokes: e.target.value })} defaultValue={stokes} className="form-control" name="stock" id="stock" />
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
                                        name='brands'
                                        className="text-dark"
                                        options={brand_options}
                                        value={selectedBrandOptions}
                                        onChange={handleChangeBrand}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label for="status">Status</label>
                                    <input type="checkbox" defaultChecked={status} className='m-2' name="status" id="status" />
                                    <label for="status">Is Active</label>
                                </div>
                                {/* <div className="form-group p-2">
                                    <label for="varient">Varient</label>
                                    <input type="text" className="form-control" name="varient" id="varient" />
                                </div> */}
                                <div className="form-group p-2">
                                    <label for="image" >Image</label>
                                    <input type="file" className="form-control" name="image" id="image" />
                                    <div>
                                        <img style={{ height: '60px' }} src={"/" + image} alt="" />
                                    </div>

                                </div>
                                <div className="form-group p-2">
                                    <label for="rtd_image">Related image</label>
                                    <input type="file" className="form-control" name="rtd_image[]" id="rtd_image" />
                                    <td>{related_images?.map((ele) => {
                                        return (
                                            <img style={{ height: "60px" }} src={"/" + ele} alt="" />
                                        )
                                    })}</td>
                                </div>
                            </div>
                        </div>

                        <div className="form-group p-2 col-md-6 mx-auto">
                            <label for="crt_price">Current price</label>
                            <input type='Number' name="crt_price" id='crt_price' defaultValue={current_price} className="form-control " readOnly />
                        </div>

                        <button type="submit" className="btn btn-primary m-2 mt-4 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Create