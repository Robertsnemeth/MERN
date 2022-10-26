import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
    
const Survey = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const { currentName, setCurrentName } = props;

    const sendSurvey = (e) => {
    e.preventDefault();
    setCurrentName(name);
    navigate("/results");
    }
    
    return (
        <div>
        <Link to="/">to home</Link>
        <form onSubmit={ sendSurvey }>
            <label>Your Name:</label>
            <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
            <label>Your Comment:</label>
            <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
            <input type="submit" value="Submit Survey" />
    </form>
        </div>
    );
}

export default Survey

