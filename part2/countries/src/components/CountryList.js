import React from "react";

const Country = ({ name, capital, population, languages, flags }) => {
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
    </>
    )
}

const CountryList = ({ countries, defaultText, defaultThreshold }) => {
    console.log(countries);

    if (countries.length > defaultThreshold) return<>{defaultText}</>
    else if (countries.length > 1) {
        return countries.map((country, i) => <div key={i}>{country.name.common}</div>)
    }
    else if (countries.length === 1) return <Country {...countries[0]} />

    return <> </>
}

export default CountryList