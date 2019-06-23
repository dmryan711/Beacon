import React from "react";
import MapContainer from "../components/MapContainer";
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
        intervalId:""
	};

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
                        }
                    });
                }
            )
        } 
    }

    



    render(){
        console.log("Render");
        const {beacons} = this.state;
        const {currentLocation} = this.state;
        return (
            <MapContainer
                beacons = {this.state.beacons}
                mapClick = {this.addBeaconClick}
                currentLocation = {this.state.currentLocation}
            />
        );

        // return beacons.length && isCurrentLocationEmpty ?(
        //     <MapContainer 
        //         beacons={this.state.beacons}
        //         mapClick = {this.addBeaconClick}
        //     />
        //     ):( <h1>Hey</h1>

        // );
    }
}
