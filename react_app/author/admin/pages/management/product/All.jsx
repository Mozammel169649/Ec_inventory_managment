import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { delete_product, get_all_product } from '../../../redux/features/product/productSlice';

function All() {
  const dispatch = useDispatch();
  useSelector(state => console.log(state.product))
  const data = useSelector(state => state.product?.products);
  // const data = useSelector(state =>console.log(state));

  useEffect(() => {
    dispatch(get_all_product());
  }, []);

  const handleDelete = (id) => {
    dispatch(delete_product(id));
    dispatch(get_all_product());
  }

  return (
    <div>
     <div>
        <center>
          <h5> All Product</h5>
        </center>
      </div>
      <div>
        <Link to={"create"} className='btn btn-info'> Add Product</Link>
      </div>
      <br />
      <table className="table table-success table-striped">
        <thead>
          <tr >
            <td>Image</td>
            <td>Title</td>
            <td>Creator</td>
            <td>Satus</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Price</td>
            <td>Discount</td>
            <td>Acions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr >
                <td><img src={"/"+ele.image} alt="" height={50}/>{ele.image}</td>
                <td>{ele.title}</td>
                <td>{ele.creator.userName}</td>
                <td>{ele.status}</td>
                <td>
                  {ele.brand.map((e) => {
                    return (
                      <p>{e.title}</p>
                    )
                  }
                  )}
                </td>
                <td>
                  {ele.categories.map((e) => {
                    return (
                      <p>{e.title}</p>
                    )
                  }
                  )}
                </td>
                <td>{ele.price}</td>
                <td>{ele.discount}</td>
                <td class="justify-content-center"  >
                  <Link to={`view/${ele?._id}`} className='btn btn-info m-2'>View</Link>
                  <Link to={`edit/${ele?._id}`} className='btn btn-warning m-2'>Edit</Link>
                  <button onClick={() => handleDelete(ele?._id)} className='btn btn-danger m-2'>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default All 