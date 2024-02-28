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
        <table>
          
        </table>
      </table>
    </div>
  )
}

export default All 