import React, { useState } from 'react';

const Box = () => {
  const [currentColor, setCurrentColor] = useState("white")

  const colorSelector = () => {
    let colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    let randomNum = Math.floor(Math.random()* colors.length)
    setCurrentColor(colors[randomNum])
  }

  return (
    <>
      <div className="color-box" onClick={colorSelector} style={{backgroundColor: currentColor}}>
      </div>
    </>
  );
}

export default Box;
