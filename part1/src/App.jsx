import { useState } from 'react'

const StatisticsLines = (props) => {
  return (
      <tbody>
        <tr>
          <th>Statistics</th>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{props.total}</td>
        </tr>
        <tr>
          <td>Good:</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>Bad:</td>
          <td>{props.bad}</td> 
        </tr>
        <tr>
          <td>Neutral:</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>Average:</td>
          <td>{props.average}</td>
        </tr>
      </tbody>
  )
}
const Statistics = (props) => {
  const isStatistic = props.isStatistic;
  return (
    <div>
      {isStatistic ? (
        <div className='statistics'>
          <h1> No Feedback Given Yet! </h1>
        </div>
      ) : (
        <table>
          <StatisticsLines
            good={props.good}
            total={props.total}
            bad={props.bad}
            average={props.average}
            neutral={props.neutral} />
        </table>
      )}

      <table className='feedbacks'>
      <tbody>
        <tr>
          <th><h3>Give feedbacks</h3></th>
        </tr>
        <tr>
            <td>
              <button onClick={props.thisGood}> 👍 </button>
              <button onClick={props.thisBad}> 👎 </button>
              <button onClick={props.thisNeutral}> 😐 </button>
              </td> 
        </tr>
          </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);
  const all = good + bad + neutral;
  const average = total / all;
  const isStatistic = (good + bad + neutral) == 0;
  const thisGood = () => {
    setGood((curr) => curr + 1);
    setTotal(total + 1);
  }
  const thisBad = () => {
    setBad((curr) => curr + 1);
    setTotal(total - 1);
  }
  const thisNeutral = () => {
    setNeutral((curr) => curr + 1);
    setTotal(total + 0);
    console.log(neutral);
  }

  return (
    <div>

      <div>
        <Statistics
          isStatistic={isStatistic}
          good={good}
          total={total}
          bad={bad}
          average={average}
          neutral={neutral}
          thisGood={thisGood}
          thisBad={thisBad}
          thisNeutral={thisNeutral} />
      </div>
    </div>
  )
}

export default App