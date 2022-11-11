import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const PlayerForm = ({ setCurrentPlayers }) => {

    const [ name, setName ] = useState("");
    const [ position, setPosition ] = useState("");
    const [ errors, setErrors ] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/team", {name, position})
            .then(res => {
                console.log(res.data);
                setCurrentPlayers(name);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.error.errors);
                const errRes = err.response.data.error.errors
                setErrors(errRes);
                console.log("this is an error");
                console.log(err)
            })
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePostition = (e) => {
        setPosition(e.target.value);
    };

  return (
    <div className="p-4 m-4 border border-black ">
        <h1 className="text-3xl font-bold">Add Player: </h1>
        <div className='m-5 flex flex-col '>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
                {errors.name && <p className="text-center text-red-500">{errors.name.message}</p>}
                <div className='flex items-center gap-5'>
                    <label htmlFor="name" className="">Name: </label>
                    <input type="text" onChange={handleName} className='border border-black rounded'/>
                </div>
                <div className='flex items-center gap-5 justify-between'>
                    <label htmlFor="name">Preferred Position: </label>
                    <input type="text" onChange={handlePostition} className='border border-black rounded'/>
                </div>
                <button className="border border-black rounded p-1 bg-blue-400 text-white w-24 hover:bg-blue-500">Submit</button>
            </form>
        </div>
        <Link to="/team/list" className="underline">Home</Link>
    </div>
  );
};

export default PlayerForm