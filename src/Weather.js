import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="default-cities">
        <ul>
          <li>Paris</li>
          <li>New York</li>
          <li>Lisbon</li>
          <li>London</li>
          <li>Tel Aviv</li>
          <li>Tokyo</li>
        </ul>
      </div>
      <form>
        <input type="search" placeholder="Enter a location" />
        <input type="submit" value="Search" />
      </form>
      <div className="row">
        <div className="col-6">
          <h1>Kyiv</h1>
          <ul>
            <li>September 25, 2022</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy"
              />
            </li>
            <li>Cloudy</li>
          </ul>
        </div>
        <div className="col-6">
          <p>28°C</p>
          <ul>
            <li>Feels like: 30°C</li>
            <li>Humidity: 70%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
