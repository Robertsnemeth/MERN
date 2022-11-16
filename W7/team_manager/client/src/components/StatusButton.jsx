import React, { useState } from 'react';
import axios from 'axios';

const StatusButton = ({currentColor, status, isClicked, playerId, setCurrentPlayers }) => {

    // const [clicked, setClicked ] = useState(isClicked);

    // const handleStatusChange = (e) => {
    //     setClicked(!clicked);
    //     console.log(clicked)
    // }

    const handleStatusClick = (playerStatus, id) => {
      console.log(playerStatus, id)
      axios.put(`http://localhost:8000/api/team/${id}`, {gameStatus: playerStatus})
          .then(res => {
            console.log(res);
            setCurrentPlayers(Math.random());
            })
          .catch(err => console.log(err))
  };

  return (
    <div>
      <button onClick={() => {handleStatusClick( status, playerId )}} className={`border border-black rounded p-1 ${currentColor} hover:border-gray-200`}>{status}</button> 
    </div>
  )
}

export default StatusButton