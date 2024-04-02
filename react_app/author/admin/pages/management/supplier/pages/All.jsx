import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_all_supplier, delete_supplier } from '../../../../redux/features/supplier/supplierSlice';


function All() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(get_all_supplier());
  }, []);

  useSelector(state => console.log("all supplier",state.supplier))
  const data = useSelector(state => state.supplier?.suppliers);
  // const data = useSelector(state =>console.log(state));
  console.log("all supplier data",data);

  const handleDelete = (id) => {
    dispatch(delete_supplier(id));
    dispatch(get_all_supplier());
  }

  return (
    <div>
      <div>
        <center>
          <h5> All Supplier</h5>
        </center>
      </div>
      <div>
        <Link to={"create"} className='btn btn-info'> Add Supplier</Link>
      </div>
      <br />
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Number</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              data.length &&
              data?.map(ele =>
                <tr>
                  <td>{ele?.name}</td>
                  <td>{ele?.email}</td>
                  <td>{ele?.number}</td>
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


