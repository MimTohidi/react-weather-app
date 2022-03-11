import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  console.log(props);
  const apiKey = "066e6846e09ae10d49fa3612a2af48a3";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
