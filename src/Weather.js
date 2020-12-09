import React, { useState } from "react";
import axios from "axios";
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v1 as uuid} from 'uuid';


function Forms() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleCountry = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };

  const handleReset = () => {
    document.querySelectorAll('input');
    this.setState({itemvalues:[{}]
    });
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const handleWeather = (e) => {
    e.preventDefault();
    if (country && city)
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=d367c872f3c7ce9e5555c705434afe61&query=${country},${city}`
        )
        .then((res) => {
        console.log(res)
        setWeather(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
  };

  
  return (
    <div className="b_image">
      <form>
        <div className= 'display2'>
          <div className="design">
        <input type="text" placeholder="Country"  size="30" height="70" onChange={handleCountry} />
        <input type="text" placeholder="city" size="30" height= "70" onChange={handleCity} /><br/>
        <button onClick={handleWeather}> Search</button>
        <button onClick={handleReset}>Reset</button>
        </div>
        </div>
      </form>
    
      {weather &&(
        < div className= 'display'>
        <h1>{weather.location.country}</h1>
        <h2> Humidity is: {weather.current.humidity}</h2>
        <h2>{weather.current.observation_time}</h2>
        <img src={weather.current.weather_icons} alt=""  width="200" height="200"/>
        <h2> Temperature is:{weather.current.temperature}  &#176; </h2>
         <h2>{weather.current.weather_descriptions} </h2>
        <p>{`hi, this is the weather in ${city} in ${country}`}</p>
        </div>
      )}

      {/* <p>
        {" "}
        hi I'm from {city}, in {country}
      </p> */}
      
     
    </div>
  );
}
export default Forms;