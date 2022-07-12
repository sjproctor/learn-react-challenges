import React, { useState } from 'react'

import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import RozBot from './components/RozBot'
import robotImage from './assets/robot.png'
import './App.css'

const App = () => {
 
  const [userInput, setUserInput] = useState("")

  const robotInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Robot Challenge</h1>
      <img
        src={robotImage}
        alt="robot clipart"
      />
      <h3>Enter text here:</h3>
      <input
        onChange={robotInput}
        value={userInput}
      />
      <br />
      <div className="robot-outcome">
        <GoodRobot userInput={userInput} />
        <BadRobot userInput={userInput} />
        <RozBot userInput={userInput} />
      </div>
    </>
  )
}

export default App
