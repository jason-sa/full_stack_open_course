import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then(initialPerson => setPersons(initialPerson))
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.filter(person => person.name === newName)
    existingPerson.length ? updatePerson({...existingPerson[0], number: newNumber}) : insertPerson()
  }

  const successMessageTimeout = message => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(null), 5000)
  }
  const updatePerson = updatedPerson => {
    if (alertNameExists()) {
      personService
        .update(updatedPerson.id, updatedPerson)
        .then(
          () => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
            successMessageTimeout(`Updated ${updatedPerson.name} number`)
          }
        )

      // setSuccessMessage()
      // console.log(successMessage)
      // successMessageTimeout()
    }
  }
  const insertPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        successMessageTimeout(`Added ${newName}`)
      })
  }

  const removePerson = id => {
    window.confirm(`Delete ${persons.filter(person => person.id === id)[0].name}`)
    personService
      .remove(id)
      .then(
        () => personService
                .getAll()
                .then(allPersons => setPersons(allPersons))
          )
  }

  const handleChange = (setState) => (event) => setState(event.target.value)

  const alertNameExists = () => {
    const addNumber = window.confirm(
      `${newName} is already added to phonebook, replace the old number with a new one?`
    )
    return addNumber
  }



  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={successMessage} />
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
        <Persons persons={persons} searchValue={newSearch} onClick={removePerson}/>
      </ul>
    </div>
  )
}

export default App