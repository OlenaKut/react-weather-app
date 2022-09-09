import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>London</h1>
      <ul>
        <li>Friday: 15:32</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Weather-icon"
          />
          <span className="temperature">6</span>
          <span className="unit">
            <a href="/">°C </a>|<a href="/">°F</a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 57%</li>
            <li>Wind: 5m/s</li>
            <li>Pressure: 1002mb</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
