import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import MapContainer from "../MapContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MAP } from "react-google-maps/lib/constants";
import _ from "lodash";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    beacons: [
      {
        location: {
          lat: 40.748441,
          lon: -73.985664
        }
      }
    ],
    currentLocation: {
      lat: 40.748441,
      lon: -73.985664
    },
    intervalId: "",
    center: {
      lat: 40.748441,
      lon: -73.985664
    },
    bounds: null
  };

  onBoundsChanged = () => {
    this.setState({
      bounds: this._mapRef.getBounds(),
      center: this._mapRef.getCenter()
    });
  };

  onPlacesChanged = () => {
    const places = this._searchRef.getPlaces();
    const bounds = this._mapRef.getBounds();

    places.forEach(place => {
      console.log(place);
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location
    }));
    const nextCenter = _.get(nextMarkers, "0.position", this.state.center);
    console.log(nextCenter);
    const updatedCenter = {
      lat: nextCenter.lat(),
      lon: nextCenter.lng()
    };
    this.setState({
      center: updatedCenter
    });
    // refs.map.fitBounds(bounds);
  };

  _mapRef = null;
  _searchRef = null;
  _searchBounds = null;

  onMapMounted = ref => {
    this._mapRef = ref;
  };

  onSearchBoxMounted = ref => {
    this._searchRef = ref;
    // if(this._mapRef){
    //     this._searchRef.setBounds(this._mapRef.getBounds());
    // }
  };

  componentDidMount() {
    this.getGeoLocation(); //Initial location grab
    const intervalId = setInterval(this.getGeoLocation, 180000); //Every 3 minutes
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    // @ts-ignore
    clearInterval(this.state.intervalId);
  }

  addBeaconClick = e => {
    let newBeaconArray = this.state.beacons;
    let latitude = e.latLng.lat();
    let longtitude = e.latLng.lng();
    console.log(latitude, longtitude);
    newBeaconArray.push({ location: { lat: latitude, lon: longtitude } });
    this.setState({
      beacon: newBeaconArray
    });
  };

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          },
          center: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        });
      });
    }
  };

  recenterMap = () => {
    console.log("[DEBUG] onDragEnd map ref", this._mapRef);
    console.log(
      "[DEBUG] onDragEnd new center lng",
      this._mapRef.getCenter().lat()
    );
    console.log(
      "[DEBUG] onDragEnd new center lat",
      this._mapRef.getCenter().lng()
    );
    this.setState({
      center: {
        lat: this._mapRef.getCenter().lat(),
        lon: this._mapRef.getCenter().lng()
      }
    });
  };

  render() {
    const { user } = this.props.auth;
    console.log("[RENDERING] current center", this.state.center);
    console.log("[RENDERING] map ref", this._mapRef);
    const { beacons } = this.state;
    const { currentLocation } = this.state;
    const isCurrentLocationEmpty = !Object.keys(currentLocation).length;
    return (
      <div>
        <MapContainer
          ref={this._mapRef}
          beacons={this.state.beacons}
          mapClick={this.addBeaconClick}
          center={this.state.center}
          currentLocation={this.state.currentLocation}
          onDragEnd={this.recenterMap}
          onMapMounted={this.onMapMounted}
          onSearchBoxMounted={this.onSearchBoxMounted}
          bounds={this.state.bounds}
          onPlacesChanged={this.onPlacesChanged}
        />
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
            margin: "0 auto"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      </div>
      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="col s12 center-align">
      //       <h4>
      //         <b>Hey there,</b> {user.name.split(" ")[0]}
      //         <p className="flow-text grey-text text-darken-1">
      //           You are logged into a full-stack{" "}
      //           <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
      //         </p>
      //       </h4>

      //     </div>
      //   </div>
      // </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
