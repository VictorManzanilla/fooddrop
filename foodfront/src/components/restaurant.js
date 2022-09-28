import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './restaurant.css'



const Restaurant = (props) => {

    return (
      <div className="row w-25 p-3">
      <div className="card mb-3">
      <img className="card-img-top" src={props.restaurant.photo} alt="Card "></img>
      <div className="card-body">
        <h5 className="card-title">{props.restaurant.name}</h5>
        <p className="card-text">Cuisine: {props.restaurant.cuisine}<br/> Location: {props.restaurant.address}</p>
        <p className="card-text"><small className="text-muted">Operating Hours: {props.restaurant.opening_hours}</small></p>
      </div>
    </div>
    </div>

      
    )
}

export default Restaurant