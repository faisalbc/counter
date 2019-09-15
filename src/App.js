import React, { useState } from 'react'
import './App.css'

export default function App() {

  const [count, setCount] = useState(0) // here I have mentioned variable for increase and decrease 

  const increase = () => setCount(c => c +1) // it will add 1

  const reset = () => setCount(0) // finction is zero

  const decrease = () => setCount(c => --c) // decrease 1

  const isEven = count % 2 === 0

  return (
    <div id="app">
      <div
        id="circle"
        onClick={increase}
        style={{ background: isEven ? 'skyblue' : 'red' }} // for the color change
      >
        {count}
      </div>
      <div id="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
