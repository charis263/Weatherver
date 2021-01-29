import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container text-white">
      <div className="Card">
        <h1>Weatherver App</h1>
        <h1 className="text-black py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
          {/*to use bootstrapping use backticks*/}
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* for showing max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* To show weather description */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">Minimum: {min}&deg;</span>
        <span className="px-4">Maximum: {max}&deg;</span>
      </h3>
    );
  }
}
//&deg for the degree symbol
//px for padding x
//py for padding y