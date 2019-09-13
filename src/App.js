import React, { Component} from 'react';
import './App.css';

const { useState } = React
      const { render } = ReactDOM
      const App = () => {
        const [count, setCount] = useState(0)
        const increase = () => setCount(c => ++c)
        const reset = () => setCount(0)
        const decrease = () => setCount(c => --c)
        const isEven = count % 2 === 0
        return (
          <div id="app">
            <div
              id="circle"
              onClick={increase}
              style={{ background: isEven ? 'skyblue' : 'red' }}
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
      render(<App />, document.querySelector('#root'))
export default App;
