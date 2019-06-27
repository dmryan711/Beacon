//Map.js
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeaconMarker from "./BeaconMarker";
const {
  SearchBox
} = require("react-google-maps/lib/components/places/SearchBox");
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

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
          // styles:[
          //   {
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#212121"
          //       }
          //     ]
          //   },
          //   {
          //     elementType: "labels.icon",
          //     stylers: [
          //       {
          //         visibility: "off"
          //       }
          //     ]
          //   },
          //   {
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#757575"
          //       }
          //     ]
          //   },
          //   {
          //     elementType: "labels.text.stroke",
          //     stylers: [
          //       {
          //         color: "#212121"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "administrative",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#757575"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "administrative.country",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#9e9e9e"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "administrative.land_parcel",
          //     stylers: [
          //       {
          //         visibility: "off"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "administrative.locality",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#bdbdbd"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "poi",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#757575"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "poi.park",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#181818"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "poi.park",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#616161"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "poi.park",
          //     "elementType": "labels.text.stroke",
          //     "stylers": [
          //       {
          //         "color": "#1b1b1b"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "road",
          //     "elementType": "geometry.fill",
          //     "stylers": [
          //       {
          //         "color": "#2c2c2c"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "road",
          //     "elementType": "labels.text.fill",
          //     "stylers": [
          //       {
          //         "color": "#8a8a8a"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "road.arterial",
          //     "elementType": "geometry",
          //     "stylers": [
          //       {
          //         "color": "#373737"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "road.highway",
          //     "elementType": "geometry",
          //     "stylers": [
          //       {
          //         "color": "#3c3c3c"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "road.highway.controlled_access",
          //     "elementType": "geometry",
          //     "stylers": [
          //       {
          //         "color": "#4e4e4e"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "road.local",
          //     "elementType": "labels.text.fill",
          //     "stylers": [
          //       {
          //         "color": "#616161"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "transit",
          //     "elementType": "labels.text.fill",
          //     "stylers": [
          //       {
          //         "color": "#757575"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "water",
          //     "elementType": "geometry",
          //     "stylers": [
          //       {
          //         "color": "#000000"
          //       }
          //     ]
          //   },
          //   {
          //     "featureType": "water",
          //     "elementType": "labels.text.fill",
          //     "stylers": [
          //       {
          //         "color": "#3d3d3d"
          //       }
          //     ]
          //   }
          // ],

          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }]
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }]
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }]
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }]
            }
          ]
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
      </GoogleMap>
    );
  })
);

export default Map;
