import React from 'react'

const Form = (props) => {
    const [name, setName, email, setEmail, password, setPassword, userNames, setUserNames] = props

    const nameHandler = (e) => {
        setName = e.target.value;
    }
    const emailHandler = (e) => {
        setEmail = e.target.value;
    }
    const passwordHandler = (e) => {
        setPassword = e.target.value;
    }

    const createUser = (e) => {
        e.preventDefault()
        setUserNames = {name, email, password}
    }

  return (
    <div>
        <form onSubmit={createUser}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={nameHandler()}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" onChange={emailHandler}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" onChange={passwordHandler}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
