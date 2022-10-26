import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Pokemon = () => {
    
    const [pokemon, setPokemon] = useState([])  

    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then((response) => {setPokemon(response.data.results)}).catch((error) => (console.log(error)))
    console.log("is there getting here" )
    }, []);

  return (
    <div style={{
        textAlign: "center",
    }}>
        <h1>All the Pokemons</h1>
        {pokemon.length > 0 && pokemon.map((pokemon, index) => {
            const pokeNum = index + 1;
            const imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeNum  + ".png";
            return (<div key={index}>
                <img src={imgURL} alt={pokemon.name} />
                <p>{pokeNum}  {pokemon.name}</p>
                </div>)
        })}
    </div>
  )

}

export default Pokemon