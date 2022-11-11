import React, {useEffect, useState} from 'react';
import AuthorForm from './AuthorForm'
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';

const UpdateForm = () => {

    const [ name, setName ] = useState("");
    const [loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            console.log(res);
            setName(res.data.author.name);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, []); 

    const handleSubmit = (authorParam) => {
        axios.put(`http://localhost:8000/api/author/${id}`, authorParam)
            .then(res => {
                console.log(res.data.author);
                navigate('/');
            })
            .catch(err =>{
                console.log(err.response.data.error.errors);
                const errRes = err.response.data.error.errors;
                setErrors(errRes);
                console.log(err)})
    };
    
  return (
    <div>
        { loaded? <AuthorForm
            initialName={name}
            onSubmitProp={handleSubmit}
            desc="Edit author"
            errors={errors}/> :
            <div>
                <h1 className="text-3xl">We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</h1>
                <Link to="/author/new" className="text-blue-400 underline">Add author</Link>
            </div>
        }
    </div>
  )
}

export default UpdateForm