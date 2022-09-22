import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function forecastDay() {
    let date = new Date(props.data.dt);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return `${day}`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <div>
      <div className="forecastDay">{forecastDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="forecastTemp">
        <span className="forecastTemp-max">{maxTemperature()}</span>
        <span className="forecastTemp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
