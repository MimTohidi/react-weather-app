import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(respoonse) {
    setWeatherData({
      ready: true,
      temperature: respoonse.data.main.temp,
      wind: respoonse.data.wind.speed,
      city: respoonse.data.name,
      humidity: respoonse.data.main.humidity,
      description: respoonse.data.weather[0].description,
      icon: respoonse.data.weather[0].icon,
      date: new Date(respoonse.data.dt * 1000),
      country: respoonse.data.sys.country,
    });
  }

  function handleSubmit(event) {
    console.log(city);
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "066e6846e09ae10d49fa3612a2af48a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="mb-2 " onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  placeholder="Enter a city..."
                  className="form-control search-input"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2 ">
                <input type="submit" value="🔍" className="btn search-btn" />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
