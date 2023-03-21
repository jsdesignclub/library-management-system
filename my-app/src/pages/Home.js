import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Chatagory from "../component/chatagory";
import Herro from "../component/herro";
import "../style/Home.css";
function Home(){
    return(
        <div>
      <Herro />
     <Chatagory />
        </div>
    
     
     


    );
}
export default Home;