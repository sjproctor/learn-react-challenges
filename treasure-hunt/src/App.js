import React, { useState, useEffect } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])
  const [treasureLocation, setTreasureLocation] = useState(null)
  const [bombLocation, setBombLocation] = useState(null)
  const [counter, setCounter] = useState(5)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    gameSet()
  }, [])

  const gameSet = () => {
    // setting random numbers for treasure and bomb location
    const treasure = Math.floor(Math.random() * board.length)
    let bomb = Math.floor(Math.random() * board.length)
    // if the treasure and bomb location are the same, reassign the bomb
    if(treasure === bomb){
      bomb = Math.floor(Math.random() * board.length)
    }
    setTreasureLocation(treasure)
    setBombLocation(bomb)
  }

  const restartGame = () => {
    // resets the game to the original state
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"])
    setTreasureLocation(null)
    setBombLocation(null)
    setCounter(5)
    setGameOver(false)
    // calls the method that resets the bomb and treasure values
    gameSet()
  }

  const handleGamePlay = (index) => {
    // decrements the counter for every click
    let count = counter - 1
    if(index === treasureLocation && !gameOver && counter > 0){
      board[index] = "💎"
      setBoard(board)
      setGameOver("winner")
    } else if(index === bombLocation && !gameOver && counter > 0){
      board[index] = "💣"
      setBoard(board)
      setGameOver("lose")
    } else if(!gameOver && counter > 0 && board[index] === "?"){
      board[index] = "🌴"
      setBoard(board)
      setCounter(count)
    }
  }

  console.log("treasure:", treasureLocation, "bomb:", bombLocation)
  return (
    <>
      <h1>Treasure Hunt</h1>
      <h3>Counter: {counter}</h3>
      <div className="gameBoard">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          )
        }) }
      </div>
      {gameOver === "winner" &&
        <div className="endGameMessage">
          <h3>Congratulations! You found the treasure! 💎</h3>
          <button onClick={restartGame}>Start Again</button>
        </div>
      }
      {(gameOver === "lose" || counter === 0)  &&
        <div className="endGameMessage">
          <h3>Welp, you lost! 🥺</h3>
          <button onClick={restartGame}>Start Again</button>
        </div>
      }
    </>
  )
}

export default App