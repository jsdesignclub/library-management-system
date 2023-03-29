import React from 'react'
import Book from '../image/book.png';
import audio from '../image/audiobook.png';
import video from '../image/video-camera.png';
import quizz from '../image/quizzes.png';
import "../style/chatagory.css"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
function Chatagory() {
  return (
    <div>
      

      <Container>
        <Row className='cat'>
        <Col  className='box'>
        <img src={Book} alt="Logo" />
        <p>Book</p>
        </Col>
        <Col className='box'>
        <img src={audio} alt="Logo" />
        <p>Audio Book</p>
        
        </Col>
        <Col className='box'>
          
        <img src={video} alt="Logo" />
        <p>Video Book</p>
        </Col>
        <Col className='box'>
          
          
        <img src={quizz} alt="Logo" />
        <p>Quizz</p>
          
          </Col>
        </Row>
      </Container>



    </div>
  )
}

export default Chatagory;