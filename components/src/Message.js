import React from "react"

export function Message(props) {
  //   let classes =
  //     props.name === "bob"
  //       ? "bg-warning p-2"
  //       : "bg-success text-white text-center p-2"

  let classes
  switch (props.name) {
    case "bob":
      classes = "bg-warning p-2"
      break
    case "Dora":
      classes = "bg-secondary text-white text-center p-2"
      break
    default:
      classes = "bg-success text-white text-center p-2"
  }

  return (
    <h4 className={classes}>
      {props.greeting}, {props.name}
    </h4>
  )
}
