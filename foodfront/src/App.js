import Home from './components/Home'
// import Google from './components/GoogleApi'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Restaurant from './components/Restaurant'
import SignInForm from './components/SignInForm';
import LoginForm from './components/LoginForm';


function App() {

  return (
   

    <div>
       <Switch>
        
       {/* <Route path='/Explore' component={Google} /> */}
        <Route path='/SignInForm' component={SignInForm} />
        <Route path='/LoginForm' component={LoginForm} />
        <Route path="/:restaurant_id" component={Restaurant}/>
        {/* put routing before the one below */}
        <Route  path='/' component={Home}/>
        

       </Switch>
       
    </div>
    
  );
}

export default App;
