import React from 'react'
import '../style/Book_listing.css'
import book from "../image/3.JPG"
function Book_listing() {

        const book =[
            {   
                ISBN:'214578',
                Image:"../image/Student.png",
                BookName:'Reach dad and poor dad',
                Price:'1250'
            }
            ,
            {   
                ISBN:'214456',
                Image:'../image/3.JPG',
                BookName:'Happla',
                Price:'1250'
            }
            ,
            {   
                ISBN:'214456',
                Image:'../image/3.JPG',
                BookName:'Hannak llla',
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
            </li>
        ))}
    </ul>

    </div>
  
  )
}

export default Book_listing