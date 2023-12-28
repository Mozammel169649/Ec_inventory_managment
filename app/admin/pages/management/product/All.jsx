import axios from 'axios'
import React, { useEffect, useState } from 'react'



function All() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const modelData = async () => {
      const response = await axios.get('/api/v1/product')
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
          <tr>
            <td>Image</td>           
            <td>Title</td>
            <td>Satus</td>            
            <td>Brand</td>
            <td>Price</td>
            <td>Discount</td>
          </tr>
        </thead>
        <tbody>
          {
            product.map(ele => (
              <tr>
                <td><img width="30px" src={'/'+ ele?.image} alt=""/></td>
                <td>{ele?.title}</td>
                <td>{ele?.status} </td>
                <td>{ele?.brand}</td>
                <td>{ele?.price}</td>
                <td>{ele?.discount}</td>
              </tr>
            ) )
          }
        </tbody>
      </table>
    </div>
  )
}

export default All 