import ProductForm from './components/ProductForm';
import Products from './components/Products';
import ProductMain from './views/ProductMain';
import {useState} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

const [ allProducts, setAllProducts ] = useState([]);

  return (
    <div className="flex justify-center text-center bg-slate-700 h-screen font-mono text-white">
      <BrowserRouter>
        <Routes>
          <Route element = {<ProductForm/>} path = '/product/new'/>
          <Route element = {<Products allProducts = {allProducts} setAllProducts = {setAllProducts}/>} path = '/'/> 
          <Route element = {<ProductMain/>} path ='/product/single/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
