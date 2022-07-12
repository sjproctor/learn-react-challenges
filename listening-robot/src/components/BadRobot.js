const BadRobot = (props) => {

  const badListening = (userInput) => {
    const blah = ["B", "L", "A", "H", " "]
    return userInput.split("").map((v, index) => blah[index % blah.length]).join("")
  }

  return (
    <>
      <h3>Bad Robot</h3>
      <h4>I hear you saying {badListening(props.userInput)}. Is that correct?</h4>
    </>
  )
}

export default BadRobot