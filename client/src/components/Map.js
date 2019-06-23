//Map.js
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeaconMarker from "./BeaconMarker";

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


const Map = withScriptjs(withGoogleMap((props) =>{
                
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  props.currentLocation.lat, lng: props.currentLocation.lon } }
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
      
      <BeaconMarker
          type = {"userLocation"}
          location = {{lat:props.currentLocation.lat, lng:props.currentLocation.lon}}
      />
    </MarkerClusterer>
        
      </GoogleMap>
    );
  }
))

export default Map;
