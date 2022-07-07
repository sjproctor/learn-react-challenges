import React, { useState } from 'react';

const Box = () => {
  const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
  const [currentColor, setCurrentColor] = useState("white")

  const colorSelector = () => {
    const randomNum = Math.floor(Math.random() * COLORS.length)
    setCurrentColor(COLORS[randomNum])
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
