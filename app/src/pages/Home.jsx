import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, ChevronRight,MapPin, MapIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import SkillsSearch from '../components/SkillsSearch';
import ExperienceTimeline from '../components/ExpreiencedTimeLines';
import SecurityResearch from '../components/SecurityResearcher';
const Home = () => {
  const navigate = useNavigate();
  
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: contentRef, inView: contentIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  });
  
  const { ref: buttonsRef, inView: buttonsIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 600,
  });

  return (
    <>
      <div className="hero-section bg-dark" style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #121212 100%)',
        minHeight: '100vh',
        paddingTop: '6rem',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="text-center text-lg-start">
              <div ref={headingRef} className={`${headingIsVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ 
                transition: 'all 0.8s ease-out',
                opacity: headingIsVisible ? 1 : 0,
                transform: headingIsVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
                <h1 className="display-4 fw-bold mb-3">
                  Hello, I'm <span className="text-primary">Uday Kiran Pedda</span>
                </h1>
                <div className="typed-text mb-4">
                  <h3>
                    <span className="text-primary fw-bold" style={{ borderRight: '3px solid #0d6efd', paddingRight: '5px', animation: 'blink 1s step-end infinite' }}>
                 Welcome to the Web2 && Web3 Space 
                    </span>
                  </h3>
                </div>
              </div>
              
              <div ref={contentRef} className={`mb-4 ${contentIsVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ 
                transition: 'all 0.8s ease-out',
                opacity: contentIsVisible ? 1 : 0,
                transform: contentIsVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.2s'
              }}>
                <p className="lead text-light">
       
                </p>
               
              </div>
            <SecurityResearch/>
              <ExperienceTimeline/> 


              <div ref={buttonsRef} className={`d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start ${buttonsIsVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ 
                transition: 'all 0.8s ease-out',
                opacity: buttonsIsVisible ? 1 : 0,
                transform: buttonsIsVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.4s'
              }}>
                <Button 
                  variant="primary" 
                  className="px-4 py-2 rounded-pill d-flex align-items-center"
                  onClick={() => navigate('/projects')}
                >
                  View Projects <ChevronRight size={18} className="ms-1" />
                </Button>
                <Button 
                  variant="outline-light" 
                  className="px-4 py-2 rounded-pill d-flex align-items-center"
                  onClick={() => navigate('/contact')}
                >
                  Contact Me <ChevronRight size={18} className="ms-1" />
                </Button>
              </div>
              <p></p>
              <h6> <MapPin/> India,Andhra Pradesh, Vizianagaram </h6>
              <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start" style={{ 
                transition: 'all 0.8s ease-out',
                opacity: buttonsIsVisible ? 1 : 0,
                transform: buttonsIsVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.6s'
              }}>
                <a href="https://github.com/udaykiranhub?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={22} className="text-light" />
                </a>
                <a href="https://www.linkedin.com/in/uday-kiran-pedda-65aa73271" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={22} className="text-light" />
                </a>
                <a href="https://x.com/UdayKir03362466?t=ZF7UaXqGV9zrYER1e13xpQ&s=08" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Twitter size={22} className="text-light" />
                </a>
                <a href="https://www.instagram.com/u_day_k_iran?igsh=b3huY3lvcXB2OXhh" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Instagram size={22} className="text-light" />
                </a>
              </div>
            </Col>
            
            <Col lg={5} className="mt-5 mt-lg-0">
              <div className="position-relative" style={{ 
                transition: 'all 0.8s ease-out',
                opacity: contentIsVisible ? 1 : 0,
                transform: contentIsVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.4s'
              }}>
                <div className="skill-search-container p-4 rounded-3" style={{ 
                  background: 'rgba(30, 30, 30, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                }}>
                  <h3 className="mb-3 text-primary text-center">What I’m Good At</h3>
                  <SkillsSearch />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <style jsx="true">{`
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: #0d6efd;
          transform: translateY(-3px);
        }
        
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #0d6efd; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Home;