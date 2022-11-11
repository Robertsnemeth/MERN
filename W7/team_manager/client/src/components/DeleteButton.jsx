import React from 'react';
import axios from 'axios';

const DeleteButton = ({ id, setCurrentPlayers }) => {

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/team/${id}`)
            .then(res => {
                console.log(res); 
                setCurrentPlayers("delete");
            })
            .catch(err => console.log(err));
    };

    const handleClick = (e) => {
        alert("Are you sure you want to delete this player?");
        handleDelete();
    }
    
  return (
    <div>
        <button onClick={handleClick} className={`border border-black rounded p-1 bg-red-500 hover:bg-red-400`}>Delete</button>
    </div>
  )
}

export default DeleteButton