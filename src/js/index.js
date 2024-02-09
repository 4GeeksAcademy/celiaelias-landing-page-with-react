//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
//import Home from "./component/home.jsx";

//import your own components
/*import Jumbotron from "./component/home.jsx";
import Navbar from "./component/home.jsx";
import Card from "./component/home.jsx"; */
import App from "./component/home.jsx"; 
//render your react application
ReactDOM.render(
	<App />, 
	document.querySelector("#app")
)
