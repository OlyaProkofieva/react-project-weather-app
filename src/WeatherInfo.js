import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div classNAme="WeatherInfo">
      <div className="row">
        <div className="col-8 main-weather-info">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="current-day">
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <img src={props.data.iconUrl} alt={props.data.description} />
            </li>
            <li className="weather-discription text-capitalize">
              {props.data.description}
            </li>
          </ul>
        </div>
        <div className="col-4 additional-weather-info">
          <p className="current-temperature">
            {Math.round(props.data.temperature)}°
          </p>
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLikeTemp)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
