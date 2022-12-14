import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      coords: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      time: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }
  function search() {
    const apiKey = "203fa770242fcd2b9555d832a88ea567";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control "
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
