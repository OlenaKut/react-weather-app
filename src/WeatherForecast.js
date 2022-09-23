import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponseForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKeyFor = "a43564c91a6c605aeb564c9ed02e3858";
    let longitude = props.coordinates.lon;
    let lattitude = props.coordinates.lat;
    let apiUrlFor = `https://api.openweathermap.org/data/3.0/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKeyFor}&units=metric`;
    axios.get(apiUrlFor).then(handleResponseForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
