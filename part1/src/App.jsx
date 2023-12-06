import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const thisGood = () => {
    setGood(good + 1);
  }
  const thisBad = () => {
    setBad(bad + 1);
  }
  const thisNeutral = () => {
    setNeutral(neutral + 1);
  }
  return (
    <div>
      <h3>Give feedbacks</h3>
      <br></br>
      <button onClick={thisGood}> 👍 </button>
      <button onClick={thisBad}> 👎 </button>
      <button onClick={thisNeutral}> 😐 </button>
      <h3> Statistics </h3>
      <p>Good : {good}</p>
      <p>Bad : {bad}</p>
      <p>Neutral : {neutral}</p>
    </div>
  )
}

export default App