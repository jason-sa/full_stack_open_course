import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import CountryList from './components/CountryList';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState([])
  const [weather, setWeather] = useState({})

  const userCountries = selectedCountry.length ? selectedCountry : countries
  const filteredCountries = userCountries.filter(country => country.name.common.toUpperCase().includes(countrySearch.toUpperCase()))
  const userCapital = filteredCountries.length ? filteredCountries[0].name.common : ""

  useEffect(
    () => axios.get("https://restcountries.com/v3.1/all").then(response =>setCountries(response.data)),
    []
  )

  const getWeatherData = () => {
    if (userCapital !== ""){
      axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: userCapital,
            appid: process.env.REACT_APP_WEATHER_API_KEY,
            units: "imperial"
          }
        }
      )
      .then(response => setWeather(response.data))
    }
  }
  useEffect(getWeatherData, [userCapital])
  console.log(weather);


  const defaultData = {
    defaultText: "Too many countries, specify another filter",
    defaultThreshold: 10
  }


  const serachOnChange = event => {
    setCountrySearch(event.target.value); 
    setSelectedCountry([]);
  }

  return (
    <div>
      <Filter 
        text="find countries" 
        searchValue={countrySearch} 
        onChange={serachOnChange} 
      />
      <CountryList 
        countries={filteredCountries}
        {...defaultData}
        setCountry={setSelectedCountry}
        weather={weather}
      />
    </div>
  );
}

export default App;
