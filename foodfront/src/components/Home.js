import React, {useState, useEffect} from 'react'
import Nav from './Navigation'
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import {connect} from 'react-redux'
// import {fetchRestaurantsSuccess} from '../actions/restaurants'
import Chatbot from "react-chatbot-kit";

import config from '../config'
import MessageParser from '../MessageParser'
import ActionProvider from '../ActionProvider'


import Restaurant from './Restaurant'
import RestaurantCard from './RestaurantCard'



const Home = () => {
    const [restaurants, setRestaurants] = useState([])
  
    const fetchData = () => {
      fetch('http://localhost:3000/api/v1/restaurants')
        .then(response => response.json())
        .then(data => {
          console.log(data)
            setRestaurants(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

   
  
    return (
      
        <>
            <Nav/>
            <Container>
                    <Row>
                        <Col xs={6} md={4}><Chatbot
                            config={config}
                            messageParser={MessageParser}
                            actionProvider={ActionProvider}
                            /></Col>
                            <Row xs={2} md={4} lg={6}>
                              {restaurants.map(restaurant => {
                                return(
                                <Col key={restaurant.id}>
                                  <RestaurantCard rest={restaurant}/>
                                  
                                </Col>
                                )
                                })}
                               

                            </Row>
                         

                    </Row>
             </Container>
             
             
        </>
        
      
    )
  }
  
  export default Home


// class Home extends React.Component {


//     // componentDidMount(){
//     //     fetch('http://localhost:3000/api/v1/notes')
//     //     .then(resp => resp.json())
//     //     .then(notes => {
//     //       this.props.fetchNotesSuccess(notes)
//     //     })
//     //     }
        
    
//     //      notesArr = () => {
//     //         return this.props.notes.map(note => {
//     //           return  <UserNote note={note}  key={note.id}/>
//     //         })     
//     //       }

//         componentDidMount() {
//             fetch('http://localhost:3000/api/v1/restaurants')
//             .then(res => res.json())
//             .then(restaurants => {
//                 console.log(restaurants)
//             })
//         }
        
//          restaurantList = () => {
//             return this.props.restaurants.map(restaurant => {
//              return  <Card style={{ width: '18rem' }} key={restaurant.id}>
//              <Card.Img variant="top" src="holder.js/100px180" />
//              <Card.Body>
//              <Card.Title>{restaurant.name}</Card.Title>
//              <Card.Text>
//              {restaurant.address}
//              {restaurant.opening_hours}
//              {restaurant.cuisine}
//              </Card.Text>
//              <Link to={'/' + restaurant.id}>
//              <Button variant="primary">Go somewhere</Button>
//              </Link>
//              </Card.Body>
//          </Card>
//            })     
//          }
    

 
    
//     render(){
      
    
        
//      return(
//         <>
//             <Nav/>
//             <Container>
//                     <Row>
//                         <Col xs={6} md={4}><Chatbot
//                             config={config}
//                             messageParser={MessageParser}
//                             actionProvider={ActionProvider}
//                             /></Col>
//                             <Col> {this.restaurantList}</Col>

//                     </Row>
//              </Container>
//              <Restaurant rest = {this.restaurantList} />
//         </>
//      )   
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         //state from the store and restaurants is the name of the 
//         //object in reducers
        
//         auth: state.auth
//     }
    
// }




// export default connect(mapStateToProps)(Home)