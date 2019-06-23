import React from "react";

const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
		const GOOGLE_URL_BASE = "https://maps.googleapis.com/maps/api/js?key=";
		const GOOGLE_URL_CONFIG = "&v=3.exp&libraries=geometry,drawing,places";
		const GOOGLE_MAPS_FULL_URL = GOOGLE_URL_BASE + API_KEY +GOOGLE_URL_CONFIG;
const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: GOOGLE_MAPS_FULL_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
  defaultZoom={14}
  center={ { lat:  40.8089897, lng: -73.9612492 } }
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker,index) => (
        <Marker
          key={index}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);
export default MapWithAMarkerClusterer;