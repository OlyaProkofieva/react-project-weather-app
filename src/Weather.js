import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      feelsLikeTemp: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "74e689e7d5e387f646d3bb8762c944a1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          {/* <div className="row default-cities">
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
    </div> */}
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a location"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" />
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
