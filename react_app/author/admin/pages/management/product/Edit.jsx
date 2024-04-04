import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_single_product, get_all_product, update_product } from '../../../redux/features/product/productSlice';
import { get_all_category } from '../../../redux/features/category/categorySlice';
import { get_all_brand } from '../../../redux/features/brand/brandSlice';
import Select from 'react-select';
import { get_all_supplier} from '../../../redux/features/supplier/supplierSlice';
import { Editor } from '@tinymce/tinymce-react';
import { useParams } from 'react-router';


function Create() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const shortDescriptionRef = useRef(null);
    const descriptionRef = useRef(null);

    const [selectedSupplierOptions, setSelectedSupplierOptions] = useState([]);
    const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);
    const [selectedBrandOptions, setSelectedBrandOptions] = useState({});

    const singleData = useSelector(state => state.product?.singleProduct);
    const category = useSelector(state => state.category.categorys);
    const brands = useSelector(state => state.brand.brands);
    const suppliers = useSelector(state => state.supplier.suppliers);

    useEffect(() => {
        const loadData = async () => {
            await Promise.all([
                dispatch(get_all_category()),
                dispatch(get_all_brand()),
                dispatch(get_all_supplier()),
                dispatch(get_single_product(id))
            ]);

            setLoading(true);
        };
        loadData();
    }, []);

    useEffect(() => {
        if (singleData.supplier) {
            const { name, _id } = singleData.supplier;
            const supplierOptions = [{ label: name, value: _id }];
            setSelectedSupplierOptions(supplierOptions);
        }
    }, [singleData]);

    useEffect(() => {
        if (singleData.brand) {
            const { title, _id } = singleData.brand[0];
            const brandOptions = [{ label: title, value: _id }];
            setSelectedBrandOptions(brandOptions);
        }
    }, [singleData]);

    useEffect(() => {
        if (singleData.categories) {
            var category = singleData.categories.map((item) => ({ label: item.title, value: item._id }));
            setSelectedCategoryOptions(category);
        }
    }, [singleData]);


    if (loading == false) {
        return (
            <div>
                <p> loading.....</p>
            </div>
        )
    }

    const handleChangeCategory = (selected) => {
        setSelectedCategoryOptions(selected);
    };

    const handleChangeBrand = (selected) => {
        setSelectedBrandOptions(selected);
    };

    const handleChangeSupplier = (selected) => {
        setSelectedSupplierOptions(selected);
    };

    const CategoryOptions = category.map(ele => ({
        label: ele.title,
        value: ele._id
    }));

    const BrandOptions = brands.map(ele => ({
        label: ele.title,
        value: ele._id
    }));

    const SupplierOptions = suppliers.map(ele => ({
        label: ele.name,
        value: ele._id
    }));

    const pricesetup = (e) => {
        const mainPrice = price;
        const discountPercentage = e;
        const currentPrice = Math.ceil(mainPrice - discountPercentage / 100 * mainPrice);
        document.getElementById("crt_price").value = currentPrice;
    };

    const updateData = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        formData.append("id", id);
        formData.append("short_discription", shortDescriptionRef.current.getContent());
        formData.append("discription", descriptionRef.current.getContent());
        await dispatch(update_product(formData));
        await dispatch(get_all_product());
    };

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
                                    <input type="text"
                                        // onChange={(e) => setdata({ ...data, title: e.target.value })}
                                        defaultValue={singleData.title} className="form-control" name="title" id="title" />
                                </div>
                                <div className="form-group p-2">
                                    <label for="code">Product code</label>
                                    <input type="text"
                                        //  onChange={(e) => setdata({ ...data, product_number: e.target.value })} 
                                        defaultValue={singleData.product_number} className="form-control" name="code" id="code" />

                                </div>
                                <div className="form-group p-2">
                                    <label for="short_discription">Short Discription</label>
                                    <Editor
                                        className="form-control"
                                        name="short_discription"
                                        id="short_discription"
                                        onInit={(evt, editor) =>
                                            (shortDescriptionRef.current = editor)
                                        }
                                        initialValue={singleData.short_discription}
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
                                        initialValue={singleData.discription}
                                        onInit={(evt, editor) =>
                                            (descriptionRef.current = editor)
                                        }
                                        // onEditorChange={handlediscriptionEditor}
                                        id="discription"
                                        apiKey='2hom0d7uzv176aenof59sq7i7d418azo7otw06gq4v0l4u87'
                                        init={{
                                            height: "200px"
                                        }}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label for="seo_title">SEO Title</label>
                                    <input type="text"
                                        //  onChange={(e) => setdata({ ...data, seo_title: e.target.value })} 
                                        defaultValue={singleData.seo_title} className="form-control" name="seo_title" id="seo_title" />
                                </div>
                                {/* <div className="form-group p-2">
                                    <label for="tags">Tags</label>
                                    <input multiple type="text" className="form-control" name="tags[]" id="tags" />
                                </div>   */}
                                <div className="form-group p-2">
                                    <label for="price">Price</label>
                                    <input type="Number"
                                        //  onChange={(e) => setdata({ ...data, price: e.target.value })} 
                                        defaultValue={singleData.price} className="form-control" name="price" id="price" />

                                </div>
                                <div className="form-group p-2">
                                    <label for="discount">Discount</label>
                                    <input type="Number"
                                        onChange={(e) => pricesetup(e.target.value)}
                                        defaultValue={singleData.discount} className="form-control" name="discount" id="discount" />
                                </div>

                            </div>
                            <div className='col-md-4'>

                                <div className="form-group p-2">
                                    <label htmlFor="supplier">Supplier</label>
                                    <Select
                                        name='suppliers'
                                        className="text-dark"
                                        options={SupplierOptions}
                                        defaultValue={selectedSupplierOptions}
                                        onChange={handleChangeSupplier}
                                    />
                                </div>
                                {/* Rest of the Select inputs */}

                                <div className="form-group p-2">
                                    <label for="stock">Stocks</label>
                                    <input type="Number"
                                        //  onChange={(e) => setdata({ ...data, stokes: e.target.value })}
                                        defaultValue={singleData.stokes} className="form-control" name="stock" id="stock" />
                                </div>
                                <div className="form-group p-2" >
                                    <label for="category">Category</label>
                                    <Select
                                        name='category'
                                        className="text-dark"
                                        options={CategoryOptions}
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
                                        options={BrandOptions}
                                        value={selectedBrandOptions}
                                        onChange={handleChangeBrand}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label for="status">Status</label>
                                    <input type="checkbox" defaultChecked={singleData.status} className='m-2' name="status" id="status" />
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
                                        <img style={{ height: '60px' }} src={"/" + singleData.image} alt="" />
                                    </div>

                                </div>
                                <div className="form-group p-2">
                                    <label for="rtd_image">Related image</label>
                                    <input type="file" className="form-control" name="rtd_image[]" id="rtd_image" />
                                    <td>{singleData.related_images?.map((ele) => {
                                        return (
                                            <img style={{ height: "60px" }} src={"/" + ele} alt="" />
                                        )
                                    })}</td>
                                </div>
                            </div>
                        </div>

                        <div className="form-group p-2 col-md-6 mx-auto">
                            <label for="crt_price">Current price</label>
                            <input type='Number' name="crt_price" id='crt_price' defaultValue={singleData.current_price} className="form-control " readOnly />
                        </div>

                        <button type="submit" className="btn btn-primary m-2 mt-4 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
    // }
}


export default Create