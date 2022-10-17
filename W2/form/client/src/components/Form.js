import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    // =====VALIDATIONS=====
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        console.log("Welcome", newUser)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setHasBeenSubmitted(true)
    }

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!")
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be greater than 1 character!")
        } else {
            setFirstNameError("")
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length.length < 1) {
            setLastNameError("Last Name is required!")
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be greater than 1 character!")
        } else {
            setLastNameError("")
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setEmailError("Email is required!")
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be greater than 4 characters!")
        } else {
            setEmailError("")
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!")
        } else if(e.target.value.length < 8) {
            setPasswordError("First Name must be greater than 7 characters!")
        } else {
            setPasswordError("")
        }
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!")
        } else if({confirmPassword} !== {password}) {
            setConfirmPasswordError("Passwords must match!")
        } else {
            setConfirmPasswordError("")
        }
    }
    const submitButton = () => {
        if(firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) {
            return <button type="submit" disabled>Submit</button> 
        } else {
            return <button type="submit">Submit</button>
        }
    }


    return (
    <div>
        { hasBeenSubmitted ? <h1>Thank you for submitting the form!</h1> :
        <h1>Welcome, please submit the form.</h1>}
        <div>
            <form onSubmit={createUser}>
            <div>
                <label htmlFor="name">First Name:</label>
                <input value={firstName} onChange={firstNameHandler} type="text" />
                {
                    firstNameError ? 
                    <p>{firstNameError}</p> :
                    <p></p>
                }
            </div>
            <div>
                <label htmlFor="name">Last Name:</label>
                <input value={lastName} onChange={lastNameHandler} type="text" />
                {
                    lastNameError ? 
                    <p>{lastNameError}</p> :
                    <p></p>
                }
            </div>
            <div>
                <label htmlFor="name">Email:</label>
                <input value={email} onChange={emailHandler} type="text" />
                {
                    emailError ? 
                    <p>{emailError}</p> :
                    <p></p>
                }
            </div>
            <div>
                <label htmlFor="name">Password:</label>
                <input value={password} onChange={passwordHandler} type="password" />
                {
                    passwordError ? 
                    <p>{passwordError}</p> :
                    <p></p>
                }
            </div>
            <div>
                <label htmlFor="name">Confirm Password:</label>
                <input value={confirmPassword} onChange={confirmPasswordHandler} type="password" />
                {
                    confirmPasswordError ? 
                    <p>{confirmPasswordError}</p> :
                    <p></p>
                }
            </div>
                {submitButton()}
            </form>
        </div>
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    </div>
    )
}

export default Form