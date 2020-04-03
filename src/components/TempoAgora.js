import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


function TempoAgora() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false); 

  let getWeather = async (lati, longi) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lati, 
        lon: longi,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])  

  if (location === false) {
    return (
      <Fragment>
        Você precisa habilitar a localização no browser o/
      </Fragment>
    )
  } else if (weather === false) {
    return (
      <Fragment>
        Carregando o clima...
      </Fragment>
    )
  } else {
    return (
      
      <Fragment>                      
        <div className="card-panel hoverable">
          <h5>Clima no CEFET-NF:</h5>
          <hr/>
          <p className="c">{weather['weather'][0]['description']}</p>
          <hr/>
          <ul>
            <li>Temperatura atual:<h4 className="mTemp card-panel hoverable"> {weather['main']['temp']}° </h4></li>                       
            <li>Pressão: {weather['main']['pressure']} hpa</li>
            <li>Humidade: {weather['main']['humidity']}%</li>
          </ul>
        </div>        
      </Fragment>
    );
  }
}

export default TempoAgora;