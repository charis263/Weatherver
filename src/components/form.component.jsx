import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        {/*if props.error is true call the error function from line 40 below */}
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="on"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="on"
            />
            {/*autocomplete turned on for field suggestions*/}
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-warning">Check Weather</button>
            {/*https://www.w3schools.com/bootstrap/bootstrap_ref_css_buttons.asp*/}
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-info mx-5" role="alert">
      We want to know which City and Country!
    </div>
  );
};

export default Form;

//sm for small, md for medium, lg for large for width and grid
