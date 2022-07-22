import React, { useState } from 'react';

const Box = () => {
  const [currentColor, setCurrentColor] = useState("white")
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"]

  const colorSelector = () => {
    const randomNum = Math.floor(Math.random() * colors.length)
    setCurrentColor(colors[randomNum])
  }

  return (
    <div 
      className="color-box" 
      onClick={colorSelector} 
      style={{backgroundColor: currentColor}}
    />
  );
}

export default Box;
