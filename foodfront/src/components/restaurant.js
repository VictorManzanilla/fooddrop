import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './restaurant.css'
import {connect} from 'react-redux'



const Restaurant = (props) => {
 
console.log(props.restaurant, 'whyyyyyyy')

    return (
      
     
      <div className="row w-25 p-3">
        <h1>heloo</h1>
      <div className="card mb-3">
      {/* <img className="card-img-top" src={props.restaurant} alt="Card "></img> */}
      <div className="card-body">
        <h5 className="card-title">{props.restaurant.name}</h5>
        <p className="card-text">Cuisine: {props.restaurant}<br/> Location: {props.restaurant}</p>
        <p className="card-text"><small className="text-muted">Operating Hours: {props.restaurant}</small></p>
      </div>
    </div>
    </div>

      
    )
}

const mapStateToProps = (state, props) => {
  // console.log(state.restaurants, 'HEEEEEEE')
   const restaurantSingle = Object.keys(state.restaurants)
  // console.log(restaurantSingle)

  // let id = props.match.params.restaurant_id
  // console.log(id, 'heloo')
  return {
    restaurant: restaurantSingle
     // console.log(state.restaurants, 'huuuuuuuu')
      
  }
}


export default connect(mapStateToProps)(Restaurant)