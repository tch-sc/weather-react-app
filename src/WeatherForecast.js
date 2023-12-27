import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              width={65}
            />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-max">20°</span>{" "}
            <span className="WeatherForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
