import React, { useEffect } from 'react';
import axios from 'axios'


const Card = (props) => {

    const {currentSearch, currentId, currentData, setCurrentData } = props;

    let searchUrl = `https://swapi.dev/api/${currentSearch}/${currentId}`;
    console.log(searchUrl)


    useEffect(() => {
        axios.get(searchUrl).then((response) => {console.log(response); setCurrentData(response.data)}).catch((error) => (console.log(error)));
    }, [currentSearch, currentId]);

  if(currentData) {
    return (
    <div>
        { 
            currentSearch === "people" ? 
        <div>
            <h1>{currentData.name}</h1>
            <label>Height: {currentData.height}</label>
            <p></p>
            <label>Hair Color: {currentData.hair_color}</label>
            <p></p>
            <label>Eye Color: {currentData.eye_color}</label>
            <p></p>
            <label>Skin Color: {currentData.skin_color}</label>
            <p></p>
        </div> :
        <div>
            <h1>{currentData.name}</h1>
            <label>Climate: {currentData.climate}</label>
            <p></p>
            <label>Terrain: {currentData.terrain}</label>
            <p></p>
            <label>Surface Water: {currentData.surface_water}</label>
            <p></p>
            <label>Population: {currentData.population}</label>
            <p></p>
        </div>
        }
    </div>
  ) } else {
    <div>
        <h1>These arn't the droids you're looking for.</h1>
    </div>
  }
}

export default Card