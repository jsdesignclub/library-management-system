import React from 'react'
import MostPopularBooks from '../component/mostPopularBooks'
import '../style/book.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function Book() {
  return (
    <div>

      <div className='bookpage'>
      <span>Now you can</span>
      <span>read millions</span>
      <span>Book </span>
      
      </div>

      <div className='bookstore'>


      </div>

      <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="../image/audio1.png" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>

    </div>
   
   
    
  )
}

export default Book