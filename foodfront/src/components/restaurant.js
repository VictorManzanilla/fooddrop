import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './restaurant.css'
import {connect} from 'react-redux'
import restaurants from '../reducers/restaurants'



const Restaurant = ({restaurant}) => {
 
 console.log(restaurant, 'HOLAAAAAAA')

    return (
      
     
      <div className="row w-25 p-3">
        <h1>heloo</h1>
      <div className="card mb-3">
      {/* <img className="card-img-top" src={props.restaurant} alt="Card "></img> */}
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <p className="card-text">Cuisine: {restaurant.cuisine}<br/> Location: {restaurant.address}</p>
        <p className="card-text"><small className="text-muted">Operating Hours: {restaurant.opening_hours}</small></p>
      </div>
    </div>
    </div>

      
    )
}

const mapStateToProps = (state, props) => {
  // console.log(state.restaurants, 'HEEEEEEE')
  // let restaurantSingle = Object.keys(state.restaurants)
  // console.log(restaurantSingle)

  let id = props.match.params.restaurant_id
  console.log(id)
  return {
    restaurant: state.restaurants.find(rest => {
      console.log(restaurants)
      return rest.id === id})
  }
}


export default connect(mapStateToProps)(Restaurant)