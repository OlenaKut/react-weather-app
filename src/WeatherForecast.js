import React, { useState } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponseForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="rov">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
            
          </div>
        </div>
      </div>
    );
  } else {
    let apiKeyFor = "a43564c91a6c605aeb564c9ed02e3858";
    let longitude = props.coordinates.lon;
    let lattitude = props.coordinates.lat;
    let apiUrlFor = `https://api.openweathermap.org/data/3.0/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKeyFor}&units=metric`;
    axios.get(apiUrlFor).then(handleResponseForecast);

    return null;
  }
}
