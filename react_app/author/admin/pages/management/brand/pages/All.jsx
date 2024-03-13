import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_all_brand, delete_brand } from '../../../../redux/features/brand/brandSlice';


function All() {
  const dispatch = useDispatch();
  // useSelector(state => console.log(state.brand))
  const data = useSelector(state => state.brand?.brands);
  // const data = useSelector(state =>console.log(state));

  useEffect(() => {
    dispatch(get_all_brand());
  }, []);

  const handleDelete = (id) => {
    dispatch(delete_brand(id));
    dispatch(get_all_brand());
  }

  return (
    <div>
      <div>
        <center>
          <h5> All Brande</h5>
        </center>
      </div>
      <div>
        <Link to={"create"} className='btn btn-info'> Add brand</Link>
      </div>
      <br />
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <td>Title</td>
              <td>Creator</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              data.length &&
              data?.map(ele =>
                <tr>
                  <td>{ele?.title}</td>
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


