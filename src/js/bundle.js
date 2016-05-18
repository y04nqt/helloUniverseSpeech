//importing React and ReactDOM from modules via package.json
import React from "react";
import ReactDOM from "react-dom";

//import our HellowWorld component
import HelloWorld from "./HelloWorld";

//creating our app variable by grabbing our app HTML element
const app = document.getElementById('app');

//ReactDOM calling the render function
ReactDOM.render(
    //rendering our component, the comma is important! the render function contains two params--- meaning
    //there are two places to put needed data
    <HelloWorld />,
//proclaiming the render location
app);
