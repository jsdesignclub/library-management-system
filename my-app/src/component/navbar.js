import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import "../style/Navbar.css";
import logo from '../image/logo.png'
  function Navbar(){
    
    return(

        <div className="navbar text-3xl text-red-600 background-color: rgb(100 116 139)">
          <div className="logo"><img src={logo} /></div>
        <ul>
              <li><Link to={'/'}><div className="texts">Home</div></Link></li>
              <li><Link to={'/Book'}><div className="texts">Books</div> </Link></li>
              <li><Link to={'/video'}><div className="texts">Videos</div> </Link></li>
              <li><Link to={'/audio'}><div className="texts">Audios</div> </Link></li>
              <li><Link to={'/quizz'}><div className="texts">Quizzes & Exercise</div> </Link></li>
              <li><Link to={'/Contact'}><div className="texts">Contact Us</div></Link></li>
            </ul>
              <ul className="log">
                <li>Create Account </li>
                <li>| Sign in </li>
              </ul>

        </div>
      


    );
  }
  export default Navbar;