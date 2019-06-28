// //Map.js
// import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import BeaconMarker from "./BeaconMarker";
// import MapControl from "./MapControl";
// const {
//   SearchBox
// } = require("react-google-maps/lib/components/places/SearchBox");
// const {
//   MarkerClusterer
// } = require("react-google-maps/lib/components/addons/MarkerClusterer");

// const Map = withScriptjs(
//   withGoogleMap(props => {
//     return (
//       <GoogleMap
//         ref={props.onMapMounted}
//         defaultZoom={14}
//         center={{ lat: props.center.lat, lng: props.center.lon }}
//         onClick={props.mapClick}
//         onDragEnd={props.onDragEnd}
//         defaultOptions={{
//           // these following 7 options turn certain controls off see link below
//           streetViewControl: false,
//           scaleControl: false,
//           mapTypeControl: false,
//           panControl: false,
//           zoomControl: false,
//           rotateControl: false,
//           fullscreenControl: false,
//           styles: props.style
//         }}
//         options={{
//           streetViewControl: false,
//           scaleControl: false,
//           mapTypeControl: false,
//           panControl: false,
//           zoomControl: false,
//           rotateControl: false,
//           fullscreenControl: false,
//           styles: props.style
//         }}
//       >
//         <SearchBox
//           ref={props.onSearchBoxMounted}
//           bounds={props.bounds}
//           controlPosition={window.google.maps.ControlPosition.TOP_CENTER}
//           onPlacesChanged={props.onPlacesChanged}
//         >
//           <input
//             type="text"
//             placeholder="Customized your placeholder"
//             style={{
//               boxSizing: `border-box`,
//               border: `1px solid transparent`,
//               width: `240px`,
//               height: `32px`,
//               marginTop: `27px`,
//               padding: `0 12px`,
//               borderRadius: `3px`,
//               boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//               fontSize: `14px`,
//               outline: `none`,
//               textOverflow: `ellipses`
//             }}
//           />
//         </SearchBox>
//         <MarkerClusterer
//           onClick={props.onMarkerClustererClick}
//           averageCenter
//           enableRetinaIcons
//           gridSize={60}
//         >
//           {props.beacons.map((beacon, index) => (
//             <BeaconMarker
//               type={beacon.type}
//               location={{ lat: beacon.location.lat, lng: beacon.location.lon }}
//               key={index}
//             />
//           ))}
//         </MarkerClusterer>
//         <BeaconMarker
//           type={"userLocation"}
//           location={{
//             lat: props.currentLocation.lat,
//             lng: props.currentLocation.lon
//           }}
//         />
//         <MapControl
//           professionalHandler={props.onProfessionalClicked}
//           partyHandler={props.onPartyClicked}
//           socialHandler={props.onSocialClicked}
//           blueModeHandler={props.blueModeHandler}
//           darkModeHandler={props.darkModeHandler}
//           lightModeHandler={props.lightModeHandler}
//         />
//       </GoogleMap>
//     );
//   })
// );

// export default Map;

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeaconMarker from "./BeaconMarker";
import MapControl from "./MapControl";

import BeaconModal from './Modal';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


const Map = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={14}
        center={{ lat: props.center.lat, lng: props.center.lon }}
        onClick={props.mapClick}
        onDragEnd={props.onDragEnd}
        defaultOptions={{
          // these following 7 options turn certain controls off see link below
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: props.style
        }}
        options={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: props.style
        }}
      >
        <SearchBox
          ref={props.onSearchBoxMounted}
          bounds={props.bounds}
          controlPosition={window.google.maps.ControlPosition.TOP_CENTER}
          onPlacesChanged={props.onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Customized your placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </SearchBox>
        <MarkerClusterer
          onClick={props.onMarkerClustererClick}
          averageCenter
          enableRetinaIcons
          gridSize={60}
        >
          {props.beacons.map((beacon, index) => (
            <BeaconMarker
              type={beacon.type}
              location={{ lat: beacon.location.lat, lng: beacon.location.lon }}
              key={index}
            />
          ))}
        </MarkerClusterer>
        <BeaconMarker
          type={"userLocation"}
          location={{
            lat: props.currentLocation.lat,
            lng: props.currentLocation.lon
          }}
        />
        <BeaconModal
          show={props.show}
          handleClose={props.handleClose}
          // beaconType = {props.activeBeacon}
          submitBeacon={props.submitBeacon}
        />
        <MapControl
          professionalHandler={props.onProfessionalClicked}
          partyHandler={props.onPartyClicked}
          socialHandler={props.onSocialClicked}
          blueModeHandler={props.blueModeHandler}
          darkModeHandler={props.darkModeHandler}
          lightModeHandler={props.lightModeHandler}
        />

      ))}
      
      
    </MarkerClusterer>
    <BeaconMarker
          type = {"userLocation"}
          location = {{lat:props.currentLocation.lat, lng:props.currentLocation.lon}}
      />
      <BeaconModal
      show = {props.show}
      handleClose = {props.handleClose}
      // beaconType = {props.activeBeacon}
      submitBeacon = {props.submitBeacon}
      />
      <MapControl
      professionalHandler = {props.onProfessionalClicked}
      partyHandler = {props.onPartyClicked}
      socialHandler = {props.onSocialClicked}
      blueModeHandler = {props.blueModeHandler}
      darkModeHandler = {props.darkModeHandler}
      lightModeHandler = {props.lightModeHandler}

     
      
      />
        

      </GoogleMap>
    );
  })
);

export default Map;
