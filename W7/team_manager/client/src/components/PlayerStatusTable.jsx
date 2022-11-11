import React, {useState} from 'react';
import StatusButton from './StatusButton';
import { useParams } from 'react-router';

const PlayerStatusTable = ({ allPlayers}) => {

    const { game } = useParams();

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
                            <StatusButton currentColor="bg-green-500" 
                            status="Playing"
                            isClicked={false}/>
                            <StatusButton currentColor="bg-red-500" 
                            status="Inactive"
                            isClicked={false}/>
                            <StatusButton currentColor="bg-yellow-500" 
                            status="Undecided"
                            isClicked={true}/>
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