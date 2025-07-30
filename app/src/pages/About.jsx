import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { BookOpen, Briefcase, Award, Cpu } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import EducationModal from '../components/EducationModal';
import ExpertiseModal from '../components/ExpertiseModal';
import SkillsModal from '../components/SkillsModal';

const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: contentRef, inView: contentIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleEducationShow = () => setShowEducation(true);
  const handleEducationClose = () => setShowEducation(false);
  
  const handleExpertiseShow = () => setShowExpertise(true);
  const handleExpertiseClose = () => setShowExpertise(false);
  
  const handleSkillsShow = () => setShowSkills(true);
  const handleSkillsClose = () => setShowSkills(false);

  return (
    <div className="about-page page-section">
      <Container>
        <div ref={headingRef} className="mb-5 text-center" style={{ 
          transition: 'all 0.8s ease-out',
          opacity: headingIsVisible ? 1 : 0,
          transform: headingIsVisible ? 'translateY(0)' : 'translateY(20px)'
        }}>
          <h1 className="section-title">About Me</h1>
          {/* <p className="lead text-light mx-auto" style={{ maxWidth: '800px' }}>
            Passionate Full Stack Developer and Blockchain Expert with a focus on building 
            innovative, secure, and scalable applications.
          </p> */}
        </div>
        
        <div ref={contentRef} style={{ 
          transition: 'all 0.8s ease-out',
          opacity: contentIsVisible ? 1 : 0,
          transform: contentIsVisible ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '0.2s'
        }}>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 bg-dark text-light border-0 shadow">
                <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                  <div className="icon-container mb-3 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style={{ width: '80px', height: '80px' }}>
                    <BookOpen size={40} className="text-primary" />
                  </div>
                  <Card.Title className="mb-3 text-primary">Education</Card.Title>
                  <Card.Text>
                    Bachelor of Technology (B.Tech) in Computer Science and Engineering from Lendi Institute of Engineering and Technology.
                  </Card.Text>
                  <Button 
                    variant="outline-primary" 
                    className="mt-auto rounded-pill px-4"
                    onClick={handleEducationShow}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={4}>
              <Card className="h-100 bg-dark text-light border-0 shadow">
                <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                  <div className="icon-container mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10" style={{ width: '80px', height: '80px' }}>
                    <Briefcase size={40} className="text-success" />
                  </div>
                  <Card.Title className="mb-3 text-success">Expertise</Card.Title>
                  <Card.Text>
                    Specialized in Web Page Optimization, Efficient DApp Development, Redux State Management, and Smart Contract Auditing.
                  </Card.Text>
                  <Button 
                    variant="outline-success" 
                    className="mt-auto rounded-pill px-4"
                    onClick={handleExpertiseShow}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={12} lg={4}>
              <Card className="h-100 bg-dark text-light border-0 shadow">
                <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                  <div className="icon-container mb-3 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-10" style={{ width: '80px', height: '80px' }}>
                    <Cpu size={40} className="text-warning" />
                  </div>
                  <Card.Title className="mb-3 text-warning">Skills</Card.Title>
                  <Card.Text>
                    Proficient in MERN Stack,  Blockchain Development .
                  </Card.Text>
                  <Button 
                    variant="outline-warning" 
                    className="mt-auto rounded-pill px-4"
                    onClick={handleSkillsShow}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col lg={12}>




              <Card className="bg-dark text-light border-0 shadow p-4">
                <Card.Body>
                  <h3 className="mb-4 text-primary">Objective</h3>
<p className="lead">

Aiming to grow by building modern Web2 and Web3 applications, exploring smart contract security, and improving my skills in full-stack development.
</p>


       
          </Card.Body>
              </Card>






            </Col>
          </Row>
        </div>
      </Container>
      
      {/* Modals */}
      <EducationModal show={showEducation} handleClose={handleEducationClose} />
      <ExpertiseModal show={showExpertise} handleClose={handleExpertiseClose} />
      <SkillsModal show={showSkills} handleClose={handleSkillsClose} />
    </div>
  );
};

export default About;