import React from 'react'
import MostPopularBooks from '../component/mostPopularBooks'
import '../style/book.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Book_listing from '../component/book_listing';


function Book() {
  return (
    <div>

      <div className='bookpage'>
      <span>Now you can</span>
      <span>read millions</span>
      <span>Book </span>
      
      </div>

      <div className='bookstore'>
        <Book_listing/>

      </div>

     

    </div>
   
   
    
  )
}

export default Book
