import React from 'react'
import book2 from "../image/book 1.png"
import "../style/MostPopularBooks.css"
function MostPopularBooks() {
  return (
    <div className='MostPopularBooks'>
       <span>Most Popular Books</span>
       <img src={book2} alt="bookimage" />
       <button>More books</button>
    </div>
  )
}

export default MostPopularBooks