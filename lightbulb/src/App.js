import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState({
    switch: "off",
    light: "white"
  })
  const [switchCount, setSwitchCount] = useState([])

  const flipSwitch = () => {
    if (lightSwitchStatus.switch === "off") {
      setLightSwitchStatus({
        switch: "on",
        light: "yellow"
      })
    } else {
      setLightSwitchStatus({
        switch: "off",
        light: "white"
      })
    }
  }

  const addSwitch = () => {
    setSwitchCount(
      switchCount.concat(
        <LightSwitch
          lightSwitchStatus={lightSwitchStatus}
          flipSwitch={flipSwitch}
        />
      )
    )
  }

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <div className="buttons">
        <button onClick={addSwitch}>Add Switch</button>
        <button>Remove Switch</button>
      </div>
      <div className="lightbulbs">
        {switchCount.map((oneSwitch, index) => {
          return <div key={index}>{oneSwitch}</div>
        })}
      </div>
    </>
  )
}

export default App
