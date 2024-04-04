import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { get_all_supplier, update_supplier } from '../../../../redux/features/supplier/supplierSlice';



function Edit() {

    const dispatch = useDispatch();

    const { id } = useParams();
    const supplier = useSelector(state => state.supplier.suppliers);

    const data = supplier.find(e => e._id === id);
    console.log("creator",data)
    
    const [update, setUpdate] = useState({ id :data._id, name : data.name, email : data.email, number : data.number, address : data.address, discription : data.discription  });



    const setUpdateData = async (event) => {
        event.preventDefault();
        dispatch(update_supplier(update));
        dispatch(get_all_supplier());
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update Data</h3>
            </center>
            <div>
                <form method='POST' onSubmit={setUpdateData}>
                    <div className="form-group p-2">
                        <label >Name</label>
                        <input type="text" onChange={(e) => setUpdate({ ...update, name: e.target.value })} defaultValue={update.name} className="form-control" id="name" />
                    </div>
                    <div className="form-group p-2">
                        <label >Email</label>
                        <input type="text" onChange={(e) => setUpdate({ ...update, email: e.target.value })} defaultValue={update.email} className="form-control" id="email" />
                    </div>
                    <div className="form-group p-2">
                        <label >Number</label>
                        <input type="text" onChange={(e) => setUpdate({ ...update, number: e.target.value })} defaultValue={update.number} className="form-control" id="number" />
                    </div>
                    <div className="form-group p-2">
                        <label >Address</label>
                        <textarea type="text" onChange={(e) => setUpdate({ ...update, address: e.target.value })} defaultValue={update.address} className="form-control" id="address" />
                    </div>
                    <div className="form-group p-2">
                        <label >Discription</label>
                        <textarea type="text" onChange={(e) => setUpdate({ ...update, discription: e.target.value })} defaultValue={update.discription} className="form-control" id="discription" />
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit