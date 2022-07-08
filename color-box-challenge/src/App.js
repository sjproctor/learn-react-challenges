import React, { useState } from 'react';
import Box from './components/Box';
import './App.css';

const App = () => {
  
  const [boxes, setBoxes] = useState([])

  const addColorBox = () => {
    setBoxes(boxes.concat(<Box />))
  }

  const removeColorBox = () => {
    setBoxes(boxes.slice(0, boxes.length - 1))
  }

  return (
    <>
      <h1>Color Box Challenge</h1>
      <button onClick={addColorBox}>Add a Color Box</button>
      <button onClick={removeColorBox}>Remove a Color Box</button>
      <div className="color-boxes">
        {boxes.map((box, index) => {
          return (
            <div key={index}>
              {box}
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
