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
    let apiKeyFor = "203fa770242fcd2b9555d832a88ea567";
    let longitude = props.coordinates.lon;
    let lattitude = props.coordinates.lat;
    let apiUrlFor = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKeyFor}&units=metric`;
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
