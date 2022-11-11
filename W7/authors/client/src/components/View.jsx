import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const View = () => {

    const [ allAuthors, setAllAuthors ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => setAllAuthors(res.data.authors))
            .catch(err => console.log(err))
    }, [allAuthors]);


  return (
    <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Favorite Authors</h1>
        <Link to={'/author/new'} className="underline text-blue-500">Add an author</Link>
        <h2 className="text-purple-500 text-2xl">We have quotes by:</h2>
        {allAuthors.sort((a, b) => a.name > b.name ? 1 : -1).map((author, index) => {
            return (
                <table className='border border-black w-72' key={author._id}>
                <thead>
                    <tr className='border border-black bg-slate-400 text-white'>
                        <td className='border border-black p-1 w-8'><h3>Author: </h3></td>
                        <td className="p-1 w-8"><h3>Actions:</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-black p-1 w-8'>{author.name}</td>
                        <td className="p-1 text-white w-8">
                            <button onClick={(id) => {navigate(`/author/${author._id}`)}} className="bg-blue-400 hover:bg-blue-500 border-black border rounded p-2 mr-1">Edit</button>
                            <DeleteButton id={author._id}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            )
        })
        }
    </div>
  )
}

export default View