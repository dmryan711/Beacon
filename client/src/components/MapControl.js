//MapControl.js
import React from "react";


function MapControl(props){
    return(
        <button className = "btn btn-success ml-2" onClick = {props.buttonClickHandler}>{props.buttonVerb}</button>
    );
}
export default MapControl;