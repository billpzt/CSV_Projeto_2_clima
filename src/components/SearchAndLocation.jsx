import React, { useEffect, useState } from 'react';

export default function SearchAndLocation(props) {
    const [cidade, setCidade] = useState("london");
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const APIKEY = '9d2e9a1845d97f44e0c3c9b98a003a63';

    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKEY}`;

    const handleSearch = () => {
        fetch(apiCall)
            .then((result) => result.json())
            .then((usefulData) => {
                // console.log(usefulData);
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
        </div>
    )
}

const styles = {
    container: {
        marginTop: 100
    }
}