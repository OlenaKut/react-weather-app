import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponseForecast(response) {
    console.log(response.data.daily);
  }

  let apiKeyFor = "82914429dbcac50d79e072b0c73a8cb3";
  let longitude = props.coordinates.lon;
  let lattitude = props.coordinates.lat;
  let apiUrlFor = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKeyFor}&units=metric`;
  axios.get(apiUrlFor).then(handleResponseForecast);
  return (
    <div className="WeatherForecast">
      <div className="rov">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="01d" size={34} />
          <div className="forecastTemp">
            <span className="forecastTemp-max">19°</span>
            <span className="forecastTemp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
