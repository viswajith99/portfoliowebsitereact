import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="body-bgimg ">
    <Container className="py-5 bg-image">
    <Row>
      <Col md={8} className='txt-px'>
        <p>
        HI 
        </p>
        <p>
          IAM , VISWAJITH HARIDAS </p>
      </Col>
      <Col md={4}>
      <Image src="./homeimage.jpg" alt="Profile Picture" className='wid-high 'rounded fluid/>
      </Col>

      </Row>
      <Row>
      <Col md={8} className='txt-px'>
       
        <p> 
        WELCOME </p>
        TO
        <p>
          MY WEBSITE </p>
      </Col>
      <Col md={4} >
        
        <Card style={{ width: '18rem' }} >
      <Card.Header className='list-bg'>MERN STACK DEVELOPER</Card.Header>
      <ListGroup variant="flush" className='list-bg'>
        <ListGroup.Item className='list-bg'>Mongo db</ListGroup.Item>
        <ListGroup.Item className='list-bg'>Express js</ListGroup.Item>
        <ListGroup.Item className='list-bg'>React js</ListGroup.Item>
        <ListGroup.Item className='list-bg'>Node js</ListGroup.Item>
    
      </ListGroup>
    </Card>
      </Col>

      </Row>
     
    
    
      
    </Container>
    </div>
  );
};

export default Home;
