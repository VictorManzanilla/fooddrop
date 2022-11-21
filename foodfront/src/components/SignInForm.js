import React, {Component} from 'react'
import {signup} from '../actions/auth'
import {connect} from 'react-redux'





class SignInForm extends Component {
    state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
  
    handleOnChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    handleOnSubmit = (e) => {
      e.preventDefault();
      this.props.signup(this.state, this.props.history);
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <label>Email</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
              type="text"
            />
            <br />
            <label>Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
              type="text"
            />
            <br />
            <label>Confirm Password</label>
            <input
              name="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleOnChange}
              type="text"
            />
            <br />
            <button type="submit">Signup</button>
          </form>
        </div>
      );
    }
  }
  
  export default connect(null, { signup })(SignInForm);






// function SignInForm() {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const dispatch = useDispatch();


//     const handleEmailChange = (e) => {
//         setEmail(e.target.value)
//     }

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value)
//     }
//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // console.log(props)
//        signup(email, password, confirmPassword)
//     }
//     ///////something wrong with cors//////////////
    
//     const formDivStyle = {
//         margin: "auto",
//         padding: "20px",
//         width: "80%"
//     }
    
//     return(
//         <div style={formDivStyle}>
//             <h1>Sign Up</h1>
//             <form className="ui form" onSubmit={handleSubmit}>
//                 <div className="field">
//                     <label>Email</label>
//                     <input value={email} onChange={handleEmailChange} type="email" placeholder="Email"/>
//                 </div>
//                 <div className="field">
//                     <label>Password</label>
//                     <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
//                 </div>
//                 <div className="field">
//                     <label>Confirm Password</label>
//                     <input value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" placeholder="Confirm Password"/>
//                 </div>
//                 <button className="ui button" type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default connect(null, {signup})(SignInForm)
