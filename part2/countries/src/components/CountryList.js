import React from "react";

const Country = ({ name, capital, population, languages, flags, weather }) => {
    return (
    <>
        <h1>{name.common}</h1>
        <p>capital {capital.reduce((capString, cap) => capString += ", ")}</p>
        <p>population {population}</p>

        <h2>languages</h2>
        <ul>
            {Object.values(languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={flags.svg} alt={`${name.common} flag`}/>
        <h2>{`Weahter in ${capital}`}</h2>
        <b>temperature:</b> {weather.main.temp + " Farenheiht"}
        <br></br>
        <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
        <br></br>
        <b>wind:</b> {weather.wind.speed + " mph"}
        
    </>
    )
}

const CountryList = ({ countries, defaultText, defaultThreshold, setCountry, weather }) => {
    if (countries.length > defaultThreshold) return<>{defaultText}</>
    else if (countries.length > 1) {
        return countries.map((country, i) => <div key={i}>{country.name.common}<button onClick={() => setCountry([country])}>show</button></div>)
    }
    else if (countries.length === 1) return <Country {...countries[0]} weather={weather} />

    return <> </>
}

export default CountryList