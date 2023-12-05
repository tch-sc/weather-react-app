import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Vancouver",
    date: "Saturday 11:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: 15,
    humidity: 80,
    wind: 5,
  };

  return (
    <div className="Weather">
      <div className="overview">
        <div className="d-flex justify-content-center">
          <form>
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
                <img src={weatherData.imgUrl} alt="sunny cloud" />
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col meteorology">
            <ul>
              <li className="current-weather">
                <strong>{weatherData.temperature}</strong>
                <span className="units">°C</span>
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="current-city">{weatherData.city}</li>
              <li className="current-date">{weatherData.date}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
