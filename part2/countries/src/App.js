import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import CountryList from './components/CountryList';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState([])

  useEffect(
    () => axios.get("https://restcountries.com/v3.1/all").then(response => setCountries(response.data)),
    []
  )

  const defaultData = {
    defaultText: "Too many countries, specify another filter",
    defaultThreshold: 10
  }

  const userCountries = selectedCountry.length ? selectedCountry : countries

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
        countries={userCountries.filter(country => country.name.common.toUpperCase().includes(countrySearch.toUpperCase()))}
        {...defaultData}
        setCountry={setSelectedCountry}
      />
    </div>
  );
}

export default App;
