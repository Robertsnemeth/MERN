import React, {useState} from 'react'
import AuthorForm from '../components/AuthorForm'
import UpdateForm from '../components/UpdateForm'
import View from '../components/View'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorMain = () => {
    
const [ errors, setErrors ] = useState({});

const navigate = useNavigate();

const handleSubmit = (authorParam) => {
    axios.post('http://localhost:8000/api/author', authorParam)
        .then(res => 
            {console.log(res);
            navigate('/')})
        .catch(err => {
            console.log(err.response.data.error.errors);
            const errRes = err.response.data.error.errors;
            setErrors(errRes);
            console.log(err)});
};

  return (
    <div className=''>
        <Routes>
            <Route element={<View/>} path='/all'/>
            <Route element={<AuthorForm
                onSubmitProp={handleSubmit}
                initialName=""
                desc="Add a new author"
                errors={errors}/>} 
                path='/new'/>
            <Route element={<UpdateForm/>} path='/:id'/>
        </Routes>
    </div>
  )
}

export default AuthorMain