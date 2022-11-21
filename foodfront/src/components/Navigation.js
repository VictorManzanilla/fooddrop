import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link } from 'react-router-dom'
import logo from './logo.png'
import {connect} from 'react-redux'
import {logoutSuccess} from '../actions/auth'




class Navigation extends React.Component {
    
    render() {
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
                    {
                        this.props.auth.id
                        ?
                        <Nav.Link as={Link} to="/LoginForm" onClick={this.props.logoutSuccess}>Logout</Nav.Link>
                         :                        
                <Nav.Link as={Link} to="/LoginForm">Login</Nav.Link>
                         }
                <Nav.Link as={Link} to="/SignInForm">Sign up!</Nav.Link>
                <Nav.Link as={Link} to="/Explore">Explore</Nav.Link>
                <Navbar.Text>
      Signed in as: {this.props.auth.username}
    </Navbar.Text>
                </ Nav>
                
            </Navbar>
            
           </div>
       )               
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logoutSuccess
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navigation) 