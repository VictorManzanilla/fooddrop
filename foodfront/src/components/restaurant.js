import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './restaurant.css'



const Restaurant = (props) => {

    return (
      <div className="row w-25 p-3">
      <div class="card mb-3">
      <img class="card-img-top" src={props.restaurant.photo} alt="Card "></img>
      <div class="card-body">
        <h5 class="card-title">{props.restaurant.name}</h5>
        <p class="card-text">Cuisine: {props.restaurant.cuisine}<br/> Location: {props.restaurant.address}</p>
        <p class="card-text"><small class="text-muted">Operating Hours: {props.restaurant.opening_hours}</small></p>
      </div>
    </div>
    </div>

      
    )
}

export default Restaurant