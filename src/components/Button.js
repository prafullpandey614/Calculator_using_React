import React from 'react'
import "./Button.css"
export const Button = (props) => {
  return (
    <div  onClick={() =>{props.handleClick(props.symbol)}} className="button-wrapper" style={{ backgroundColor: props.color }}>
      {props.symbol}
    </div>
  )
}
