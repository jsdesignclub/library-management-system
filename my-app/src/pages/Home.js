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
import Footer from "../component/footer";
import Herro from "../component/herro";
import MostPopularBooks from "../component/mostPopularBooks";
import OurAudioBooks from "../component/ourAudioBooks";
import OurVideoBooks from "../component/ourVideoBooks";
import "../style/Home.css";
function Home(){
    return(
        <div>
      <Herro />
     <Chatagory />
     <MostPopularBooks/>
     <Bannersection/>
     <OurAudioBooks/>
     <OurVideoBooks/>
     <Footer/>
        </div>
    
     
     


    );
}
export default Home;