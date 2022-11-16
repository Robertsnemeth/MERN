import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import PlayerStatus from './PlayerStatus';
import axios from "axios";

const PlayerMain = () => {

    const [ allPlayers, setAllPlayers ] = useState([]);
    const [ currentPlayers, setCurrentPlayers ] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/team")
            .then(res => {
                setAllPlayers(res.data.players);
            })
            .catch(err => console.log(err))
    }, [currentPlayers]);
  return (
    <div>
        <Routes>
            <Route element={<PlayerList allPlayers={allPlayers} setCurrentPlayers={setCurrentPlayers}/>} path="/list"/>
            <Route element={<PlayerStatus allPlayers={allPlayers} setCurrentPlayers={setCurrentPlayers}/>} path="/status/game/:game"/>
            <Route element={<PlayerForm setCurrentPlayers={setCurrentPlayers}/>} path="/add/player"/>
        </Routes>
    </div>
  )
}

export default PlayerMain