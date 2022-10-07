import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';



import './login.css'
import {connect} from 'react-redux'
import {loginSuccess} from '../actions/auth'
import {currentUser} from '../actions/auth'


class Login extends React.Component{

    state = {
        username: '',
        password: '',
        error: null
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
          }

          fetch('http://localhost:3000/api/v1/auth', reqObj)
          .then(resp => resp.json())
          .then(data => {
            // console.log(data)
            if (data.error) {
                this.setState({
                  error: data.error
                })
              } else {
                this.props.loginSuccess(data)
                this.props.history.push('/')
        
                
              }
          })
    }

    componentDidMount(){
        const token = localStorage.getItem('myAppToken') 
        if(!token){
          this.props.history.push('/Login')
        } else {
          this.fetchUser()
        }
      }
    

    fetchUser= async () => {
        const token = localStorage.getItem('myAppToken') 
        const reqObj = {
          method: 'GET',
          headers: {
          'Authorization': `Bearer ${token}`
          }
        }
        const res = await fetch('http://localhost:3001/api/v1/current_user', reqObj);
        const user = await res.json();
        if(user.error) {
          this.props.history.push('/Login')
        } else {
            this.props.currentUser(user)
            //need to store the user (data) in store state
        }
    }


    render(){
    return(
            <div>
                { this.state.error && <h4 style={{ color: 'red'}}>{this.state.error}</h4> }
                <Container>     
                    <Form onSubmit={this.handleSubmit} className="formcss">
                        <Row>
                        <Col>
                        <Form.Group controlId="username">
                            <Form.Label> Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" name={"username"}
                            onChange={this.handleInputChange} value={this.state.username}/>
                        </Form.Group>
                        </Col>
                    
                        <Col>
                        <Form.Group controlId="password">
                            <Form.Label> Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name={'password'}
                            onChange={this.handleInputChange} value={this.state.password}/>
                        </Form.Group>
                        
                        </Col>
                        </Row>
                        
                        <Button variant="primary" type="submit" className="mt-3 mb-3"> Login </Button>
                    
                    </Form>
                </Container>

                
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
    loginSuccess,
    currentUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)