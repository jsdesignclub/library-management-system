import React from 'react'
import audioBook from "../image/audio1.png"
import "../style/OurAudioBooks.css"
function OurAudioBooks() {
  return (
    <div className='audioBook'>
        <span>Our Audio Books </span>
        <img src={audioBook} alt="audio" />
        <button>More books</button>
    </div>
    
    
  )
}

export default OurAudioBooks