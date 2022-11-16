import React, {useState} from 'react';
import StatusButton from './StatusButton';
import { useParams } from 'react-router';
import axios from 'axios';

const PlayerStatusTable = ({ allPlayers, setCurrentPlayers }) => {

    const { game } = useParams();

    // const handleStatusClick = (status, id) => {
    //     axios.put(`http://localhost:8000/api/team/${id}`, status)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // };

  return (
    <div className=''>
        <h2 className="font-bold">Player Status - Game {game}</h2>
        {allPlayers.map((player, index) => {
            return(
            <table key={player._id} className="border border-black">
                <thead>
                    <tr>
                        <td className="border border-black p-3 w-48 bg-slate-800 text-white">Player Name:</td>
                        <td className="border border-black p-3 w-48 bg-slate-800 text-white">Actions:</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black p-3 w-48">{player.name}</td>
                        <td className=" p-3 w-96 flex gap-1 justify-center">
                            
                            {player.gameStatus === "Playing" && 
                                <div className="flex gap-2">
                                    <StatusButton currentColor="bg-green-500" status="Playing" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/>
                                    <StatusButton currentColor="" status="Inactive" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/>
                                    <StatusButton currentColor="" status="Undecided" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/> 
                                </div> 
                            }   

                            {player.gameStatus === "Inactive" && 
                                <div className="flex gap-2">
                                    <StatusButton currentColor="" status="Playing" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/>
                                    <StatusButton currentColor="bg-red-500" status="Inactive" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/>
                                    <StatusButton currentColor="" status="Undecided" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/> 
                                </div> 
                            }   

                            {player.gameStatus === "Undecided" && 
                                <div className="flex gap-2">
                                    <StatusButton currentColor="" status="Playing" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/>
                                    <StatusButton currentColor="" status="Inactive" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/>
                                    <StatusButton currentColor="bg-yellow-500" status="Undecided" playerId={player._id} setCurrentPlayers={setCurrentPlayers}/> 
                                </div> 
                            }       
                            
                        </td>
                    </tr>
                </tbody>
            </table>
            )
        })}
    </div>
  )
}

export default PlayerStatusTable