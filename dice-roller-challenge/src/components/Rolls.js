const Rolls = (props) => {
  return (
    <>
      <div className="dice-log">
        <h3>Roll Log</h3>
        {props.lastRoll.map((roll, index) => {
          return <p key={index}>{roll}</p>
        })}
      </div>
    </>
  )
}

export default Rolls