import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount ( count => count +1);
  };

  const decrease = () => {
    if (count>0){ 
      setCount( count => count -1);
    };
  }
     const resetC = () => {
setCount(0);
    }
  
  return (
    <>
     
      <h1>Test</h1>
      <div className="counter">
        <span className="counter_output">{count}</span>
        <div className="btn_container">
        <button className="btn" onClick={increase}>+</button>
          <button className="btn" onClick={decrease}>-</button>
         <button className="reset_btn" onClick={resetC}>Reset</button>
        </div>
        </div>
    </>
  );
}

export default App
