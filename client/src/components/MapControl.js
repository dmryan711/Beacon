//MapControl.js
import React from "react";

function MapControl(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <br />
          <button
            className="btn btn-outline-info waves-effect"
            onClick={props.professionalHandler}
          >
            Professional Beacon
          </button>
        </div>

        <div className="col-lg-4">
          <br />
          <button
            className="btn btn-outline-success waves-effect"
            onClick={props.partyHandler}
          >
            Party Beacon
          </button>
        </div>
        <div className="col-lg-4">
          <br />
          <button
            className="btn btn-outline-danger waves-effect"
            onClick={props.socialHandler}
          >
            Private Beacon
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <br />
          <button
            className="btn btn-outline-warning waves-effect"
            onClick={props.lightModeHandler}
          >
            Light Mode
          </button>
        </div>
        <div className="col-lg-4">
          <br />
          <button
            className="btn btn-outline-primary waves-effect mt-2"
            onClick={props.blueModeHandler}
          >
            Blue Mode
          </button>
        </div>
        <div className="col-lg-4">
          <br />
          <button className="btn btn-dark" onClick={props.darkModeHandler}>
            Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
}
export default MapControl;
