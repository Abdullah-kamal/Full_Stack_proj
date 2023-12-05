import React from 'react';
import { useState } from 'react';

const App = () => {
  // these are ok
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const LeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
    setTotal(left + right);
    console.log("i am left: ",left);
  }
  const RightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(left + right);
    console.log("i am right: ",right);
  }
  return (
    <div>
      <p>{RightClick} and {LeftClick}</p>
      <p>{total}</p>
      <button onClick={RightClick}>
        right click here</button>
      <button onClick={LeftClick}>
        left click here</button>
    </div>
  )
}

export default App