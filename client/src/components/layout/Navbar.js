import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    console.log(window.location.pathname);
    if (window.location.pathname == "/dashboard") {
      return (
        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper white">
              <Link to="#" className="col s5 brand-logo center black-text">
                <img
                  style={{
                    width: "50px",
                    height: "50px"
                  }}
                  src="../../assets/images/BeaconNewLogo.png"
                />
              </Link>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper white">
              <Link to="#" className="col s5 brand-logo center black-text">
                <img src="../../assets/images/BeaconNewLogo.png" />
              </Link>
            </div>
          </nav>
        </div>
      );
    }
  }
}
export default Navbar;
