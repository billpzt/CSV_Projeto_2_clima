import React from 'react';

export default function TempAndWeather(props) {
    return (
        <div>
            <h1>{props.cityName}, {props.countryName}</h1>
            <p><strong>Weather:</strong> {props.weather}</p>
            <p><strong>Description</strong>: {props.weatherDescription}</p>
            <p><strong>Temperature:</strong> {props.temp} {'\u00B0'}C</p>
            <span><strong>Min:</strong> {props.minTemp} | <strong>Max:</strong> {props.maxTemp}</span>
        </div>
    )
}