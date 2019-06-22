//BeaconMarker.js
import React from "react";
import { Marker } from "react-google-maps";
import partyIcon from "../assets/images/beaconParty.png";

function BeaconMarker(props){
    return(
        <Marker
          position={props.location}
          icon={partyIcon}
        >
        </Marker>
    );
}
export default BeaconMarker;