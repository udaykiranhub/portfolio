import React, { useState, useEffect } from 'react';
import { Navbar as BsNavbar, Container, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close navbar on route change
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const navbarStyles = {
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? '#121212' : 'transparent',
    boxShadow: scrolled ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
    padding: scrolled ? '0.5rem 1rem' : '1rem',
  };

  const linkStyles = {
    color: '#fff',
    margin: '0 0.5rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const activeLinkStyles = {
    ...linkStyles,
    color: '#0d6efd',
    fontWeight: '600',
  };

  return (
    <BsNavbar 
      expand="lg" 
      variant="dark" 
      fixed="top" 
      expanded={expanded} 
      style={navbarStyles}
    >
      <Container>
        <BsNavbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <Code size={24} className="me-2" />
          <span 
            style={{ 
              fontWeight: 'bold', 
              letterSpacing: '1px',
              background: 'linear-gradient(90deg, #0d6efd, #0dcaf0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            UDAY KIRAN
          </span>
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0 shadow-none"
        >
          {expanded ? <X size={24} /> : <Menu size={24} />}
        </BsNavbar.Toggle>
        
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              style={({ isActive }) => isActive ? activeLinkStyles : linkStyles}
              end
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              style={({ isActive }) => isActive ? activeLinkStyles : linkStyles}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/projects" 
              style={({ isActive }) => isActive ? activeLinkStyles : linkStyles}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              style={({ isActive }) => isActive ? activeLinkStyles : linkStyles}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
