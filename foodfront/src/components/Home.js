import React from 'react'
import Nav from './Navigation'
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'
import Restaurant from './restaurant'
import {fetchRestaurantsSuccess} from '../actions/restaurants'
import Chatbot from "react-chatbot-kit";

import config from '../config'
import MessageParser from '../MessageParser'
import ActionProvider from '../ActionProvider'



class Home extends React.Component {
 
componentDidMount(){
 fetch('http://localhost:3000/api/v1/restaurants')
 .then(resp => resp.json())
 .then(data => {
    console.log(data)
     this.props.fetchRestaurantsSuccess(data)
 })
}

renderRestaurants = () => {
    return this.props.restaurants.map(function(rest, index) {
        return(
        <Restaurant key={index} restaurant={rest} />
        )
})
}

    render(){
        return(
            <div >
                <Nav/>
                <Container>
                <Row>
                    <Col xs={6} md={4}><Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        /></Col>
                        <Col xs={12} md={8}>{this.renderRestaurants()}</Col>
                </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        auth: state.auth
    }
}

const mapDispatchToProps = {
    fetchRestaurantsSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)