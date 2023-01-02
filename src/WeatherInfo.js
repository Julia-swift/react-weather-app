import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul className="mobile">
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Pressure: {props.data.pressure} mbar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
