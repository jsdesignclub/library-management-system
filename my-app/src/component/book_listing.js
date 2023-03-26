import React from 'react'
import '../style/Book_listing.css'
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
                <img src={data.Image} alt='sasas'/>
                <p>{data.BookName}</p>
                <p>{data.Price}</p>
                <p><Link to={'/view'}><div className="texts"><img src='../image/mybook.jpg'/></div></Link></p>
            </li>
           
        ))}
    </ul>

    </div>
  
  )
}

export default Book_listing