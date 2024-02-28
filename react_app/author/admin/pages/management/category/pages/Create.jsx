import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { create_category, get_all_category } from '../../../../redux/features/category/categorySlice';

function Create() {
    const dispatch = useDispatch();
    const [data, setdata] = useState({})

    const createData = async (event)=>{
        event.preventDefault();
        await 
        dispatch(create_category(data));
        dispatch(get_all_category());
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Create category</h3>
            </center>
            <div>
                <form method='POST' onSubmit={createData}>
                    <div className="form-group p-2">
                        <label >Title</label>
                        <input type="text" onChange={(e) => setdata({ ...data, title: e.target.value })} className="form-control" id="title" />
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create