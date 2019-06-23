import React from "react";
import ReactDOM from "react-dom";
import App from "./components/Home_2";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
