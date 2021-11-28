import React from "react";
import PhoneNumber from "./PhoneNumber";

const Persons = ({ persons, searchValue, onClick }) => {
    const filterPhoneBook = (person, searchValue) => (
        searchValue === '' ? 
        true 
        : person.name.toUpperCase().includes(searchValue.toUpperCase()) 
      )
    
    return persons.filter(
        person => filterPhoneBook(person, searchValue)
        ).map(
          person => <PhoneNumber key={person.id} {...person} onClick={() => onClick(person.id)} />
          )
}

export default Persons