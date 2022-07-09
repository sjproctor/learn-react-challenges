

const Dice = (props) => {
  return (
    <>
      { props.currentDice &&
        <img 
          src={props.currentDice}
          alt={`dice showing ${props.currentDice}`}
          onClick={props.rollingTheDice}
          className="dice-image"
        />
      }
      { !props.currentDice &&
        <div 
          className="dice-square" 
          onClick={props.rollingTheDice}
        />
      }
    </>
  )
}

export default Dice