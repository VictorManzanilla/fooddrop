import React, { useEffect, useState } from 'react'
// import Login from './components/SignInForm';
import Home from './components/Home'
// import Google from './components/GoogleApi'
import {Switch, Route} from 'react-router-dom'
// import addUser from './components/LoginForm'
import './App.css'
import Restaurant from './components/Restaurant'
import Header from './Header'
import SignInForm from './components/SignInForm';
import LoginForm from './components/LoginForm';


function App() {

  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch('http://localhost:3000/api/v1/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
        // console.log(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3000/api/v1/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  console.log(user)

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
      default:
        return <SignInForm handleLogin={handleLogin}/>
    }
  }


  return (
    <>
    <div className="App">
        <Header handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
        <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
    </div>

    <div>
       <Switch>
        
       {/* <Route path='/Explore' component={Google} /> */}
        <Route path='/LoginForm' component={LoginForm} />
        {/* <Route path='/addUser' component={addUser} /> */}
        <Route path="/:restaurant_id" component={Restaurant}/>
        {/* put routing before the one below */}
        <Route  path='/' component={Home}/>
        

       </Switch>
       
    </div>
    </>
  );
}

export default App;
