//MapControl.js
import React from "react";


function MapControl(props){
    return(
        <div className="container">
            <div className ="row">
                <div className="col-lg-4">
                    <button className = "btn btn-success" onClick = {props.professionalHandler}>Professional</button>
                </div>
                <div className="col-lg-4">
                    <button className = "btn btn-success" onClick = {props.partyHandler}>Party</button>
                </div>
                <div className="col-lg-4">
                    <button className = "btn btn-success" onClick = {props.socialHandler}>Social</button>
                </div>
            </div>
            <div className ="row">
            <div className="col-lg-4">
                    <button className = "btn btn-success mt-2" onClick = {props.lightModeHandler}>Light Mode</button>
                </div>
                <div className="col-lg-4">
                    <button className = "btn btn-success mt-2" onClick = {props.blueModeHandler}>Blue Mode</button>
                </div>
                <div className="col-lg-4">
                    <button className = "btn btn-success mt-2" onClick = {props.darkModeHandler}>Dark Mode</button>
                </div>
            </div>

        </div>
        
    );
}
export default MapControl;