import React from "react";
import ShowDate from "./ShowDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1 className="col-7">{props.data.city}</h1>
      <ul>
        <li>
          <ShowDate date={props.data.time} />
        </li>
        <li className="text-capitalize description">
          {props.data.description}
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={52}
          />
          <span className="temperature">{props.data.temperature}</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:
              <span className="properties"> {props.data.humidity}%</span>
            </li>
            <li>
              Wind:
              <span className="properties"> {props.data.wind}m/s</span>
            </li>
            <li>
              Pressure:
              <span className="properties"> {props.data.pressure}mb</span>
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
