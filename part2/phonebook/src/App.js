import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (newNameExists()) {
      alertNameExists()
      return
    }

    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
  }

  const handleChange = (setState) => (event) => setState(event.target.value)

  const newNameExists = () => persons.filter(person => person.name === newName).length
  const alertNameExists = () => window.alert(`${newName} is already added to phonebook`)



  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchValue={newSearch} onChange={handleChange(setNewSearch)} />
      <h3>add a new</h3>
        <PersonForm onSubmit={addPerson} personInputs={
          [
            {text: "name:", value: newName, onChange: handleChange(setNewName)},
            {text: "number:", value: newNumber, onChange: handleChange(setNewNumber)},
          ]
        } />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} searchValue={newSearch}/>
      </ul>
    </div>
  )
}

export default App