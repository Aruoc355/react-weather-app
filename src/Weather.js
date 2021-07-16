import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      <h1>Naples</h1>
      <ul>
        <li>Friday 10:00 am</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />{" "}
          15 °C
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 15%</li>
            <li> Humidity: 40%</li>
            <li> Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}