import React, { useState, useEffect } from "react"
import "./App.css"
// import nasaData from "./mockNasa.js"

const App = () => {
  const [nasa, setNasa] = useState(null)
  const [pic, setPic] = useState(null)

  useEffect(() => {
    let apiKey = process.env.REACT_APP_MY_NASA_API_KEY
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1500&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((payload) => {
        setNasa(payload.photos)
        setPic(payload.photos[0].img_src)
      })
      .catch((error) => console.log(error))
  }, [])

  const getPic = () => {
    if (nasa) {
      let randomNum = Math.floor(Math.random() * nasa.length)
      setPic(nasa[randomNum].img_src)
    }
  }

  return (
    <>
      <h1>Mars Rover Pictures</h1>
      <button onClick={getPic}>Click here</button>
      <br />
      {nasa && <img src={pic} alt="random Mars Rover" />}
    </>
  )
}

export default App
