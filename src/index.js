import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <p className="text-center footer mt-3">
      This project was coded by{" "}
      <a
        href="mailto:mim.tohidi@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mim Tohidi
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/MimTohidi/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
