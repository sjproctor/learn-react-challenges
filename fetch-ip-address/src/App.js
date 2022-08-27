import React, { useState } from "react"

const App = () => {
  const [ip, setIp] = useState("")
  const getIP = () => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((payload) => setIp(payload))
      .catch((error) => console.log(error))
  }

  console.log(ip)
  return (
    <>
      <h1>Find Your IP Address</h1>
      <button onClick={getIP}>Get Your IP Info</button>
      <p>IP: {ip.ip}</p>
      <p>City: {ip.city}</p>
      <p>State: {ip.region}</p>
    </>
  )
}

export default App
