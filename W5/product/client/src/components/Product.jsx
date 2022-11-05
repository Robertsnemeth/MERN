import React, { useState, useEffect} from 'react';
import axios from 'axios';
import{ Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Product = (props) => {

    const [ product, setProduct ] = useState({});

    const {update, setUpdate} = props;

    const { id } = useParams();

    const handleClick = () => {
      setUpdate(true);
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data.product, console.log(res.data.product)))
            .catch(err => console.log(err))
    }, []);

  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl">{product.name}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={handleClick} className="rounded border border-black p-2 bg-slate-500 text-white hover:bg-slate-700 focus:bg-slate-800">Update</button>
        <Link to="/" className="underline">Back to all products</Link>
    </div>
  )
}

export default Product