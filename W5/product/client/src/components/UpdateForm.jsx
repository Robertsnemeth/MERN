import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router';

const UpdateForm = () => {

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setName(res.data.product.name);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            name,
            price,
            description
        })
        .then(res => {console.log(res.data.product); console.log(res.data.product)})
        .catch(err => console.log(err));
        navigate('/');
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
    <div >
        <h1 className="text-4xl m-3">Product Manager</h1>
        <div className="bg-slate-500 text-white p-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center text-black">
                <div style= {{
                    margin: "10px",
                    alignSelf: "flex-start"
                }}>
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={handleName} value={name} />
                </div>
                <div style= {{
                    margin: "10px",
                    alignSelf: "flex-start"
                }}>
                    <label htmlFor="">Price: </label>
                    <input type="text" onChange={handlePrice} value={price} />
                </div>
                <div style= {{
                    margin: "10px",
                    alignSelf: "flex-start"
                }}>
                    <label htmlFor="">Description: </label>
                    <textarea type="text" onChange={handleDescription} value={description} ></textarea>
                </div>
                <button className="border border-black rounded p-2 hover:bg-slate-700">Update</button>
            </form>
        </div>
        <Link to={'/'} className="underline hover:bg-slate-400">All products</Link>
    </div>
  )
}

export default UpdateForm