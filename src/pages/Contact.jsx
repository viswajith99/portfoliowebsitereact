import React, { useState } from 'react';
import './Contact.css';
import { Button,  Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      
      setTimeout(() => {
        
        setName('');
        setEmail('');
        setMessage('');
        
        setSuccessMessage('Message sent successfully!');
        
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      }, 1000);
    }
  };

  const validateForm = () => {
    
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return false;
    } else if (!/^[a-zA-Z\s]*$/.test(name.trim())) {
      setErrorMessage('Name can only contain letters and spaces.');
      return false;
    } else if (name.trim().length < 3) {
      setErrorMessage('Name must be at least 3 characters.');
      return false;
    }

    if (!email.trim()) {
      setErrorMessage('Please enter your email.');
      return false;
    } else if (!isValidEmail(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    if (!message.trim()) {
      setErrorMessage('Please enter your message.');
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="bg-image">
      <Row>
        <div className="col-12 md-auto about-bgcolor about">
          <h1 className="f-h1">Contact</h1>
          <p className="f-para">Get in touch with me via social media or email.</p>
          <ul className="s-mediaicon mt-40">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100087957264398">
                <FaFacebook className="facebook-icon fb-color " />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/v_i_s_w_a___jith_111">
                <FaInstagram className="instagram-icon insta " />
              </a>
            </li>
            <li>
              <a href="#">
                <FaWhatsapp className="whatsapp-icon whtapp " />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/viswajith-haridas-a21876245">
                <FaLinkedin className="linkedin-icon linkedin-color" />
              </a>
            </li>
          </ul>
        </div>
      </Row>

      <Row>
        <div className="row contact-section bg-body">
          <div className="col-12 about">
            <h2 style={{ textAlign: 'center' }}>Send me an email</h2>
          </div>

          <form onSubmit={handleSubmit} action="success.html">
            {errorMessage && (
              <div id="message" className="alert alert-danger">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div id="message" className="alert alert-success">
                {successMessage}
              </div>
            )}
            <div className="col-md-6 mx-5">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control email-box"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text"></div>
            </div>

            <div className="col-md-6 mx-5 form-floating email-box my-4">
              <label htmlFor="Textarea" className="text-area my-0">
                Message
              </label>
              <textarea
                className="form-control"
                cols="40"
                rows="10"
                placeholder="Leave a comment here"
                id="Textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <Button type="submit" className="btn btn-dark btn-email my-4">
                Send email
              </Button>
            </div>
          </form>
        </div>
      </Row>
    </div>
  );
};

export default Contact;
