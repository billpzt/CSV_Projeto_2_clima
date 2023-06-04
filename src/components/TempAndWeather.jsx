import React from 'react';

export default function TempAndWeather(props) {
    return (
        <div>
            <h1>{props.cityName}</h1>
            <p>Temperature: {props.temp}</p>
        </div>
    )
}