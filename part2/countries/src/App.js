import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import CountryList from './components/CountryList';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState('')

  useEffect(
    () => axios.get("https://restcountries.com/v3.1/all").then(response => setCountries(response.data)),
    []
  )

  const defaultData = {
    defaultText: "Too many countries, specify another filter",
    defaultThreshold: 10
  }
  return (
    <div>
      <Filter 
        text="find countries" 
        searchValue={countrySearch} 
        onChange={event => setCountrySearch(event.target.value)} 
      />
      <CountryList 
        countries={countries.filter(country => country.name.common.toUpperCase().includes(countrySearch.toUpperCase()))}
        {...defaultData}
      />
    </div>
  );
}

export default App;
