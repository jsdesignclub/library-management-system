import React from 'react'
import book12 from '../image/mybook.jpg'
import '../style/bookview.css'
import MostPopularBooks from './mostPopularBooks'
function Viewitem() {
  return (
  <div>
    <div className='container1'>
            <div className='leftside'>
                <img src={book12}   alt='' />
            </div>
            <div className='rightside'>
                <p className='txt'><span>Name: </span></p>
                <p><span>ISBN: </span></p>
                <p><span>About a book </span></p>
                <p className='txt'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s,Lorem Ipsum is 
                    simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s,Lorem Ipsum is simply dummy text of the 
                    printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy
                     text ever since the 1500s,</p>
            </div>
            
    </div>
    <MostPopularBooks/>
    </div>
  )
}

export default Viewitem