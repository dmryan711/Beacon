//Map.js
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeaconMarker from "./BeaconMarker";

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


const Map = withScriptjs(withGoogleMap((props) =>{

  const markers = props.beacons.map( (beacon,index) => 
                  <BeaconMarker
                    location={{lat: beacon.location.lat, lng: beacon.location.lon}}
                    key = {index}
  />);

  



                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  40.8089897, lng: -73.9612492 } }
        onClick={props.mapClick}
        >
        <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.beacons.map((beacon,index) => (
        <BeaconMarker
        location={{lat: beacon.location.lat, lng: beacon.location.lon}}
        key = {index}
        />
      ))}
    </MarkerClusterer>
        
      </GoogleMap>
    );
  }
))

export default Map;
