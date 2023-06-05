import React, { useEffect, useState } from 'react';
import TempAndWeather from './TempAndWeather';

export default function WeatherApp(props) {
    const [cidade, setCidade] = useState("london");
    const [data, setData] = useState({});
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const APIKEY = '9d2e9a1845d97f44e0c3c9b98a003a63';

    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKEY}&units=metric`;
    // https://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${9d2e9a1845d97f44e0c3c9b98a003a63}

    const handleSearch = () => {
        fetch(apiCall)
            .then((result) => result.json())
            .then((usefulData) => {
                console.log(usefulData);
                // setLoading(false);
                setData(usefulData);
            })
            .catch((e) => {
                setError(`An error occurred: ${e}`);
                // setLoading(false);
            });
        console.log(data);
    };

    useEffect(() => {        
        handleSearch();
    }, []);

    const handleChange = (event) =>  {event.preventDefault();
        setCidade(event.target.value);
    };

    // return (
    //     <>
    //       <div className="App">
    //         {loading && <p>Loading...</p>}
    //         {!loading && <p>Fetched data</p>}
    //       </div>
    //     </>
    //   )


    return (
        <div style={styles.container}>
            <input 
                type="text" 
                id="search"
                onFocus={() => setCidade("")}
                onChange={handleChange} 
                placeholder="Buscar cidade"
                value={cidade} 
            />
            <button 
                onClick={handleSearch}
            >Buscar</button>
            <TempAndWeather
                cityName={data.name}
                weather={data.weather[0].main}
                weatherDescription={data.weather[0].description}
                countryName={data.sys.country}
                temp={data.main.temp}
                minTemp={data.main.temp_min}
                maxTemp={data.main.temp_max} 
                />
        </div>
    )
}

const styles = {
    container: {
        marginTop: 100,
        backgroundColor: 'lightblue',
        width: '50%',
        margin: 'auto',
        padding: '20px',
        border: '1px solid',
        
    }
}