import React, { useState } from 'react'

export default function SpotCheck1() {
  // your code here
  let [counter,setCounter]=useState(0);

  const increaseCounter = () => setCounter(counter+1);
  const decreasesCounter = () => setCounter(counter-1);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        {/* your code here... */}
        <button onClick={increaseCounter}>increase</button>
        <button onClick={decreasesCounter}>decreases </button>
        <div>Counter: {counter}</div>
      </div>
    </div>
  )
}