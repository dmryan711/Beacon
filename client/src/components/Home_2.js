import React from "react";
import MapWithAMarkerClusterer from "./MapWithCluster";
export default class Map extends React.Component {
    state = {
        beacons:[{
            latitude:40.748441,
            longitude:-73.985664
        },
        {
          latitude:40.8089897,
          longitude:-73.9612492
        }]
    };


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

    render() {
      return (
        <MapWithAMarkerClusterer 
        beacons={this.state.beacons}
        mapClick = {this.addBeaconClick}
        />
      )
    }
  }