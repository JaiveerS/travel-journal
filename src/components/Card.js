import React from "react"

export default function Card(prop){
    console.log(prop.card.imageUrl)
    return(
        <div className="card">
            <img className="card--img" src={prop.card.imageUrl}></img>
            <div className="card--info">
                <div className="card--cords">
                <i className="material-icons">add_location</i>
                    <h2 className="card--location">{prop.card.location}</h2>
                    <a className="card--url"href={prop.card.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{prop.card.title}</h1>
                <p className="card--dates">{prop.card.startDate}-{prop.card.endDate}</p>
                <p className="card--desc">{prop.card.description}</p>
            </div>
        </div>
    )
}