import React, { Component } from "react";
import MapContainer from "../components/MapContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MAP } from "react-google-maps/lib/constants";
import _ from "lodash";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import Navbar from "../components/layout/Navbar";
import Landing from "../components/layout/Landing";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import PrivateRoute from "../components/private-route/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "../store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

export default class Home extends React.Component {
  // state = {
  //   beacons: [
  //     {
  //       location: {
  //         lat: 40.748441,
  //         lon: -73.985664
  //       }
  //     }
  //   ],
  //   currentLocation: {
  //     lat: 40.748441,
  //     lon: -73.985664
  //   },
  //   intervalId: "",
  //   center: {
  //     lat: 40.748441,
  //     lon: -73.985664
  //   },
  //   bounds: null
  // };

  // onBoundsChanged = () => {
  //   this.setState({
  //     bounds: this._mapRef.getBounds(),
  //     center: this._mapRef.getCenter()
  //   });
  // };

  // onPlacesChanged = () => {
  //   const places = this._searchRef.getPlaces();
  //   const bounds = this._mapRef.getBounds();

  //   places.forEach(place => {
  //     console.log(place);
  //     if (place.geometry.viewport) {
  //       bounds.union(place.geometry.viewport);
  //     } else {
  //       bounds.extend(place.geometry.location);
  //     }
  //   });
  //   const nextMarkers = places.map(place => ({
  //     position: place.geometry.location
  //   }));
  //   const nextCenter = _.get(nextMarkers, "0.position", this.state.center);
  //   console.log(nextCenter);
  //   const updatedCenter = {
  //     lat: nextCenter.lat(),
  //     lon: nextCenter.lng()
  //   };
  //   this.setState({
  //     center: updatedCenter
  //   });
  //   // refs.map.fitBounds(bounds);
  // };

  // _mapRef = null;
  // _searchRef = null;
  // _searchBounds = null;

  // onMapMounted = ref => {
  //   this._mapRef = ref;
  // };

  // onSearchBoxMounted = ref => {
  //   this._searchRef = ref;
  //   // if(this._mapRef){
  //   //     this._searchRef.setBounds(this._mapRef.getBounds());
  //   // }
  // };

  // componentDidMount() {
  //   this.getGeoLocation(); //Initial location grab
  //   const intervalId = setInterval(this.getGeoLocation, 180000); //Every 3 minutes
  //   this.setState({ intervalId: intervalId });
  // }

  // componentWillUnmount() {
  //   // @ts-ignore
  //   clearInterval(this.state.intervalId);
  // }

  // addBeaconClick = e => {
  //   let newBeaconArray = this.state.beacons;
  //   let latitude = e.latLng.lat();
  //   let longtitude = e.latLng.lng();
  //   console.log(latitude, longtitude);
  //   newBeaconArray.push({ location: { lat: latitude, lon: longtitude } });
  //   this.setState({
  //     beacon: newBeaconArray
  //   });
  // };

  // getGeoLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       console.log(position.coords);
  //       this.setState({
  //         currentLocation: {
  //           lat: position.coords.latitude,
  //           lon: position.coords.longitude
  //         },
  //         center: {
  //           lat: position.coords.latitude,
  //           lon: position.coords.longitude
  //         }
  //       });
  //     });
  //   }
  // };

  // recenterMap = () => {
  //   console.log("[DEBUG] onDragEnd map ref", this._mapRef);
  //   console.log(
  //     "[DEBUG] onDragEnd new center lng",
  //     this._mapRef.getCenter().lat()
  //   );
  //   console.log(
  //     "[DEBUG] onDragEnd new center lat",
  //     this._mapRef.getCenter().lng()
  //   );
  //   this.setState({
  //     center: {
  //       lat: this._mapRef.getCenter().lat(),
  //       lon: this._mapRef.getCenter().lng()
  //     }
  //   });
  // };

  render() {
    // console.log("[RENDERING] current center", this.state.center);
    // console.log("[RENDERING] map ref", this._mapRef);
    // const { beacons } = this.state;
    // const { currentLocation } = this.state;
    // const isCurrentLocationEmpty = !Object.keys(currentLocation).length;
    var loggedIn = false;

    if (loggedIn === false) {
      return (
        <Provider store={store}>
          <Router>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </Provider>
      );
    } else {
      // return (
      //   <MapContainer
      //     ref={this._mapRef}
      //     beacons={this.state.beacons}
      //     mapClick={this.addBeaconClick}
      //     center={this.state.center}
      //     currentLocation={this.state.currentLocation}
      //     onDragEnd={this.recenterMap}
      //     onMapMounted={this.onMapMounted}
      //     onSearchBoxMounted={this.onSearchBoxMounted}
      //     bounds={this.state.bounds}
      //     onPlacesChanged={this.onPlacesChanged}
      //   />
      // );
    }

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
