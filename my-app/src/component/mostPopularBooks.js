import React from 'react'
import book2 from "../image/book 1.png"
import "../style/MostPopularBooks.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function MostPopularBooks() {
  return (
    <div>

    

<Container className='MostPopularBooks'>
<Row>
  <Col md-12>
  
   <h1>Most Popular Books</h1>
  <img src={book2} alt="bookimage" />
  <div className='ddd'>  <button className='btn'>Read more</button></div>
 
  </Col>
</Row>


</Container>
    

    </div>
   
  )
}

export default MostPopularBooks