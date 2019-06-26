import React,{Component} from "react";
import MapContainer from "../components/MapContainer";
import { MAP } from 'react-google-maps/lib/constants';



export default class Home extends React.Component {
	state = {
        
		beacons: [
            {
                location:{
                    lat:40.748441,
                    lon:-73.985664
                }  
            }
        ],
        currentLocation:{
            lat:40.748441,
            lon:-73.985664
        },
        intervalId:"",
        center: {
            lat:40.748441,
            lon:-73.985664
        }
    };
   
    _mapRef = null;

    onMapMounted = ref => {
        this._mapRef = ref;
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
        console.log(latitude, longtitude)
        newBeaconArray.push({location:{lat:latitude,lon:longtitude}});
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
