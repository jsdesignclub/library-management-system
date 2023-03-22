import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Bannersection from "../component/bannersection";
import Chatagory from "../component/chatagory";
import Herro from "../component/herro";
import MostPopularBooks from "../component/mostPopularBooks";
import "../style/Home.css";
function Home(){
    return(
        <div>
      <Herro />
     <Chatagory />
     <MostPopularBooks/>
     <Bannersection/>
        </div>
    
     
     


    );
}
export default Home;