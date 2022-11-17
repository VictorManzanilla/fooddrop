import React, {useState} from 'react'
import {signup} from '../actions/auth'
import {connect} from 'react-redux'

function SignInForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       props.signup(email, password, confirmPassword)
    }
    ///////something wrong with cors//////////////
    
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input value={email} onChange={handleEmailChange} type="text" placeholder="username"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" placeholder="Confirm Password"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default connect(null, {signup})(SignInForm)

// fetch('http://localhost:3000/api/v1/users', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         email,
//         password,
//         confirmPassword
//     })
// })
// .then(resp => resp.json())
// .then(data => {
//    console.log(data)
// })
// setEmail("")
// setPassword("")