import React, {useState} from 'react'
import "./Style.css"
import {Link} from 'react-router-dom'

function Login() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[LoggedIn,setLoggedIn]= useState(false);

    const handleEmailInput =(event) =>{
        setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (email ==="bakotey001@st.ug.edu.gh" && password === "10687046"){
            setLoggedIn(true)
        }
    }

    function handleLogout(event) {
        event.preventDefault();
        setLoggedIn(false)
    }
    return (
        <div>
            {
                LoggedIn?
                <>
                
                     <Link to='/Weather'>Weather <p>Welcome, to my WeatherApp</p>
                      <button onClick={handleLogout}>Logout</button></Link>
              )
                </>

                 :(
                <>
                 <div className="bg_image" >
                 <div className="center">
                    <div className="box">

                 <form>
                   <h2 style={{color:'red'}}>Have an account already?</h2>
                   <h3 style={{color:'red'}}>Sign In</h3>
                     <input type='email' Placeholder="Enter your email" id="email" className="email" onChange={handleEmailInput}/><br/>
                      <input type="password" Placeholder="Enter password" id="password" className="password"  onChange={(event) => handlePasswordInput(event)}/><br/>
                     <button style={{color:'blueviolet'}} onClick={handleLogin}>Login</button>
                 <p>Don't have an account?</p>
                <Link to ='/Signup' style={{backgroundcolor:'black'}}><button>Signup</button></Link> 
                <a href='./Signup'>Signup</a> 
            </form>
        
            </div>
            </div>
        </div>
        </>
       )}
        </div>
        
    )
}

export default Login

