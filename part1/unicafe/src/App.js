import React, { useState } from 'react';

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
} 

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if(good === 0 && neutral === 0 && bad ===0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <tr><Statistic feedback="good" value={good}/></tr>
          <tr><Statistic feedback="neutral" value={neutral}/></tr>
          <tr><Statistic feedback="bad" value={bad}/></tr>
          <tr><Statistic feedback="all" value={all}/></tr>
          <tr><Statistic feedback="average" value={ isNaN(average) ? 0 : average}/></tr>
          <tr><Statistic feedback="positive" value={ isNaN(positive) ? 0: positive + "%"}/></tr>
        </tbody>
      </table>
    )
  }
}

const Statistic = ({feedback, value}) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = () => {
    setGood(good + 1)
  }

  const addToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addToBad = () => {
    setBad(bad + 1)
  }

  const all = good + neutral + bad
  const average = ((good - bad) / all) * 100
  const positive = good / all * 100
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="Good" handleClick={() => addToGood()}/>
      <Button text="Neutral" handleClick={() => addToNeutral()}/>
      <Button text="Bad" handleClick={() => addToBad()}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )

}

export default App;
