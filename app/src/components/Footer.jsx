import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconStyle = {
    width: 20,
    height: 20,
    marginRight: 8,
    transition: 'transform 0.3s ease',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#f8f9fa',
    textDecoration: 'none',
    margin: '0.5rem 0',
    transition: 'color 0.3s ease',
  };

  return (
    <footer className="bg-dark py-4 mt-5">
      <Container>
        <Row className="justify-content-center text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-primary mb-3">Uday Kiran Pedda</h5>
            <p className="text-muted">
              Full Stack Developer & Blockchain Expert specializing in MERN Stack and Ethereum development.
            </p>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-primary mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={linkStyle}>Home</a></li>
              <li><a href="/about" style={linkStyle}>About</a></li>
              <li><a href="/projects" style={linkStyle}>Projects</a></li>
              <li><a href="/contact" style={linkStyle}>Contact</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="text-primary mb-3">Connect</h5>
            <div>
              <a 
                href="https://github.com/udaykiranhub?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                className="hover-effect"
                onMouseOver={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.color = '#0d6efd';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = '#f8f9fa';
                }}
              >
                <Github style={iconStyle} /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/uday-kiran-pedda-65aa73271" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                className="hover-effect"
                onMouseOver={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.color = '#0d6efd';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = '#f8f9fa';
                }}
              >
                <Linkedin style={iconStyle} /> LinkedIn
              </a>
              <a 
                href="mailto:peddaudaykiran1@gmail.com" 
                style={linkStyle}
                className="hover-effect"
                onMouseOver={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.color = '#0d6efd';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = '#f8f9fa';
                }}
              >
                <Mail style={iconStyle} /> Email
              </a>
              <a 
                href="tel:+916305355185" 
                style={linkStyle}
                className="hover-effect"
                onMouseOver={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.color = '#0d6efd';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.firstChild.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = '#f8f9fa';
                }}
              >
                <Phone style={iconStyle} /> +91 6305355185
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 bg-secondary" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-muted">
              &copy; {currentYear} Uday Kiran Pedda. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;