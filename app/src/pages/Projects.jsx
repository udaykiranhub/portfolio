

import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Badge, 
  Button, 
  Tab, 
  Nav,
  Modal
} from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

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
      title: "Student Portfolio ",
      description: "This platform provides interaction between students through their skills and ideas",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Solidity","Ethereum","web3.js"],
      features: [
      "Student can create own profile",
      "Student can share ideas",
      "Student can find skilled peoples"
      ], 
      category: "MERN Stack"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "This is the platform to buy and sell the natrual products.",
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
      id: 4,
      title: "Decentralized Voting Application",
      description: "A blockchain-based voting system using Ethereum for secure and transparent elections.",
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
      id: 5,
      title: "DeFi Staking Platform",
      description: "A decentralized finance application for staking cryptocurrency tokens.",
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
      id: 6,
      title: "Supply Chain Management",
      description: "Blockchain solution for tracking agricultural products through various supply chain stages.",
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
      title: "USDT pool for web2 services",
      description: "This platform provides a way to access web2 resource with USDT tokens.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "MERN"],
      features: [
        "Provides pool for USDT",
        "Rewards as per stake",
        "Can access the service from the web2"
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
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text className="text-muted">{project.description}</Card.Text>
            <div className="d-flex flex-wrap mt-3 gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Badge 
                  key={index} 
                  bg={project.category === "MERN Stack" ? "primary" : "primary"}
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
            <Badge bg={project.category === "MERN Stack" ? "info" : "info"} pill>
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

  const ProjectModal = ({ project, show, handleClose }) => {
    return (
      <Modal show={show} onHide={handleClose} size="lg" centered className="project-modal">
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <h5>Description</h5>
          <p>{project.description}</p>
          
          <h5 className="mt-4">Features</h5>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          
          <h5 className="mt-4">Technologies</h5>
          <div className="d-flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge 
                key={idx} 
                bg={project.category === "MERN Stack" ? "primary" : "warning"}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark border-secondary">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" as="a" href="#" target="_blank">
            <Github size={16} className="me-2" /> View Code
          </Button> */}
        </Modal.Footer>
      </Modal>
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