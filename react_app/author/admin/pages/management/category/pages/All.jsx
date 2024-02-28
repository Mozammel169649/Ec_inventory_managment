import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_all_category, delete_category } from '../../../../redux/features/category/categorySlice';


function All() {
  const dispatch = useDispatch();
  useSelector(state => console.log(state.category))
  const data = useSelector(state => state.category?.categorys);
  // const data = useSelector(state =>console.log(state));

  useEffect(() => {
    dispatch(get_all_category());
  }, []);

  const handleDelete = (id) => {
    dispatch(delete_category(id));
    dispatch(get_all_category());
  }

  return (
    <div>
      <div>
        <center>
          <h5> All categories</h5>
        </center>
      </div>
      <div>
        <Link to={"create_category"} className='btn btn-info'> Add category</Link>
      </div>
      <br />
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <td>Title</td>
              <td>Creator</td>
              {/* <td>Creator_role</td> */}
              {/* <td>status</td> */}
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
                  {/* <td>{ele?.creator?.role}</td> */}
                  {/* <td>
                    {ele?.status ? "Active" : "Deactive"}
                  </td> */}
                  <td class="justify-content-center"  >
                    <Link to={`categoryView/${ele?._id}`} className='btn btn-info m-2'>View</Link>
                    <Link to={`editCategory/${ele?._id}`} className='btn btn-warning m-2'>Edit</Link>
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


