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
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-info" />
          </div>
        </div>
      </form>
      <h1>Oslo</h1>
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
          6°C
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
