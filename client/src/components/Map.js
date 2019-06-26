//Map.js
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeaconMarker from "./BeaconMarker";
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = withScriptjs(withGoogleMap((props) => {

  return (
      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={14}
        center={ { lat:  props.center.lat, lng: props.center.lon } }
        onClick={props.mapClick}
        onDragEnd = {props.onDragEnd}
      


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
    <BeaconMarker
          type = {"userLocation"}
          location = {{lat:props.currentLocation.lat, lng:props.currentLocation.lon}}
      />
        
      </GoogleMap>
    );
  }
))

export default Map;
