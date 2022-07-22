import { useState } from 'react'
import './App.css'

import flashcard1 from './assets/flashcard1.png'
import flashcard2 from './assets/flashcard2.png'
import flashcard3 from './assets/flashcard3.png'
import flashcard4 from './assets/flashcard4.png'
import flashcard5 from './assets/flashcard5.png'

const App = () => {
  const flashcards = [
    flashcard1,
    flashcard2,
    flashcard3,
    flashcard4,
    flashcard5,
  ]

  const [currentCard, setCurrentCard] = useState(flashcard1)

  const handleCardSelection = () => {
    const randomCard = Math.floor(Math.random() * flashcards.length)
    setCurrentCard(flashcards[randomCard])
  }
  return (
    <>
      <h1>Multiplication Flash Cards</h1>
      <img src={currentCard} alt="flashcard" />
      <br />
      <button onClick={handleCardSelection}>New Card</button>
    </>
  )
}

export default App