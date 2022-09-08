import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      feelsLikeTemp: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
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
              <h1>{weatherData.city}</h1>
              <ul>
                <li className="current-day">
                  <FormattedDate date={weatherData.date} />
                </li>
                <li>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                </li>
                <li className="weather-discription text-capitalize">
                  {weatherData.description}
                </li>
              </ul>
            </div>
            <div className="col-4 additional-weather-info">
              <p className="current-temperature">
                {Math.round(weatherData.temperature)}°
              </p>
              <ul>
                <li>Feels like: {Math.round(weatherData.feelsLikeTemp)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "74e689e7d5e387f646d3bb8762c944a1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
