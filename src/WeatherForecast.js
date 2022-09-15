import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col forecast-day-info">
          <div className="forecast-day">Fri</div>{" "}
          <WeatherIcon code="01d" size={45} />{" "}
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col forecast-day-info">
          <div className="forecast-day">Fri</div>{" "}
          <WeatherIcon code="01d" size={45} />{" "}
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col forecast-day-info">
          <div className="forecast-day">Fri</div>{" "}
          <WeatherIcon code="01d" size={45} />{" "}
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col forecast-day-info">
          <div className="forecast-day">Fri</div>{" "}
          <WeatherIcon code="01d" size={45} />{" "}
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>
        <div className="col forecast-day-info">
          <div className="forecast-day">Fri</div>{" "}
          <WeatherIcon code="01d" size={45} />{" "}
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
