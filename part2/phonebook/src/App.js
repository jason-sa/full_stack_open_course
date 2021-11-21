import React, { useState } from 'react'
import PhoneNumber from './components/PhoneNumber'

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

  const filterPhoneBook = (person) => (
    newSearch === '' ? 
    true 
    : person.name.toUpperCase().includes(newSearch.toUpperCase()) 
  )


  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input value={newSearch} onChange={handleChange(setNewSearch)} />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange(setNewName)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChange(setNewNumber)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(
          person => filterPhoneBook(person)
          ).map(
            person => <PhoneNumber key={person.id} {...person} />
            )}
      </ul>
    </div>
  )
}

export default App