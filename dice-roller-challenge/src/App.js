import React, { useState } from 'react'
import './App.css';
import Dice from './components/Dice';
import Rolls from './components/Rolls';

import dice1 from './assets/1-dice.png'
import dice2 from './assets/2-dice.png'
import dice3 from './assets/3-dice.png'
import dice4 from './assets/4-dice.png'
import dice5 from './assets/5-dice.png'
import dice6 from './assets/6-dice.png'

const App = () => {

  const [currentDice, setCurrentDice] = useState("")
  const [lastRoll, setLastRoll] = useState([])
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

  const rollingTheDice = () => {
    const diceRoll = Math.ceil(Math.random() * diceImages.length)
    setCurrentDice(diceImages[diceRoll - 1])
    setLastRoll([...lastRoll, diceRoll])
  }

  return (
    <>
      <h1>Dice Roller Challenge</h1>
      <main>
        <Dice 
          currentDice={currentDice} 
          rollingTheDice={rollingTheDice} 
        />
        <Rolls 
          lastRoll={lastRoll}
        />
      </main>
    </>
  )
}

export default App