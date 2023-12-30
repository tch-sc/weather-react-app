import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return Math.round(props.forecastData.temp.max);
  }

  function minTemperature() {
    return Math.round(props.forecastData.temp.min);
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();

    let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return dayName[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={`https://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`}
          alt={props.forecastData.weather[0].description}
          width={65}
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-max">{maxTemperature()}°</span>{" "}
        <span className="WeatherForecast-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
