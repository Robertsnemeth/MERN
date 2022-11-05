import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Products = (props) => {

  const { allProducts, setAllProducts} = props;

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
        .then( res => setAllProducts(res.data.products))
        .catch(err => console.log(err))
},[allProducts]);

  return (
    <div>
      <h1 className="text-4xl">Products</h1>
      {allProducts.map((product) => {
        return (
          <div key={product._id} className="just-self-center border border-white rounded w-52 p-3 m-3">
            <p>Product Name: <Link to={`/product/single/${product._id}`} className="underline">{product.name}</Link></p>
            <p>Price: ${product.price}</p>
            <p>Proudct Description: {product.description}</p>
            <button className="rounded border border-black bg-red-400 hover:bg-red-600 p-2" onClick={(e) => {handleDelete(product._id)}}>Delete</button>
          </div>
        )
      })}
      <Link to={'/product/new'} className="underline">Add new Product</Link>
    </div>
  )
}

export default Products