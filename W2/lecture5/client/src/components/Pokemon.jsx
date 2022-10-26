import React, { useState, useEffect} from 'react'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then(response => response.json()).then(response => setPokemon(response.results))
    }, []);


  return (
    <div style={{
        textAlign: "center",
    }}>
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