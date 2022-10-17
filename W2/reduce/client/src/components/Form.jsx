import React, {useReducer} from 'react'

const Form = () => {
    const initialState = {
        firstName: {
            value: '',
            error: null
            },
        lastName: {
            value: '',
            error: null
            },
        email: {
            value: '',
            error: null
            },
        hasBeenSubmitted: false
        };

        const reducer = (state, action) => {
            switch(action.type) {
                case "SET_FIRST_NAME":
                    return {
                        ...state,
                        firstName: {
                            ...state.firstName,
                            value: action.payload
                        }   
                    }
                case "SET_FIRSTNAME_ERROR":
                    return {
                        ...state,
                        firstName: {
                            ...state.firstName,
                            error: action.payload
                        }
                    }
                case "SET_LAST_NAME":
                    return {
                        ...state,
                        lastName: {
                            ...state.lastName,
                            value: action.payload
                        }
                    }
                case "SET_LASTNAME_ERROR":
                    return {
                        ...state,
                        lastName: {
                            ...state.lastName,
                            error: action.payload
                        }
                    }
                case "SET_EMAIL":
                    return {
                        ...state,
                        email: {
                            ...state.email,
                            value: action.payload
                        }
                    }
                case "SET_EMAIL_ERROR":
                    return {
                        ...state,
                        email: {
                            ...state.email,
                            error: action.payload
                        }
                    }
                case "SET_SUBMITTED":
                    return {
                        ...state,
                        hasBeenSubmitted: action.payload
                    }
                default:
                    return state;
        }
    }

        const [state, dispatch] = useReducer(reducer, initialState);
        
        const handleFirstName = (e) => {
            if(e.target.value.length < 3) {
                dispatch( {
                    type: "SET_FIRSTNAME_ERROR",
                    payload: "First name has to be at least 3 characters long!"
                });
            } else {
                dispatch({
                    type: "SET_FIRSTNAME_ERROR",
                    payload: ""
                });
            }
            dispatch({
                type: "SET_FIRST_NAME",
                payload: e.target.value
            });
        }

        const handleLastName = (e) => {
            if(e.target.value.length < 3) {
                dispatch( {
                    type: "SET_LASTNAME_ERROR",
                    payload: "Last name has to be at least 3 characters long!"
                });
            } else {
                dispatch({
                    type: "SET_LASTNAME_ERROR",
                    payload: ""
                });
            }
            dispatch({
                type: "SET_LAST_NAME",
                payload: e.target.value
            });
        }

        const handleEmail = (e) => {
            const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!e.target.value.match(emailFormat)) {
                dispatch( {
                    type: "SET_EMAIL_ERROR",
                    payload: "Please enter a valid email address!"
                });
            } else {
                dispatch({
                    type: "SET_EMAIL_ERROR",
                    payload: ""
                });
            }
            dispatch({
                type: "SET_EMAIL",
                payload: e.target.value
            });
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch({
                type: "SET_SUBMITTED",
                payload: true
            })
        }
        
  return (
    <div>
        <h1>{JSON.stringify(state)}</h1>
        {
            state.hasBeenSubmitted ? <h2>Form has been submitted!</h2> :
            null
        }
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">First Name: </label>
                <input onChange={(e) => handleFirstName(e)} value={state.firstName.value} type="text" />
                {
                    state.firstName.error ? <p>{state.firstName.error}</p> :
                    null
                }
            </div>
            <div>
                <label htmlFor="">Last Name: </label>
                <input onChange={(e) => handleLastName(e)} value={state.lastName.value} type="text" />
                {
                    state.lastName.error ? <p>{state.lastName.error}</p> :
                    null
                }
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input onChange={(e) => handleEmail(e)} value={state.email.value} type="text" />
                {
                    state.email.error ? <p>{state.email.error}</p> :
                    null
                }
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form