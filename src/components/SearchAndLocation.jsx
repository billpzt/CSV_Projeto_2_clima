import React, { useState} from 'react';

export default function SearchAndLocation(props) {
    const [cidade, setCidade] = useState("Rio de Janeiro");

    const handleChange = (event) =>  { event.preventDefault();
        setCidade(event.target.value);
    };

    return (
        <input type="text" id="search"
        onChange={handleChange} placeholder="Buscar cidade"
        value={cidade} />

    )
}