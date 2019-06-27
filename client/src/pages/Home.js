import React from "react";
import MapContainer from "../components/MapContainer";
import Modal from "react-bootstrap/Modal";
import _ from "lodash";



export default class Home extends React.Component {
	state = {
        
		beacons: [
            {
                location:{
                    lat:40.748441,
                    lon:-73.985664
                },
                type: "professional"  
            }
        ],
        currentLocation:{
            lat:40.748441,
            lon:-73.985664
        },

        show: false,

        intervalId:"",
        center: {
            lat:40.748441,
            lon:-73.985664
        },
        bounds: null,
        activeBeacon:"professional",
        mapStyle: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    };


   
      
      onBoundsChanged = () => {
        this.setState({
          bounds: this._mapRef.getBounds(),
          center: this._mapRef.getCenter(),
        })
      }
     
      onPlacesChanged= () => {
        const places = this._searchRef.getPlaces();
        const bounds = this._mapRef.getBounds();

        places.forEach(place => {
            console.log(place);
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport)
          } else {
            bounds.extend(place.geometry.location)
          }
        });
        const nextMarkers = places.map(place => ({
          position: place.geometry.location,
        }));
        const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
        console.log(nextCenter);
        const updatedCenter ={
            lat:nextCenter.lat(),
            lon:nextCenter.lng()
        }
        this.setState({
          center: updatedCenter
        });
        // refs.map.fitBounds(bounds);
      }
    
   
    _mapRef = null;
    _searchRef = null;
    _searchBounds = null;

    onMapMounted = ref => {
        this._mapRef = ref;
      }

    

    onSearchBoxMounted = ref => {
        this._searchRef = ref;
        // if(this._mapRef){
        //     this._searchRef.setBounds(this._mapRef.getBounds());
        // }
    }

	componentDidMount() {
        this.getGeoLocation(); //Initial location grab
        const intervalId = setInterval(this.getGeoLocation,180000); //Every 3 minutes
        this.setState({intervalId:intervalId});
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);

    }

    addBeaconClick = (e) => {
        let newBeaconArray = this.state.beacons;
        let latitude = e.latLng.lat()
        let longtitude  = e.latLng.lng()
        let beaconType = this.state.activeBeacon
        console.log(latitude, longtitude)
        newBeaconArray.push({location:{lat:latitude,lon:longtitude}, type:beaconType});
        this.setState({
            beacon:newBeaconArray
        });
    }


    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState({
                        currentLocation: {
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        },
                        center:{
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        }
                    });
                }
            )
        } 
    }

  recenterMap = () => {
     console.log("[DEBUG] onDragEnd map ref", this._mapRef)
     console.log("[DEBUG] onDragEnd new center lng", this._mapRef.getCenter().lat())
     console.log("[DEBUG] onDragEnd new center lat", this._mapRef.getCenter().lng())
     this.setState({
        center:{
            lat: this._mapRef.getCenter().lat(),
            lon: this._mapRef.getCenter().lng()
        }
     });
  }

  onPartyClicked = () =>{
      this.setState({
          activeBeacon:"party"

      });
  }

  onSocialClicked = () =>{
    this.setState({
        activeBeacon:"social"

    });
}

onProfessionalClicked = () =>{
    this.setState({
        activeBeacon:"professional"

    });
}

darkModeHandler = () => {
    console.log("Clicked");
    this.setState({
        mapStyle:
         [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#212121"
                }
              ]
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575"
                }
              ]
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#212121"
                }
              ]
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  color: "#757575"
                }
              ]
            },
            {
              featureType: "administrative.country",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e"
                }
              ]
            },
            {
              featureType: "administrative.land_parcel",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#181818"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
        });
    }

    lightModeHandler = () => {
        console.log("Clicked");
        this.setState({
            mapStyle:
             [
              ]
            });
        }

    blueModeHandler = () => {
        console.log("Clicked");

        this.setState({
            mapStyle:[
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
            });
        }

    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    handleClose = () => {
        this.setState({ show: false });
    }
    
    handleShow = () => {
        this.setState({ show: true });
      }
    

    render(){
        console.log("[RENDERING] current center", this.state.center);
        console.log("[RENDERING] map ref", this._mapRef);
        const {beacons} = this.state;
        const {currentLocation} = this.state;
        const isCurrentLocationEmpty = !Object.keys(currentLocation).length;

        return (
            <MapContainer
                ref={this._mapRef}
                beacons = {this.state.beacons}
                mapClick = {this.addBeaconClick}
                center = {this.state.center}
                currentLocation = {this.state.currentLocation}
                onDragEnd = {this.recenterMap}
                onMapMounted = {this.onMapMounted}
                onSearchBoxMounted = {this.onSearchBoxMounted}
                bounds = {this.state.bounds}
                onPlacesChanged = {this.onPlacesChanged}
                activeBeacon = {this.state.activeBeacon}
                onPartyClicked = {this.onPartyClicked}
                onSocialClicked = {this.onSocialClicked}
                onProfessionalClicked = {this.onProfessionalClicked}
                style = {this.state.mapStyle}
                blueModeHandler = {this.blueModeHandler}
                darkModeHandler = {this.darkModeHandler}
                lightModeHandler = {this.lightModeHandler}
            />
        );



        // return  isCurrentLocationEmpty ?(
        //     <MapContainer 
        //         beacons={this.state.beacons}
        //         mapClick = {this.addBeaconClick}
        //         currentLocation = {this.state.currentLocation}
        //     />
        //     ):( <h1>Help Me Obi-Wan User, We need your current location, it's our only hope</h1>

        // );
    }
}
