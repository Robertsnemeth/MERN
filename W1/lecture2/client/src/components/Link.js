import React, {useState} from 'react'

const Link = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password, confirmPassword}
    console.log("Welcome", newUser)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  const firstNameHandler = (e) => {
    console.log(e);
      setFirstName(e.target.value)
  }
  const lastNameHandler = (e) => {
    console.log(e);
      setLastName(e.target.value)
  }
  const emailHandler = (e) => {
    console.log(e);
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    console.log(e);
    setPassword(e.target.value)
  }
  const confirmPasswordHandler = (e) => {
    console.log(e);
    setConfirmPassword(e.target.value)
  }
  return (
    <div>
      <div>
      <form onSubmit={createUser}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input value={firstName} onChange={firstNameHandler} type="text" />
        </div>
        <div>
          <label htmlFor="name">Last Name:</label>
          <input value={username} onChange={lastNameHandler} type="text" />
        </div>
        <div>
          <label htmlFor="name">Email:</label>
          <input value={email} onChange={emailHandler} type="text" />
        </div>
        <div>
          <label htmlFor="name">Password:</label>
          <input value={password} onChange={passwordHandler} type="password" />
        </div>
        <div>
          <label htmlFor="name">Confirm Password:</label>
          <input value={confirmPassword} onChange={confirmPasswordHandler} type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
      </div>
    </div>
  )
}

export default Link