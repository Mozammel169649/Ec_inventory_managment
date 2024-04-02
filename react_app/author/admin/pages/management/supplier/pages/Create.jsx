import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { create_supplier, get_all_supplier } from '../../../../redux/features/supplier/supplierSlice';

function Create() {
    const dispatch = useDispatch();
    const [data, setdata] = useState({})

    const createData = async (event) => {
        event.preventDefault();
        dispatch(create_supplier(data));
        dispatch(get_all_supplier());
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Create supplier</h3>
            </center>
            <div>
                <form method='POST' onSubmit={createData}>
                    <div className="form-group p-2">
                        <label form='name' >Name</label>
                        <input type="text" onChange={(e) => setdata({ ...data, name: e.target.value })}  className="form-control" id="name" />
                    </div>
                    <div className="form-group p-2">
                        <label form='email' >Email</label>
                        <input type="text" onChange={(e) => setdata({ ...data, email: e.target.value })}  className="form-control" id="email" />
                    </div>
                    <div className="form-group p-2">
                        <label form='number' >Number</label>
                        <input type="text" onChange={(e) => setdata({ ...data, number: e.target.value })}  className="form-control" id="number" />
                    </div>
                    <div className="form-group p-2">
                        <label form='address' >Address</label>
                        <textarea type="text" onChange={(e) => setdata({ ...data, address: e.target.value })}  className="form-control" id="address" />
                    </div>
                    <div className="form-group p-2">
                        <label form='discription' >Discription</label>
                        <textarea type="text" onChange={(e) => setdata({ ...data, discription: e.target.value })}  className="form-control" id="discription" />
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create