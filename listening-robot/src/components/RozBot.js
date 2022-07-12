const RozBot = (props) => {

  const rozListening = (input) => {
    const watching = ["a", "l", "w", "a", "y", "s", " ", "w", "a", "t", "c", "h", "i", "n", "g", " ", "w", "o", "z", " "]
    return input.split("").map((v, index) => watching[index % watching.length]).join("")
  }

  return (
    <>
      <h3>Rozbot</h3>
      <h4>I'm... {rozListening(props.userInput)}</h4>
    </>
  )
}
export default RozBot