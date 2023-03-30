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
      <h1>Now you can</h1>
      <h1>read millions</h1>
      <h1>Book </h1>
      
      </div>

      <div className='bookstore'>
        <Book_listing/>

      </div>

     

    </div>
   
   
    
  )
}

export default Book
