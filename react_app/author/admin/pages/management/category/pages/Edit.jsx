import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { get_all_category, update_category } from '../../../../redux/features/category/categorySlice';
// import { get_all_user, update_user } from '../../../../redux/features/user/userSlice';


function Edit() {

    const dispatch = useDispatch();

    const { id } = useParams();
    const category = useSelector(state => state.category.categorys);

    const data = category.find(e => e._id === id);
    console.log("creator",data.creator)
    const [update, setUpdate] = useState({ id: data._id, creator: data.creator?._id, title : data.title  });



    const setUpdateData = async (event) => {
        event.preventDefault();
        dispatch(update_category(update));
        dispatch(get_all_category());
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