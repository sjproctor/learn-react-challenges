import React from "react"

const LightSwitch = (props) => {
  return (
    <>
      <div
        className="lightbulb"
        style={{ backgroundColor: props.lightSwitchStatus.light }}
        onClick={props.flipSwitch}
      >
        {props.lightSwitchStatus.switch}
      </div>
    </>
  )
}

export default LightSwitch
