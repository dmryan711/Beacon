//MapControl.js
import React from "react";
import { Marker } from "react-google-maps";
import partyIcon from "../assets/images/beaconParty.png";
import userIcon from "../assets/images/currentLocation.png"

function MapControl(props){
    return(
        <button className = "btn btn-success ml-2" onClick = {props.buttonClickHandler}>{props.buttonVerb}</button>
    );
}
export default MapControl;