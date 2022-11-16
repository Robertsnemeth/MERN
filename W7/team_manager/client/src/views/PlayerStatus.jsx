import React, { useState } from 'react'
import PlayerStatusTable from '../components/PlayerStatusTable'
import { Link } from 'react-router-dom';

const PlayerStatus = ({ allPlayers, setCurrentPlayers }) => {

const [ gameNum, setGameNum ] = useState(1);

const handleLinkClick = (game) => {
    setGameNum(game);
    console.log(game);
}

  return (
    <div>
        <Link to="/team/list" className="text-3xl underline">Manage Players</Link>
        <div className='flex gap-2 text-2xl underline m-4'>
            <Link to={`/team/status/game/1`} className="hover:text-slate-500 focus:bg-slate-400 " onClick={(e) => {handleLinkClick(1)}}>Game 1</Link>
            <Link to={`/team/status/game/2`} className="hover:text-slate-500 focus:bg-slate-400 " onClick={(e) => {handleLinkClick(2)}}>Game 2</Link>
            <Link to={`/team/status/game/3`} className="hover:text-slate-500 focus:bg-slate-400 " onClick={(e) => {handleLinkClick(3)}}>Game 3</Link>
        </div>
            { gameNum === 1 && <PlayerStatusTable
              allPlayers={allPlayers}
              setCurrentPlayers={setCurrentPlayers}/>}
            {gameNum === 2 && <PlayerStatusTable
              allPlayers={allPlayers}
              setCurrentPlayers={setCurrentPlayers}/>}
            { gameNum === 3 && <PlayerStatusTable
              allPlayers={allPlayers}
              setCurrentPlayers={setCurrentPlayers}/>}
    </div>
  )
}

export default PlayerStatus