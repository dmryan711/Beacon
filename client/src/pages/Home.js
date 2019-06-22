import React from "react";
import MapContainer from "../components/MapContainer";
export default class Home extends React.Component {
	state = {
		beacon: [
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

    render(){
        const {beacon} = this.state;

        return beacon.length ?(
            <MapContainer 
                beacons={this.state.beacon}
            />
            ):( <h1>Hey</h1>

        );
    }
}
