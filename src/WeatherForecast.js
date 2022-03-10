import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast ">
      <div className="container ">
        <div className="row ">
          <div className="col mt-3 mb-4">
            <div className="WeatherForecast-day mb-2">Thursday</div>
            <WeatherIcon code="01d" color="#e3e3e3" />
            <div className="WeatherForecast-temp ">
              <span className="WeatherForecast-temp-max">18°</span>
              <span className="WeatherForecast-temp-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
