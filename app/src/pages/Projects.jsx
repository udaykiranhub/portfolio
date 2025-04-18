import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Tab, Nav } from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: contentRef, inView: contentIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mernProjects = [
    {
      id: 1,
      title: "School Management Application",
      description: "A complete school management system from LKG to Degree with multiple user dashboards.",
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
      features: [
        "Multi-level user dashboards (Main Admin, Branch Admin, Teacher)",
        "Student information management",
        "Attendance tracking",
        "Grade management",
        "Scheduling system"
      ],
      category: "MERN Stack"
    },
    {
      id: 2,
      title: "Student Portfolio Website",
      description: "A platform for students to showcase their skills and connect with others.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Material UI"],
      features: [
        "User profiles with customizable portfolios",
        "Project showcase section",
        "Skill endorsement system",
        "Networking features",
        "Responsive design"
      ],
      category: "MERN Stack"
    },
    {
      id: 3,
      title: "Workers Management Website",
      description: "A platform for seamless collaboration among workers and teams.",
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      features: [
        "Team management and organization",
        "Task assignment and tracking",
        "Real-time collaboration tools",
        "Performance metrics",
        "Time tracking"
      ],
      category: "MERN Stack"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A Redux-based e-commerce product listing with advanced search and filter functionality.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Bootstrap"],
      features: [
        "Advanced search and filtering",
        "Product categorization",
        "Shopping cart functionality",
        "User authentication",
        "Responsive design"
      ],
      category: "MERN Stack"
    }
  ];

  const blockchainProjects = [
    {
      id: 5,
      title: "Decentralized Voting Application",
      description: "A blockchain-based voting system using Ethereum for secure and transparent elections.",
      image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React.js", "MetaMask"],
      features: [
        "Secure, tamper-proof voting",
        "Voter verification",
        "Real-time result tallying",
        "Transparent audit trail",
        "MetaMask integration"
      ],
      category: "Blockchain"
    },
    {
      id: 6,
      title: "DeFi Staking Platform",
      description: "A decentralized finance application for staking cryptocurrency tokens.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React.js", "Truffle"],
      features: [
        "Token staking functionality",
        "Reward distribution system",
        "Liquidity pool management",
        "APY calculation",
        "Wallet integration"
      ],
      category: "Blockchain"
    },
    {
      id: 7,
      title: "Supply Chain Management",
      description: "Blockchain solution for tracking agricultural products through various supply chain stages.",
      image: "https://images.pexels.com/photos/2130137/pexels-photo-2130137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Solidity", "Ethereum", "IPFS", "React.js", "Node.js"],
      features: [
        "Product tracking from farm to consumer",
        "QR code integration",
        "Quality verification",
        "Timestamped records",
        "Decentralized storage with IPFS"
      ],
      category: "Blockchain"
    },
    {
      id: 8,
      title: "Flight Booking Smart Contract",
      description: "A decentralized system for secure flight bookings using cryptocurrency.",
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React.js", "Bootstrap"],
      features: [
        "Secure flight booking",
        "Automatic refund system",
        "Loyalty program integration",
        "Real-time flight status updates",
        "Cryptocurrency payment processing"
      ],
      category: "Blockchain"
    }
  ];

  const allProjects = [...mernProjects, ...blockchainProjects];

  const openProjectDetails = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const closeProjectDetails = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  const renderProjectCard = (project) => {
    return (
      <Col md={6} lg={4} className="mb-4" key={project.id}>
        <Card className="h-100 bg-dark text-light border-0 shadow">
          <div className="position-relative project-card-img-container">
            <Card.Img 
              variant="top" 
              src={project.image} 
              alt={project.title}
              className="project-card-img"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="project-overlay">
              <Button 
                variant="primary" 
                className="view-btn"
                onClick={() => openProjectDetails(project)}
              >
                View Details
              </Button>
            </div>
          </div>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text className="text-muted">{project.description}</Card.Text>
            <div className="d-flex flex-wrap mt-3 gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Badge 
                  key={index} 
                  bg={project.category === "MERN Stack" ? "primary" : "warning"}
                  className="me-1"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge bg="secondary">+{project.technologies.length - 3}</Badge>
              )}
            </div>
          </Card.Body>
          <Card.Footer className="bg-dark border-0 d-flex justify-content-between">
            <Badge bg={project.category === "MERN Stack" ? "info" : "warning"} pill>
              {project.category}
            </Badge>
            <Button 
              variant="link" 
              className="p-0 text-light" 
              onClick={() => openProjectDetails(project)}
            >
              <ExternalLink size={18} />
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <div className="projects-page page-section">
      <Container>
        <div ref={headingRef} className="mb-5 text-center" style={{ 
          transition: 'all 0.8s ease-out',
          opacity: headingIsVisible ? 1 : 0,
          transform: headingIsVisible ? 'translateY(0)' : 'translateY(20px)'
        }}>
          <h1 className="section-title">My Projects</h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: '800px' }}>
            A collection of my work across various technologies and domains.
          </p>
        </div>
        
        <div ref={contentRef} style={{ 
          transition: 'all 0.8s ease-out',
          opacity: contentIsVisible ? 1 : 0,
          transform: contentIsVisible ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '0.2s'
        }}>
          <Tab.Container id="projects-tabs" defaultActiveKey="all">
            <Nav variant="pills" className="mb-4 justify-content-center flex-wrap">
              <Nav.Item>
                <Nav.Link eventKey="all" className="mx-2 mb-2">All Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mern" className="mx-2 mb-2">MERN Stack</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="blockchain" className="mx-2 mb-2">Blockchain</Nav.Link>
              </Nav.Item>
            </Nav>
            
            <Tab.Content>
              <Tab.Pane eventKey="all">
                <Row>
                  {allProjects.map(project => renderProjectCard(project))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="mern">
                <Row>
                  {mernProjects.map(project => renderProjectCard(project))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="blockchain">
                <Row>
                  {blockchainProjects.map(project => renderProjectCard(project))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          
          <div className="text-center mt-5">
            <a 
              href="https://github.com/udaykiranhub?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2"
            >
              <Github size={20} /> View More on GitHub
            </a>
          </div>
        </div>
      </Container>
      
      {/* Project Details Modal */}
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          show={showModal} 
          handleClose={closeProjectDetails} 
        />
      )}
      
      <style jsx="true">{`
        .project-card-img-container {
          overflow: hidden;
          position: relative;
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .card:hover .project-overlay {
          opacity: 1;
        }
        
        .view-btn {
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        
        .card:hover .view-btn {
          transform: translateY(0);
        }
        
        .nav-pills .nav-link {
          color: #fff;
          background-color: transparent;
          border: 1px solid #6c757d;
          transition: all 0.3s ease;
        }
        
        .nav-pills .nav-link:hover {
          border-color: #0d6efd;
        }
        
        .nav-pills .nav-link.active {
          background-color: #0d6efd;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Projects;