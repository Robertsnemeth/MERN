import React,{ useContext } from 'react'
import Context from './../contexts/Context'

const Form = () => {

    const context = useContext(Context)
    let currentName = "";

    const handleName = (e) => {
        currentName = e.target.value;
    }

    const handleChange = (e) => {
        e.preventDefault();
        context.setName(currentName);
        e.target.value = ""
    }


  return (
    <div>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" onChange={handleName}/>
            <button onClick={(e) => {handleChange(e)}}>Change Name</button>
        </form>
    </div>
  )
}

export default Form