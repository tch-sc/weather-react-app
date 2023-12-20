import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="overview">
          <div className="d-flex justify-content-center">
            <form className="city-search">
              <input
                autoFocus="on"
                placeholder="Enter City Name"
                size="30"
                type="text"
              />
              <input type="submit" value="Search" className="current-btn" />
              <input type="submit" value="Current" className="current-btn" />
            </form>
          </div>
          <div className="row align-items-start">
            <div className="col-2 current-weather-description">
              <ul>
                <li>
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="weather-icon"
                  />
                </li>
                <li className="text-capitalize text-nowrap text-center">
                  {weatherData.description}
                </li>
              </ul>
            </div>
            <div className="col meteorology">
              <ul>
                <li className="current-weather">
                  <strong>{Math.round(weatherData.temperature)}</strong>
                  <span className="units">°C</span>
                </li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind Speed: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="current-city">{weatherData.city}</li>
                <li className="current-date">
                  <FormattedDate date={weatherData.date} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
