import React, { useState, useEffect } from 'react'
import './Style.css'
import axios from 'axios'
import {Link} from 'react-router-dom'



function Home() {
    const [current, setCurrent] = useState({});
    const [location, setLocation] = useState({})

    useEffect(() => {
        axios.get("http://api.weatherstack.com/current?access_key=d367c872f3c7ce9e5555c705434afe61&query=Accra")
            .then((res) => {
                console.log(res.data);
                setCurrent(res.data.current);
                setLocation(res.data.location   );
            })
            .catch((error) => {
             console.log(error)
            })
    }, []);


    return (

        <div className='bgimage2'>
        <div className="container">
                <div className="right2">
                    <p><b> Hello, Welcome to Accra</b> </p>
                </div>
            <div className="user-weather">
                <div className="center">
                <h1>{location.country}</h1>
                <img src={current.weather_icons} alt=""/>
                <div className="row">
                    <div className="col-md-2">
                    <h2>{current.humidity}</h2>
                    </div> <br></br>
                            <div className="col-md-2">
                            <h2>{current.observation_time}</h2>
                            </div>
                            <div className="col-md-2">
                            <h2>{current.temperature} &#176; </h2>
                            </div>
                            <div className="col-md-2">
                            <h2>{current.weather_descriptions}</h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='right' >
         <Link to ='/Login' > <button>Login Here for  more features of the app!</button>
          <h1> .</h1> </Link> 
       
      </div>
        </div>
    )
}

export default Home
