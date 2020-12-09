import React from 'react'
import Home2 from './Home2'
import Login from './Login'
import Signup from './Signup'
import NavBar from './NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Switch>

    <Route exact path='/' component={Home2}/>
    <Route exact path='/Login' component={Login}/>
    <Route exact path='/Signup' component={Signup}/>
    <NavBar/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;


