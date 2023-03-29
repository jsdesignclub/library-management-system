import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Contact from './pages/Contact';
import Home from './pages/Home';
import navbar from './component/navbar';
import book from './pages/book';
import Book from './pages/book';
import Navbars from './component/navbar';
import Vedio from './pages/vidio';
import Quizz from './pages/quizz';
import Audio from './pages/audio';
import Footer from './component/footer';
import Viewitem from './component/viewitem';
function App() {
  return (
     
    <Router> 
      <Navbars/>
      
      <Routes>
        
      <Route path='/' exact element={<Home/>} />
      <Route path='/book'  element={<Book/>} />
      <Route path='/video'  element={<Vedio/>} />
      <Route path='/audio'  element={<Audio/>} />
      <Route path='/quizz'  element={<Quizz/>} />
      <Route path='/Contact'  element={<Contact/>} />
      <Route path='/view'  element={<Viewitem/>} />
      </Routes>

      <Footer/>
    
    </Router>

        
  );
}

export default App;
