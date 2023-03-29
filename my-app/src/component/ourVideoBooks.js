import React from 'react'
import video from "../image/vidio1.png"
import "../style/OurVideoBooks.css"
function OurVideoBooks() {
  return (
    <div className='videobook'>
       <h1>Our Video Books</h1>
        <img src={video} alt="audio" />
        <button>More books</button>
        
    </div>
  )
}

export default OurVideoBooks