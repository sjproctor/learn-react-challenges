import React, { useState } from 'react';
import Box from './components/Box';
import './App.css';

const App = () => {
  
  const [boxes, setBoxes] = useState([])

  const addColorbox = () => {
    setBoxes(boxes.concat(<Box />))
  }

  const removeColorbox = () => {
    setBoxes(boxes.slice(0, boxes.length - 1))
  }

  return (
    <>
      <h1>Color Box Challenge</h1>
      <button onClick={addColorbox}>Add a Colorbox</button>
      <button onClick={removeColorbox}>Remove a Colorbox</button>
      <div className="boxes">
        {boxes.map((box, index) => {
          return <div key={index}>{box}</div>
        })}
    </div>
    </>
  );
}

export default App;
