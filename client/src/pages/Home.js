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
		latitude: 40.8089897,
		longitude: -73.9612492,
	};

	componentDidMount() {
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



    render(){
        console.log("Render");
        const {beacons} = this.state;

        return beacons.length ?(
            <MapContainer 
                beacons={this.state.beacons}
                mapClick = {this.addBeaconClick}
            />
            ):( <h1>Hey</h1>

        );
    }
}
