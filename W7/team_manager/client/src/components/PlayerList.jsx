import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PlayerList = ({allPlayers, setCurrentPlayers}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold">Player List</h1>
        <div>
            <Link to="/team/status/game/1" className="text-2xl underline">Manage Player Status</Link>
        </div>
        {allPlayers.map((player, index) => {
            return(
            <table key={player._id} className="border border-black">
                <thead>
                    <tr>
                        <td className="border border-black p-3 w-48 bg-slate-800 text-white">Player Name:</td>
                        <td className="border border-black p-3 w-48 bg-slate-800 text-white">Position: </td>
                        <td className="border border-black p-3 w-24 bg-slate-800 text-white">Actions:</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black p-3 ">{player.name}</td>
                        <td className="border border-black p-3 ">{player.position}</td>
                        <td className="p-3 flex gap-1 justify-center"><DeleteButton id={player._id} setCurrentPlayers={setCurrentPlayers}/></td>
                    </tr>
                </tbody>
            </table>
            )
        })}
        <Link to="/team/add/player" className="underline">Add Player</Link>
    </div>
  )
}

export default PlayerList