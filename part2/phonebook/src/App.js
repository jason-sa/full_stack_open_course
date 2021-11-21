import React, { useState } from 'react'
import PhoneNumber from './components/PhoneNumber'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
        {persons.map(person => <PhoneNumber key={person.id} {...person} />)}
      </ul>
    </div>
  )
}

export default App