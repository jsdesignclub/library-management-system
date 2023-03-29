
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
import Slider from "../component/slider";
import "../style/Home.css";
function Home(){
    return(
        <div>
      <Herro />
     <Chatagory />
      <Slider/>
     <MostPopularBooks/>
     <Bannersection/>
     <OurAudioBooks/>
     <OurVideoBooks/>

        </div>
    
     
     


    );
}
export default Home;