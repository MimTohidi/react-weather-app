import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <p className="text-center footer">
      This project was coded by{" "}
      <a href="mailto:mim.tohidi@gmail.com">Mim Tohidi</a> and is open-sourced
      on <a href="https://github.com/MimTohidi/react-weather-app">GitHub</a>.
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
