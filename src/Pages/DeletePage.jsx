import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeletePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products') 
      .then(response => {
        setProducts(response.data);
        // console.log(response.data);
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs once on mount

  const deleteAction = async (productId) =>{
    if(window.confirm("Would you like to delete this item?")){
      try{
        await axios.delete(`http://localhost:3000/api/products/${productId}`)
        setProducts(products.filter(product => product._id !== productId))
      }
      catch(error){
        alert(error);
      }
    }
  }
  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <table border='2' cellSpacing='0' cellPadding='10'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product._id}</td>
                <td>{product.p_name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td><button onClick = {() => deleteAction(product._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DeletePage;
