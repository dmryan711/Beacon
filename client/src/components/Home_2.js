import React from "react";
import MapWithAMarkerClusterer from "./MapWithCluster";
export default class DemoApp extends React.Component {
    state = {
        markers:[{
            latitude:40.748441,
            longitude:-73.985664
        },
        {
          latitude:40.8089897,
          longitude:-73.9612492
        }]
    };
    render() {
      return (
        <MapWithAMarkerClusterer markers={this.state.markers} />
      )
    }
  }