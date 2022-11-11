import React, {useState} from 'react';
import Product from '../components/Product';
import UpdateForm from '../components/UpdateForm';

const ProductMain = () => {

    const [update, setUpdate] = useState(false);

  return (
    <div>
        {update ? <UpdateForm/> : 
        <Product update={update} 
        setUpdate={setUpdate} /> }
    </div>
  )
}

export default ProductMain