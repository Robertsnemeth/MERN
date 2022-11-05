import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const ProductForm = () => {

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            name,
            price,
            description
        })
        .then(res => {console.log(res); console.log(res.data)})
        .catch(err => console.log(err));
        setName("");
        setPrice("");
        setDescription("");
        navigate('/')
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    
   return (
    <div className="bg-slate-500 text-white p-4 h-72">
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center m-5">
            <div style= {{
                margin: "10px",
                alignSelf: "flex-start"
            }}>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" onChange={handleName} value={name} className="bg-slate-500 rounded border"/>
            </div>
            <div style= {{
                margin: "10px",
                alignSelf: "flex-start"
            }}>
                <label htmlFor="price">Price: </label>
                <input id="price" type="text" onChange={handlePrice} value={price} className="bg-slate-500 rounded border"/>
            </div>
            <div style= {{
                margin: "10px",
                alignSelf: "flex-start"
            }}>
                <label htmlFor="desc">Description: </label>
                <textarea id="desc" type="text" onChange={handleDescription} value={description} className="bg-slate-500 rounded border"></textarea>
            </div>
            <button className="rounded border border-black p-2 hover:bg-slate-700">Create</button>
        </form>
        <Link to={'/'} className="underline">All products</Link>
    </div>
  )
}

export default ProductForm