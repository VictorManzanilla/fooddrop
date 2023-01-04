import React, {useState, useEffect} from 'react'
import Nav from './Navigation'
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Chatbot from "react-chatbot-kit";

import config from '../config'
import MessageParser from '../MessageParser'
import ActionProvider from '../ActionProvider'


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


