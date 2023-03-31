import React from 'react'
import '../style/Book_listing.css'
import book1 from '../image/mybook.jpg'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
function Book_listing() {

        const book =[
            {   
                ISBN:'214578',
                Image:"../image/mybook.jpg",
                BookName:'Reach dad and poor dad',
                Price:'1250'
            }
            ,
            {   
                ISBN:'214456',
                Image:'../image/mybook.jpg',
                BookName:'Happla',
                Price:'1250'
            }
            ,
            {   
                ISBN:'214456',
                Image:'../image/mybook.jpg',
                BookName:'',
                Price:'1250'
            }


        ]

  return (
    <div className='booklisting'>

     <ul>
        {book.map((data)=>(
            <li key={data.ISBN}>
                <div> <img src={book1} alt=''/> </div>
               
                
                <p><Link to={'/view'}>view Book</Link></p>
            </li>
           
        ))}
    </ul>

    </div>
  
  )
}

export default Book_listing