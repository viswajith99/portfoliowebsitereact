import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import './EducationDetails.css';

const EducationDetails = ({ education }) => {
  return (
    <Row>
      <Col md={6} className='my-2 '>
        <ListGroup variant="flush">
          <ListGroup.Item className='listgpcolor'>Qualification: {education.qualification}</ListGroup.Item>
          <ListGroup.Item className='listgpcolor'>Institution: {education.institution}</ListGroup.Item>
          {education.course && <ListGroup.Item className='listgpcolor'>Course: {education.course}</ListGroup.Item>}
          <ListGroup.Item className='listgpcolor'>Year: {education.year}</ListGroup.Item>
        </ListGroup>
      </Col>
      

    </Row>


  );
}

export default EducationDetails;