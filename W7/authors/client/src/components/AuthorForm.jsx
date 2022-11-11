import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {

    const { initialName, onSubmitProp, errors, desc } = props;

    const [ name, setName ] = useState(initialName);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

  return (
    <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Favorite Authors</h1>
        <Link className='underline text-blue-600' to='/'>Home</Link>
        <h2 className='text-2xl  text-purple-500'>{desc}:</h2>
        <div>
            {errors.name && <p className="text-center text-red-500">{errors.name.message}</p>}
            <form onSubmit={handleSubmit} className='border border-black flex gap-2 items-center p-4'>
                <label htmlFor="name">Name: </label>
                <input className='border border-black' type="text" value={name} onChange={handleName}/>
            <button type="submit" className="bg-blue-400 rounded text-white p-2 mt-1">Submit</button>
            <button className="bg-blue-400 rounded text-white p-2 mt-1" onClick={() => {navigate('/')}}>Cancel</button>
            </form>
        </div>
    </div>
  )
}

export default AuthorForm