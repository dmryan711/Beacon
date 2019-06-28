//BeaconMarker.js
// import React from "react";
// import { Marker } from "react-google-maps";
// import partyIcon from "../assets/images/red.png";
// import professionalIcon from "../assets/images/blue.png";
// import socialIcon from "../assets/images/green.png";
// import userIcon from "../assets/images/orange.png";

// function BeaconMarker(props) {
//   const google = window.google;
//   let image;

//   if (props.type === "userLocation") {
//     image = {
//       url: userIcon,
//       scaledSize: new google.maps.Size(45, 60)
//     };
//   } else if (props.type === "party") {
//     image = {
//       url: partyIcon,
//       scaledSize: new google.maps.Size(45, 60)
//     };
//   } else if (props.type === "professional") {
//     image = {
//       url: professionalIcon,
//       scaledSize: new google.maps.Size(45, 60)
//     };
//   } else if (props.type === "social") {
//     image = {
//       url: socialIcon,
//       scaledSize: new google.maps.Size(45, 60)
//     };
//   } else {
//     image = {
//       url: partyIcon,
//       scaledSize: new google.maps.Size(45, 60)
//     };
//   }

//   return <Marker position={props.location} icon={image} />;
// }
// export default BeaconMarker;

import React from "react";
import { Marker } from "react-google-maps";
import partyIcon from "../assets/images/red.png";
import professionalIcon from "../assets/images/blue.png";
import socialIcon from "../assets/images/green.png";
import userIcon from "../assets/images/orange.png";

function BeaconMarker(props) {
  const google = window.google;
  let image;

  if (props.type === "userLocation") {
    image = {
      url: userIcon,
      scaledSize: new google.maps.Size(45, 60)
    };
  } else if (props.type === "Party") {
    image = {
      url: partyIcon,
      scaledSize: new google.maps.Size(45, 60)
    };
  } else if (props.type === "Professional") {
    image = {
      url: professionalIcon,
      scaledSize: new google.maps.Size(45, 60)
    };
  } else if (props.type === "Social") {
    image = {
      url: socialIcon,
      scaledSize: new google.maps.Size(45, 60)
    };
  } else {
    image = {
      url: partyIcon,
      scaledSize: new google.maps.Size(45, 60)
    };
  }


 
  

    return(
        <Marker
          position={props.location}
          icon={image}
        >
        </Marker>
    );

}
export default BeaconMarker;
