//Map.js
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeaconMarker from "./BeaconMarker";

const Map = withScriptjs(withGoogleMap((props) =>{

  const markers = props.beacons.map( beacon => 
                  <BeaconMarker
                    location={{lat: beacon.location.lat, lng: beacon.location.lon}}
  />);

  



                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  40.8089897, lng: -73.9612492 } }
        onClick={props.mapClick}
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default Map;
