import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by{" "}
          <a href="https://www.linkedin.com/in/alessia-ruocco-17a61041/">
            Alessia Ruocco
          </a>{" "}
          , open-sourced on{" "}
          <a href="https://github.com/Aruoc355/react-weather-app">GitHub </a>
          and hosted on{" "}
          <a href="https://cranky-booth-38afee.netlify.app/" target="_blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
