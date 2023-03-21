import React from 'react'
import Book from '../image/book.png';
import "../style/chatagory.css"
function Chatagory() {
  return (
    <div>
      <div className='chatagory'>
        <div className='box'>
        <img src={Book} alt="Logo" />
        </div>
        <div className='box'>
        <img src={Book} alt="Logo" />
        </div>
        <div className='box'>
        <img src={Book} alt="Logo" />
        </div>
        <div className='box'>
        <img src={Book} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Chatagory;