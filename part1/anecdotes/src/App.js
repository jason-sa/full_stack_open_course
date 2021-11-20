import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const Display = ({ value }) => <div>{value}</div>
const Title = ({ title }) => <h1>{title}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const randomSelected = () => Math.floor(Math.random() * anecdotes.length)
  const voteSelected = () => {
    const new_votes = [...votes]
    new_votes[selected] += 1

    return new_votes
  }

  const mostVoted = () => votes.reduce(
    (currentMaxIndex, currentValue, currentIndex, arr ) => currentValue > arr[currentMaxIndex] ? currentIndex : currentMaxIndex, 
    0
    )

  return (
    <>
      <Title title="Anecdote of the day" />
      <Display value={anecdotes[selected]} />
      <Display value={"has " + votes[selected] + " votes"} />
      <Button handleClick={() => setVote(voteSelected())} text="vote" />
      <Button handleClick={() => setSelected(randomSelected())} text="next anecdote" />
      <Title title="Anecdote with most votes" />
      <Display value={anecdotes[mostVoted()]} />
    </>
  )
}

export default App