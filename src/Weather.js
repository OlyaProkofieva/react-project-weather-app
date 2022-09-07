import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app">
        <div className="row default-cities">
          <div className="col-2">
            <a href="/">Paris</a>
          </div>
          <div className="col-2">
            <a href="/">New York</a>
          </div>
          <div className="col-2">
            <a href="/">Lisbon</a>
          </div>
          <div className="col-2">
            <a href="/">London</a>
          </div>
          <div className="col-2">
            <a href="/">Tel Aviv</a>
          </div>
          <div className="col-2">
            <a href="/">Tokyo</a>
          </div>
        </div>
        <form>
          <input type="search" placeholder="Enter a location" />
          <input type="submit" value="Search" />
        </form>
        <div className="row">
          <div className="col-8 main-weather-info">
            <h1>Kyiv</h1>
            <ul>
              <li className="current-day">September 25, 2022</li>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Cloudy"
                />
              </li>
              <li className="weather-discription">Cloudy</li>
            </ul>
          </div>
          <div className="col-4 additional-weather-info">
            <p className="current-temperature">28°</p>
            <ul>
              <li>Feels like: 30°C</li>
              <li>Humidity: 70%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
