import axios from 'axios'
import React, { useEffect, useState } from 'react'



function All() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const modelData = async () => {
      const response = await axios.get('/product')
      console.log(response.data);
      setProduct(response.data);
    }
    modelData();
  }, []);

  return (
    <div>
      <h5> All Products</h5>
      <table className="table table-success table-striped">
        <thead>
          <tr >
            <td>Image</td>
            <td>Title</td>
            <td>Satus</td>
            <td>Brand</td>
            <td>Price</td>
            <td>Discount</td>
            <td>Acions</td>
          </tr>
        </thead>
        <tbody>
          {
            product.map(ele => (
              <tr >
                <td class="justify-content-center" ><img width="30px" src={'/' + ele?.image} alt="" /></td>
                <td class="justify-content-center" >{ele?.title}</td>
                <td class="justify-content-center" >
                  <div class="form-check form-switch d-inline-block">
                    <input class="form-check-input d-inline-block" type="checkbox"
                    role="switch" id="" />
                  </div>
                </td>
                <td class="justify-content-center" >{ele?.brand}</td>
                <td class="justify-content-center" >{ele?.price}</td>
                <td class="justify-content-center" >{ele?.discount}</td>
                <td class="justify-content-center"  >
                  <button className='btn btn-info m-2'>View</button>
                  <button className='btn btn-warning m-2'>Edit</button>
                  <button className='btn btn-danger m-2'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default All 