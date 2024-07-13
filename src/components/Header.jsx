import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <Navbar expand="lg" className='header-color header '>
      <Container>
        <Navbar.Brand as ={Link} to ={"./"}>Viswajith Haridas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as ={ Link } to ='/'></Nav.Link>
         
          </Nav>
          <Nav>
          <Nav.Link as ={ Link } to ={'/about'}>About</Nav.Link>
          <Nav.Link as ={ Link } to ={'/book'}>Book</Nav.Link>
          <Nav.Link as ={ Link } to ={'/blog'}>Blog</Nav.Link>
          <Nav.Link as ={ Link } to ={'/contact'}>Contact</Nav.Link>
            <Nav.Link href="https://www.instagram.com/v_i_s_w_a___jith_111"><FaInstagram /></Nav.Link>
            <Nav.Link href="#link"><FaWhatsapp /></Nav.Link>
            <Nav.Link href="linkedin.com/in/viswajith-haridas-a21876245"><FaLinkedin /></Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100087957264398"><FaFacebook /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
