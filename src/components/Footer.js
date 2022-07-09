import React from 'react'

export const Footer = () => {
    let style = {
        height : "40px",
        padding: "0.2rem",
        backgroundColor:"black",
        color : "white"
    }
  return (
    <div style={style} className="text-center">
        <p>
        &copy; This Website is Created by Prafull Kumar Pandey
        </p>
     
    </div>
  )
}
