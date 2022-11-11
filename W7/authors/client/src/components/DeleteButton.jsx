import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

    const {id} = props;
    
    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };
    
  return (
    <button onClick={handleDelete} className="rounded border border-black bg-red-400 hover:bg-red-600 p-2" >Delete</button>
  )
}

export default DeleteButton