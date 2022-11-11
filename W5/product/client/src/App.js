import ProductForm from './components/ProductForm';
import Products from './components/Products';
import ProductMain from './views/ProductMain';
import {useState} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {

const [ allProducts, setAllProducts ] = useState([]);
const [ errors, setErrors ] = useState({});

const createProduct = productParam => {
  axios.post("http://localhost:8000/api/product", productParam)
    .then(res => {console.log(res);
      console.log(res.data);})
    .catch(err =>{
      console.log(err.response.data.error.errors);
      const errRes = err.response.data.error.errors;
      setErrors(errRes);
      console.log(err)});
};

  return (
    <div className="flex justify-center text-center bg-slate-700 h-screen font-mono text-white">
      <BrowserRouter>
        <Routes>
          <Route element = {<ProductForm        
            onSubmitProp={createProduct} 
            initialName="" 
            initialPrice="" 
            initialDescription=""
            formErrors={errors}/>}
            path = '/product/new'/>
          <Route element = {<Products allProducts = {allProducts} setAllProducts = {setAllProducts}/>} path = '/'/> 
          <Route element = {<ProductMain/>} path ='/product/single/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
