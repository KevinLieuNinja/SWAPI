import React from 'react';


const Show = ({info, name, }) => {
    return(
        <div class="jumbotron">
            {name === 'people'?
            <p>
            <h1>Name: {info.name}</h1>
            <h1>Species: {info.species}</h1>
            <h1>Color: {info.skin_color}</h1>
            </p>
            :
            <p>
            <h1>Name: {info.name}</h1>
            <h1>Terrain: {info.terrain}</h1>
            <h1>Weather: {info.climate}</h1>
            <h1>Population: {info.population}</h1>
            </p>
        }
        </div>
    )
}

export default Show;
