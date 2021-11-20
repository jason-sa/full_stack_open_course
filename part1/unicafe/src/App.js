import React, { useState } from 'react'

const Title = ( { text } ) => <h1>{text}</h1>
const Button = ( { handleClick, text } ) => <button onClick={handleClick}>{text}</button>
const Display = ( { text, count, addPercentage } ) => (
  <div>
    {text} {isNaN(count) ? 0 : count} {addPercentage ? '%' : ''}
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countClick = (text) => () => {
    if (text === "good") return setGood(good+1)
    if (text === "neutral") return setNeutral(neutral+1)
    if (text === "bad") return setBad(bad+1)
  }

  const total_clicks = () => good + neutral + bad
  const scored_clicks = () => good - bad

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={countClick("good")} text="good" />
      <Button handleClick={countClick("neutral")} text="neutral" />
      <Button handleClick={countClick("bad")} text="bad" />
      <Title text="statistics" />
      <Display text="good" count={good} />
      <Display text="neutral" count={neutral} />
      <Display text="bad" count={bad} />
      <Display text="all" count={total_clicks()} />
      <Display text="average" count={scored_clicks() / total_clicks()} />
      <Display text="positive" count={good / total_clicks() * 100} addPercentage={true} />
    </div>
  )
}

export default App