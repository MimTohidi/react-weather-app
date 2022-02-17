import React from "react";

import "./Weather.css";
export default function Weather() {
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
              <h1>Ilam, Iran</h1>
              <hr />
              <p>
                Thursday, 17:40
                <br />
                Today is mostly cloudy.
              </p>
            </div>
            <div className="col-3 weather-temp">
              <div className="row">
                <div className="col-4 ">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="mostly cloudy"
                    className="weather-icon"
                  />
                </div>
                <div className="col-7">
                  <span className="temp">9</span>
                  <span className="unit">°C</span>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <span className="humidity "> Humidity: 74</span>
                <span className="wind">Wind: 2km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
