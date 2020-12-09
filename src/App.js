import React from 'react'
import Home from './Home'
import Login from './Login'
import Weather from './Weather'
import Signup from './Signup'
import History from './History'
import NavBar from './NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>

    <Route exact path='/' component={Home}/>
    <Route exact path='/Weather' component={Weather}/>
    <Route exact path='/History' component={History}/>
    <Route exact path='/Login' component={Login}/>
    <Route exact path='/Signup' component={Signup}/>
    
    </Switch>
    </Router>
    </div>
  );
}

export default App;


