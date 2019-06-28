// MapContainer.js

import React from "react";
import Map from "./Map";

function MapContainer(props) {
	console.log("Map Container");
		const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
		const GOOGLE_URL_BASE = "https://maps.googleapis.com/maps/api/js?key=";
		const GOOGLE_URL_CONFIG = "&v=3.exp&libraries=geometry,drawing,places";
		const GOOGLE_MAPS_FULL_URL = GOOGLE_URL_BASE + API_KEY +GOOGLE_URL_CONFIG;
		return (
			<Map
				beacons={props.beacons}
				googleMapURL={GOOGLE_MAPS_FULL_URL}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `900px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				mapClick = {props.mapClick}
				currentLocation = {props.currentLocation}
				onDragEnd = {props.onDragEnd}
				onMapMounted={props.onMapMounted}
				center = {props.center}
				onSearchBoxMounted = {props.onSearchBoxMounted}
				bounds = {props.bounds}
				onPlacesChanged = {props.onPlacesChanged}
				// activeBeacon = {props.activeBeacon}
				onPartyClicked = {props.onPartyClicked}
                onSocialClicked = {props.onSocialClicked}
				onProfessionalClicked = {props.onProfessionalClicked}
				darkModeHandler = {props.darkModeHandler}
				blueModeHandler = {props.blueModeHandler}
				lightModeHandler = {props.lightModeHandler}
				style = {props.style}
				show = {props.show}
				  handleClose = {props.handleClose}
				  submitBeacon = {props.submitBeacon}
			/>
		);
}

export default MapContainer;