import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="WeatherInfo">
        <div className="container">
          <div className="hero">
            <div className="row d-flex justify-content-between mb-5">
              <div className="col-lg-6 description ">
                <h1>
                  {props.data.city}, {props.data.country}
                </h1>
                <hr />

                <p className="text-capitalize">
                  <FormattedDate date={props.data.date} />
                  {props.data.description}.
                </p>
              </div>
              <div className="col-lg-3 weather-temp">
                <div className="row">
                  <div className="col-lg-4 ">
                    <div className="weather-icon">
                      <WeatherIcon code={props.data.icon} color="#385170" />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <span className="temp">
                      {Math.round(props.data.temperature)}
                    </span>
                    <span className="unit">°C</span>
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-3 mb-3">
                  <span className="humidity "> H: {props.data.humidity} %</span>
                  <span className="wind">
                    W: {Math.round(props.data.wind)}km/h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
