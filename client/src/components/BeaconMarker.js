//BeaconMarker.js
import React from "react";
import { Marker } from "react-google-maps";
import partyIcon from "../assets/images/beaconParty.png";

export default class BeaconMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={partyIcon}
        >
        </Marker>
    );
  }
}