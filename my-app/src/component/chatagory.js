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
        <span>Book</span>
        <h1>I am Jayasena</h1>
        </div>
        <div className='box'>
        <img src={audio} alt="Logo" />
        <span>Audio Book</span>
        </div>
        <div className='box'>
        <img src={video} alt="Logo" />
        <span>Video Book</span>
        </div>
        <div className='box'>
        <img src={quizz} alt="Logo" />
        <span>Quizz</span>
        </div>
      </div>
    </div>
  )
}

export default Chatagory;