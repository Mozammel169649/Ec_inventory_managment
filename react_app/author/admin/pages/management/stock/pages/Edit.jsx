import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { get_all_stock, update_stock } from '../../../../redux/features/stock/stockSlice';


function Edit() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const stocks = useSelector(state => state.stock.stocks);
    const data = stocks.find(e => e._id === id);
    console.log("creator",data.creator)
    const [update, setUpdate] = useState({ id: data._id, product_code: data.product_code , creator: data.creator?._id, supplier : data.supplier?._id , stock : data.stock  });

    const setUpdateData = async (event) => {
        event.preventDefault();
        dispatch(update_stock(update));
        dispatch(get_all_stock());
    }

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update Data</h3>
            </center>
            <div>
                <form method='POST' onSubmit={setUpdateData}>
                    <div className="form-group p-2">
                        <label for="code" >Product Code</label>
                        <input type="text" onChange={(e) => setUpdate({ ...update, product_code: e.target.value })} defaultValue={update.product_code} className="form-control" id="code" />
                    </div>
                    <div className="form-group p-2">
                        <label for="quentity" >Product Quentity</label>
                        <input type="text" onChange={(e) => setUpdate({ ...update, stock: e.target.value })} defaultValue={update.stock} className="form-control" id="quentity" />
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit