import React from "react";
import ShowDate from "./ShowDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <ShowDate date={props.data.time} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt="Weather-icon" />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">
            <a href="/">°C </a>|<a href="/">°F</a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}m/s</li>
            <li>Pressure: {props.data.pressure}mb</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}