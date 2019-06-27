//MapControl.js
import React from "react";


function MapControl(props){
    return(
        <div className="container">
            <div className ="row">
                <div className="col-lg-4">
                    <button className = "btn btn-success ml-2" onClick = {props.professionalHandler}>Professional</button>
                </div>
                <div className="col-lg-4">
                    <button className = "btn btn-success ml-2" onClick = {props.partyHandler}>Party</button>
                </div>
                <div className="col-lg-4">
                    <button className = "btn btn-success ml-2" onClick = {props.socialHandler}>Social</button>
                </div>
            </div>

        </div>
        
    );
}
export default MapControl;