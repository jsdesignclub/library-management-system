import React from 'react'
import Book from '../image/book.png';
import audio from '../image/audiobook.png';
import video from '../image/video-camera.png';
import quizz from '../image/quizzes.png';
import "../style/chatagory.css"
function Chatagory() {
  return (
    <div>
      <div className='chatagory'>
        <div className='box'>
        <img src={Book} alt="Logo" />
        <p>Book</p>
        
        </div>
        <div className='box'>
        <img src={audio} alt="Logo" />
        <p>Audio Book</p>
        </div>
        <div className='box'>
        <img src={video} alt="Logo" />
        <p>Video Book</p>
        </div>
        <div className='box'>
        <img src={quizz} alt="Logo" />
        <p>Quizz</p>
        </div>
      </div>
    </div>
  )
}

export default Chatagory;