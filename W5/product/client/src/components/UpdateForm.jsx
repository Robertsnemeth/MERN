import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ProductForm from './ProductForm'

const UpdateForm = () => {

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");
    const [loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setName(res.data.product.name);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    const handleSubmit = (productParam) => {
        axios.put(`http://localhost:8000/api/product/${id}`, productParam)
            .then(res => {console.log(res.data.product); console.log(res.data.product)})
            .catch(err =>{
                console.log(err.response.data.error.errors);
                const errRes = err.response.data.error.errors;
                setErrors(errRes);
                console.log(err)});
    };
    
   return (
    <div >
        <h1 className="text-4xl m-3">Product Manager</h1>
        { loaded && <ProductForm
        onSubmitProp={handleSubmit}
        initialName={name}
        initialPrice={price}
        initialDescription={description}
        formErrors={errors}/>
        }
    </div>
  )
}

export default UpdateForm