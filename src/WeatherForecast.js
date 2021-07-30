import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherDay">Thu</div>

          <WeatherIcon code="01n" size={32} />
          <div className="Forecast-temperature"></div>
          <span className="Forecast-temperature-max">19°</span>
          <span className="Forecast-temperature-min">/10°</span>
        </div>
      </div>
    </div>
  );
}
