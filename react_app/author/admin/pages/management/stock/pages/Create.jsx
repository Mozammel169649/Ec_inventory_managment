import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_all_supplier } from '../../../../redux/features/supplier/supplierSlice';
import { create_stock, get_all_stock } from '../../../../redux/features/stock/stockSlice';

function Create() {
    const dispatch = useDispatch();
    const [data, setdata] = useState({})

    useEffect(()=>{
        dispatch(get_all_supplier());
    })

    const supplier = useSelector(state => state.supplier.suppliers)

    const createData = async (event) => {
        event.preventDefault();
        dispatch(create_stock(data));
        dispatch(get_all_stock());
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Create stock</h3>
            </center>
            <div>
                <form method='POST' onSubmit={createData}>
                    <div className="form-group p-2">
                        <label for="code" >Product Code</label>
                        <input type="text" onChange={(e) => setdata({ ...data, product_code: e.target.value })} className="form-control" id="code" />
                    </div>
                    <div className="form-group p-2">
                        <label for="quentity" >Product Quentity</label>
                        <input type="number" onChange={(e) => setdata({ ...data, stock: e.target.value })} className="form-control" id="quentity" />
                    </div>
                    <div className="form-group p-2" >
                        <label for="brand">Supplier</label>
                        <select  value={data.supplier || ''} onChange={(e) => setdata({ ...data, supplier: e.target.value })}
                            className='form-control' name="supplier" id="supplier">
                                 <option value="">Select Supplier</option>
                            {supplier?.map((ele) => {
                                return (
                                    <option className='m-4'  key={ele.id} value={ele._id}>{ele.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create