import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import EducationDetails from './EducationDetails';

const About = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch('./education.json')
      .then((response) => response.json())
      .then((data) => setEducationData(data.educationData))
      .catch((error) => console.error('Error fetching education data:', error));
  }, []);

  return (
    <div className="bg-image">
      <Container className="py-5">


        <Row className='my-3'>
          <h1>About</h1>
        </Row>
        <Row>
          <Col md={12}>
            <p className='p-abt'>Summary</p>
            <p className= 'text-abt-summary'>I am a passionate MERN stack developer with a strong foundation in building scalable web applications. My expertise lies in utilizing MongoDB, Express.js, React.js, and Node.js to deliver robust solutions tailored to meet diverse client needs.</p>

            <p className='p-abt'>Skills</p>
            <p className='text-abt-summary'>Frontend: React.js, Redux, HTML, CSS, JavaScript
            Backend: Node.js, Express.js, RESTful APIs, MongoDB
            Tools & Technologies: Git, VS Code, Postman, Mongoose, Firebase</p>
          </Col>


          <Col md={12} className='my-3 px-2'>
            <h1>Education Details</h1>
            {educationData.map((education, index) => (
              <EducationDetails key={index} education={education} />
            ))}
          </Col>




        </Row>



      </Container>
    </div>
  );
}

export default About;
