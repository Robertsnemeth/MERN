import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Person = () => {
    // STATE
    const [ allPersons, setPersons ] = useState([]);
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    // HANDLERS
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/person", {
            firstName,
            lastName
        })
            .then(res => {console.log(res); console.log(res.data)})
            .catch(err => console.log(err));
        setFirstName("");
        setLastName("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    };

    const handleLastName = (e) => {
        setLastName(e.target.value)
    };

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/person/${id}`)
    };
//  API REQUESTS TO BACKEND
    useEffect(() => {
        axios.get("http://localhost:8000/api/person")
            .then( res => setPersons(res.data.persons, console.log(res.data.persons)))
            .catch(err => console.log(err))
    },[])
//  VIEW
  return (
    <div>
        {allPersons.map((person) => {
            return(
            <div key={person._id}>
                <h2>Person from the backend: {person.firstName} {person.lastName} id: {person._id} <button onClick={id => handleDelete(person._id)}>Delete</button></h2>
            </div>
        )})}
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" onChange={handleFirstName} value={firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" onChange={handleLastName} value={lastName} />
                </div>
                <button>Submit</button>
            </form>
        </div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
    </div>
  )
}

export default Person