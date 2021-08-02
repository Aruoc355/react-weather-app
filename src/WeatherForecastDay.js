import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);

    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherDay">{day()}</div>

      <WeatherIcon
        className="Icon"
        code={props.data.weather[0].icon}
        size={28}
      />
      <div className="Forecast-temperature"></div>
      <span className="Forecast-temperature-max">
        {Math.round(props.data.temp.max)}°
      </span>
      <span className="Forecast-temperature-min">
        /{Math.round(props.data.temp.min)}°
      </span>
    </div>
  );
}
