//BeaconMarker.js
import React from "react";
import { Marker } from "react-google-maps";
import partyIcon from "../assets/images/beaconParty.png";

function BeaconMarker(props){
  const google = window.google;
  var image = {
    url: partyIcon,
    scaledSize: new google.maps.Size(60, 60)
};

    return(
        <Marker
          position={props.location}
          icon={image}
        >
        </Marker>
    );
}
export default BeaconMarker;