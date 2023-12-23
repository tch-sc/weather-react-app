import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row align-items-start">
      <div className="col-2 current-weather-description">
        <ul>
          <li>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="weather-icon"
            />
          </li>
          <li className="text-capitalize text-nowrap text-center">
            {props.data.description}
          </li>
        </ul>
      </div>
      <div className="col meteorology">
        <ul>
          <li className="current-weather">
            <strong>{Math.round(props.data.temperature)}</strong>
            <span className="units">°C</span>
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li className="current-city">{props.data.city}</li>
          <li className="current-date">
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
    </div>
  );
}
