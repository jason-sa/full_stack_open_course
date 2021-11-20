import React, { useState } from 'react'

const Title = ( { text } ) => <h1>{text}</h1>
const Button = ( { handleClick, text } ) => <button onClick={handleClick}>{text}</button>
const StatisticsLine = ( { text, value, addPercentage } ) => (
  <tbody>
    <tr>
      <td>{text}</td> 
      <td>{isNaN(value) ? 0 : value} {addPercentage ? '%' : ''}</td>
    </tr>
  </tbody>
)
const Statistics = ( { good, neutral, bad } ) => {
  const total_clicks = () => good + neutral + bad
  const scored_clicks = () => good - bad

  if (total_clicks() === 0) return <div>No feedback given</div>

  return (
    <table>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={total_clicks()} />
      <StatisticsLine text="average" value={scored_clicks() / total_clicks()} />
      <StatisticsLine text="positive" value={good / total_clicks() * 100} addPercentage={true} />
    </table>
  )
}

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


  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={countClick("good")} text="good" />
      <Button handleClick={countClick("neutral")} text="neutral" />
      <Button handleClick={countClick("bad")} text="bad" />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App