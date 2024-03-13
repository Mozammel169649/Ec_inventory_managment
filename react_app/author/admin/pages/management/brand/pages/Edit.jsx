import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { get_all_brand, update_brand } from '../../../../redux/features/brand/brandSlice';



function Edit() {

    const dispatch = useDispatch();

    const { id } = useParams();
    const brand = useSelector(state => state.brand.brands);

    const data = brand.find(e => e._id === id);
    console.log("creator",data.creator)
    const [update, setUpdate] = useState({ id: data._id, creator: data.creator?._id, title : data.title  });



    const setUpdateData = async (event) => {
        event.preventDefault();
        dispatch(update_brand(update));
        dispatch(get_all_brand());
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update Data</h3>
            </center>
            <div>
                <form method='POST' onSubmit={setUpdateData}>
                    <div className="form-group p-2">
                        <label >Title</label>
                        <input type="text" onChange={(e) => setUpdate({ ...update, title: e.target.value })} defaultValue={update.title} className="form-control" id="title" />
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit