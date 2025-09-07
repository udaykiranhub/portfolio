import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Badge, Alert } from 'react-bootstrap';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MessageSquare,
  Send
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: contentRef, inView: contentIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Form is valid, show success message
      setShowSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setShowSuccess(false);
      }, 3000);
    }
    
    setValidated(true);
  };

  return (
    <div className="contact-page page-section">
      <Container>
        <div ref={headingRef} className="mb-5 text-center" style={{ 
          transition: 'all 0.8s ease-out',
          opacity: headingIsVisible ? 1 : 0,
          transform: headingIsVisible ? 'translateY(0)' : 'translateY(20px)'
        }}>
          <h1 className="section-title">Get In Touch</h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: '800px' }}>
Feel free to reach out for collaboration.
          </p>
        </div>
        
        <div ref={contentRef} style={{ 
          transition: 'all 0.8s ease-out',
          opacity: contentIsVisible ? 1 : 0,
          transform: contentIsVisible ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '0.2s'
        }}>
          <Row className="g-5">
            {/* <Col lg={5} > */}
              <Col xs={12} md={8} lg={5} className="mx-auto text-center">
              <Card className="bg-dark text-light border-0 shadow h-100">
                <Card.Body className="p-4">
                  <h3 className="mb-4 text-primary d-flex align-items-center gap-2">
                    <MessageSquare size={24} /> Contact Information
                  </h3>
                  
                  <div className="contact-info">
                    <div className="contact-item d-flex align-items-center mb-4">
                      <div className="contact-icon bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h5 className="mb-1">Email</h5>
                        <a href="mailto:peddaudaykiran1@gmail.com" className="text-decoration-none text-light">
                          peddaudaykiran1@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="contact-item d-flex align-items-center mb-4">
                      <div className="contact-icon bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h5 className="mb-1">Phone</h5>
                        <a href="tel:+916305355185" className="text-decoration-none text-light">
                          +91 6305355185
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="mt-5 mb-4 text-primary">Connect With Me</h4>
                  <div className="social-links d-flex gap-3">
                    <a 
                      href="https://github.com/udaykiranhub?tab=repositories" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/uday-kiran-pedda-65aa73271" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a 
                      href="https://twitter.com/UdayKir03362466?t=ZF7UaXqGV9zrYER1e13xpQ&s=08" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                    >
                      <Twitter size={24} />
                    </a>
                    {/* <a 
                      href="https://www.instagram.com/u_day_k_iran?igsh=b3huY3lvcXB2OXhh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                    >
                      <Instagram size={24} />
                    </a> */}
                  </div>
                  
      


                </Card.Body>
              </Card>
            </Col>
            
            {/* <Col lg={7}>
              <Card className="bg-dark text-light border-0 shadow h-100">
                <Card.Body className="p-4">
                  <h3 className="mb-4 text-primary d-flex align-items-center gap-2">
                    <Send size={24} /> Send Me a Message
                  </h3>
                  
                  {showSuccess && (
                    <Alert variant="success" className="mb-4 animate__animated animate__fadeIn">
                      Your message has been sent successfully! I'll get back to you soon.
                    </Alert>
                  )}
                  
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="contactName">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="bg-dark text-light border-secondary"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="contactEmail">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="bg-dark text-light border-secondary"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email address.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="contactSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject"
                        required
                        className="bg-dark text-light border-secondary"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a subject.
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="contactMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Your message here..."
                        required
                        className="bg-dark text-light border-secondary"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your message.
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <div className="text-end">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        className="px-4 d-inline-flex align-items-center gap-2"
                      >
                        Send Message <Send size={18} />
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </div>
      </Container>
      
      <style jsx="true">{`
        .contact-icon {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover .contact-icon {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(13, 110, 253, 0.5);
        }
        
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #1a1a1a;
          color: #fff;
          transition: all 0.3s ease;
          border: 1px solid #333;
        }
        
        .social-link:hover {
          background-color: #0d6efd;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          border-color: #0d6efd;
        }
      `}</style>
    </div>
  );
};

export default Contact;