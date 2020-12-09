import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {Navbar,Nav} from 'react-bootstrap';
import './NavBar.css'


function NavBar() {
    return (
        <div>
    <Navbar bg="dark"  expand="lg">
    <Nav className="mr-auto">
      <Link className="lay p-2" to='/'>Home</Link>
      <Link className="lay p-2" to='/login'>Login</Link>
      <Link className="lay p-2" to='/signup'>Signup</Link>
      <Link className="lay p-2" to='/weather'>Weather</Link>
      <div className="align3">
      <Link className="lay p-2" to='/Logout'>Logout</Link>
      </div>
      {/* <Link className="lay p-2" to='/history'>History</Link> */}
      </Nav>
  </Navbar>
  
  </div>
  
  /*
    // return (
    //     <Navbar bg="light" expand="lg">
    //     <div className='horizontal' >
    //         <nav>
    //         <ul>
    //         <Link to= '/'> <li>Home</li> </Link>

    //         <div className='align'>
    //         <Link to='/login'> <li>Login</li> </Link>
    //         </div>
             
             
    //         <Link to='signup'> <li>Signup</li> </Link>
    //         <Link to='/forms'> <li>Forms</li> </Link>
    //         </ul>
    //         </nav>
            
    //         </div>
    //         </Navbar>*/
    )
    
}

export default (NavBar);
