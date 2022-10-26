
import React, { useState } from 'react'

const Form = (props) => {

    const {currentSearch, setCurrentSearch, currentId, setCurrentId} = props;

    const [search, setSearch] = useState("");
    const [ id, setId] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(currentSearch);
    }

    const handleId = (e) => {
        setId(e.target.value);
        console.log(currentId);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentSearch(search);
        setCurrentId(id);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for: </label>
            <select name="" id="" onChange={handleSearch}>
                <option >-------</option>
                <option >people</option>
                <option >planets</option>
            </select>
            <label htmlFor="id">ID: </label>
            <input type="number" onChange={handleId}/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Form