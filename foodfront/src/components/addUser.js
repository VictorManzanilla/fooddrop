import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './addUser.css'
import {  Row, Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import {newUser} from '../actions/restaurants'


class addUser extends Component {

    state = {
        first_name: '',
        last_name: '',
        age: '',
        email: '',
        username: '',
        password: ''
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        
        fetch('http://localhost:3000/api/v1/users', reqObj)
        .then(resp => resp.json())
        .then(newUser => {
            console.log(newUser)
            this.props.history.push('/Home')
            this.props.newUser(newUser)
            //e.target.reset()
        })
        
    }
   
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
     const { first_name, last_name, age, email, username, password} = this.state

        return(
            <div>
                <Form onSubmit={this.handleSubmit} className="formcss">
                    <Row>
                        <label> First Name:</label>
                        <Form.Control placeholder="First name" name='first_name'  value={first_name} onChange={this.handleChange}/>
                        <label> Last Name:</label>
                        <Form.Control placeholder="Last name" name='last_name' value={last_name} onChange={this.handleChange}/>
                        <label> Age:</label>
                        <Form.Control placeholder="age" name='age'  value={age} onChange={this.handleChange}/>
                        <label> Email:</label>
                        <Form.Control placeholder="email" name='email' value={email} onChange={this.handleChange}/>
                        <label> Username:</label>
                        <Form.Control placeholder="username" name='username' value={username} onChange={this.handleChange}/>
                        <label> Password:</label>
                        <Form.Control placeholder="password" name='password' value={password} type="password" onChange={this.handleChange}/>
                    </Row>
                    <Row>
                    <Button type="submit" className="mt-3 mb-3">Submit</Button>
                    </Row>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    restaurants: state.restaurants
}
}

const mapDispatchToProps = {
    newUser
}



export default connect (mapStateToProps, mapDispatchToProps)(addUser)