import React from 'react'
import audioBook from "../image/audio1.png"
import "../style/OurAudioBooks.css"
function OurAudioBooks() {
  return (
    <div className='audioBook'>
        <h1>Our Audio Books </h1>
        <img src={audioBook} alt="audio" />
        <button>More books</button>
    </div>
    
    
  )
}

export default OurAudioBooks