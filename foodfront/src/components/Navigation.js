import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link } from 'react-router-dom'
import logo from './logo.png'
import {connect} from 'react-redux'




const Navigation = ({user}) => {
   
    
       return(
            <div>
            
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/" >
                <img
                    alt=""
                    src={logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                /> </Navbar.Brand>
                <Nav className="mr-auto">
                    
                        {/* <Nav.Link as={Link} to="/LoginForm" >Logout</Nav.Link> */}
                                                
                <Nav.Link as={Link} to="/LoginForm">Login</Nav.Link>
                         
                <Nav.Link as={Link} to="/SignInForm">Sign up!</Nav.Link>
                <Nav.Link as={Link} to="/Explore">Explore</Nav.Link>
                <Navbar.Text>
              
      Signed in as: {user.email}
    </Navbar.Text>
                </ Nav>
                
            </Navbar>
            
           </div>
       )               
}




const mapStateToProps = state => {
    return {
      user: state.auth.currentUser
    }
  }

export default connect(mapStateToProps)(Navigation) 