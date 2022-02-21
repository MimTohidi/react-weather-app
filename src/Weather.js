import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(respoonse) {
    setWeatherData({
      ready: true,
      temperature: respoonse.data.main.temp,
      wind: respoonse.data.wind.speed,
      city: respoonse.data.name,
      humidity: respoonse.data.main.humidity,
      description: respoonse.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: "Thursday, 17:40",
      country: respoonse.data.sys.country,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="hero">
            <div className="row d-flex justify-content-between mb-5">
              <div className="col-6 description ">
                <form className="mb-4">
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="text"
                        placeholder="Enter a city..."
                        className="form-control search-input"
                      />
                    </div>
                    <div className="col-4 ">
                      <input
                        type="submit"
                        value="🔍"
                        className="btn search-btn"
                      />
                    </div>
                  </div>
                </form>
                <h1>
                  {weatherData.city}, {weatherData.country}
                </h1>
                <hr />
                <p className="text-capitalize">
                  {weatherData.date}
                  <br />
                  {weatherData.description}.
                </p>
              </div>
              <div className="col-3 weather-temp">
                <div className="row">
                  <div className="col-4 ">
                    <img
                      src={weatherData.icon}
                      alt={weatherData.description}
                      className="weather-icon"
                    />
                  </div>
                  <div className="col-7">
                    <span className="temp">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="unit">°C</span>
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                  <span className="humidity ">
                    {" "}
                    H: {weatherData.humidity} %
                  </span>
                  <span className="wind">
                    W: {Math.round(weatherData.wind)}km/h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "066e6846e09ae10d49fa3612a2af48a3";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
