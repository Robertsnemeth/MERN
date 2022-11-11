import React, { useState } from 'react'

const StatusButton = ({currentColor, status, isClicked }) => {

    const [clicked, setClicked ] = useState(isClicked);

    const handleStatusChange = (e) => {
        setClicked(!clicked);
        console.log(clicked)
    }

  return (
    <div>
        {
            clicked ? 
            <button onClick={handleStatusChange} className={`border border-black rounded p-1 ${currentColor}`}>{status}</button> :
            <button onClick={handleStatusChange} className={`border border-black rounded p-1`}>{status}</button>
        }
    </div>
  )
}

export default StatusButton