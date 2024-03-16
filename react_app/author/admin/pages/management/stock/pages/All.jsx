import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_all_stock } from '../../../../redux/features/stock/stockSlice';


function All() {
  const dispatch = useDispatch();
  useSelector(state => console.log(state.stock))
  const data = useSelector(state => state.stock?.stocks);
  // const data = useSelector(state =>console.log(state));

  useEffect(() => {
    dispatch(get_all_stock());
  }, []);

  const handleDelete = (id) => {
    dispatch(delete_stock(id));
    dispatch(get_all_stock());
  }

  return (
    <div>
      <div>
        <center>
          <h5> All Stocks</h5>
        </center>
      </div>
      <div>
        <Link to={"create"} className='btn btn-info'> Add Stock</Link>
      </div>
      <br />
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <td>product code</td>
              <td>product stock</td>
              <td>Supplier</td>
              <td>Creator</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              data.length &&
              data?.map(ele =>
                <tr>
                  <td>{ele?.product_code}</td>
                  <td>{ele?.stock}</td>
                  <td>{ele?.supplier?.name}</td>
                  <td>{ele?.creator?.userName}</td>
                  <td class="justify-content-center"  >
                    <Link to={`view/${ele?._id}`} className='btn btn-info m-2'>View</Link>
                    <Link to={`edit/${ele?._id}`} className='btn btn-warning m-2'>Edit</Link>
                    <button onClick={() => handleDelete(ele?._id)} className='btn btn-danger m-2'>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className='mb-4'>
        pagination.....
      </div>
    </div>
  )
}

export default All


