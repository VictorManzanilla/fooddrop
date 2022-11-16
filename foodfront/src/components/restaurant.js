import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './restaurant.css'
import {connect} from 'react-redux'



class Restaurant extends React.Component {
 
  render(){
      
       console.log(this.props.restaurant, 'FNJAWNVLAJNWVJA')
      const {name} = this.props.restaurant || {}
      
      const {cuisine} = this.props.restaurant || {}
      const {location} = this.props.restaurant || {}
      const {opening_hours} = this.props.restaurant || {}

              return(     
              <div className="row w-25 p-3">
              <div className="card mb-3">
            {/* <img className="card-img-top" src={props.restaurant} alt="Card "></img> */}
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Cuisine: {cuisine}<br/> Location: {location}</p>
              <p className="card-text"><small className="text-muted">Operating Hours: {opening_hours}</small></p>
            </div>
          </div>
          </div>
              
          )
      
 
  }
}

const mapStateToProps = (state, props) => {
  // console.log(state.restaurants, 'HEEEEEEE')
    // const restaurantSingle = Object.keys(state.restaurants)
  // console.log(restaurantSingle)

   let id = props.match.params.restaurant_id
   const place = parseInt(id)
  const data = state.restaurants.find(rest => {
    // console.log(rest.id)
   return rest.id === place
  })
  // console.log(data)
  return {
    restaurant: data
  }
  
}


export default connect(mapStateToProps)(Restaurant)