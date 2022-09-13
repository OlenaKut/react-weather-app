import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      time: "Friday 15:32",
      city: response.data.name,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control "
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.time}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt="Weather-icon" />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">
              <a href="/">°C </a>|<a href="/">°F</a>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/s</li>
              <li>Pressure: {weatherData.pressure}mb</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "82914429dbcac50d79e072b0c73a8cb3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loader...";
}
