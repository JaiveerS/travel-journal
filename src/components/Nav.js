import React from "react"
import icon from "../images/earth.png"

export default function Nav(){
    return(
        <div className="nav">
            <img className="nav--image" src={icon} alt="globe"></img>
            <h1 className="nav--title">my travel journal</h1>
        </div>
    )
}