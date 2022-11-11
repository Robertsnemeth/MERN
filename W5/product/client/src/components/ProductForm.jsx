import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const ProductForm = (props) => {

    const { initialName, initialPrice, initialDescription, onSubmitProp, formErrors } = props;

    const [ name, setName ] = useState(initialName);
    const [ price, setPrice ] = useState(initialPrice);
    const [ description, setDescription ] = useState(initialDescription);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name, price, description });
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
            {/* {formErrors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)} */}
            <div style= {{
                margin: "10px",
                alignSelf: "flex-start"
            }}>
                {formErrors.name && <p className="text-center text-red-500">{formErrors.name.message}</p>}
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" onChange={handleName} value={name} className="bg-slate-500 rounded border"/>
            </div>
            <div style= {{
                margin: "10px",
                alignSelf: "flex-start"
            }}>
                {formErrors.price && <p className="text-center text-red-500">{formErrors.price.message}</p>}
                <label htmlFor="price">Price: </label>
                <input id="price" type="text" onChange={handlePrice} value={price} className="bg-slate-500 rounded border"/>
            </div>
            <div style= {{
                margin: "10px",
                alignSelf: "flex-start"
            }}>
                {formErrors.description && <p className="text-center text-red-500">{formErrors.description.message}</p>}
                <label htmlFor="desc">Description: </label>
                <textarea id="desc" type="text" onChange={handleDescription} value={description} className="bg-slate-500 rounded border"></textarea>
            </div>
            <button className="rounded border border-black p-2 hover:bg-slate-700">Submit</button>
        </form>
        <Link to={'/'} className="underline">All products</Link>
    </div>
  )
}

export default ProductForm