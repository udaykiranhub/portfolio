import React from 'react';
import { Modal, Button, ListGroup, Card, Badge, Container, Row, Col } from 'react-bootstrap';
import { Code, Database, Server, Globe, Cpu, PenTool as Tool, Cloud } from 'lucide-react';

const SkillsModal = ({ show, handleClose }) => {
  const skills = [
    {
      category: "Web Development",
      icon: <Code size={24} />,
      color: "primary",
      skills: [
        { name: "MERN Stack", details: "MongoDB, Express.js, React.js, Node.js" },
        { name: "Bootstrap", details: "Responsive design and UI components" },
        { name: "Material UI", details: "Responsive design and UI components" },
        { name: "React.js", details: "Building dynamic user interfaces" },
        { name: "Redux", details: "State management for React applications" },
        { name: "HTML/CSS", details: "Markup and styling for web pages" },
        { name: "SEO", details: "Search engine optimization techniques" },
      ],
    },
    {
      category: "Backend Development",
      icon: <Server size={24} />,
      color: "success",
      skills: [
        { name: "Express.js", details: "Backend framework for server maintenance" },
        { name: "Node.js", details: "JavaScript runtime for backend development" },
        { name: "RESTful APIs", details: "API development and integration" },
      ],
    },
    {
      category: "Databases",
      icon: <Database size={24} />,
      color: "info",
      skills: [
        { name: "MongoDB", details: "NoSQL database for modern applications" },
        { name: "Mongoose", details: "MongoDB object modeling for Node.js" },
        { name: "MongoDB Aggregations", details: "Advanced data processing" },
      ],
    },
    {
      category: "Blockchain",
      icon: <Globe size={24} />,
      color: "warning",
      skills: [
        { name: "Ethereum Blockchain", details: "Building decentralized applications (dApps)" },
        { name: "Solidity", details: "Developing and deploying smart contracts" },
        { name: "Foundry & Truffle", details: "Testing and deploying smart contracts" },
        { name: "Smart Contract Auditing", details: "Identifying and mitigating security vulnerabilities" },
        { name: "DeFi Protocols", details: "Development and integration" },
        { name: "NFT", details: "Non-fungible token development" },
        { name: "Web3.js", details: "Ethereum JavaScript API" },
        { name: "IPFS", details: "Decentralized storage solution" },
      ],
    },
    {
      category: "Programming Languages",
      icon: <Cpu size={24} />,
      color: "danger",
      skills: [
        { name: "JavaScript", details: "Web and server-side development" },
        { name: "Python", details: "Used for DSA and problem-solving" },
        { name: "Solidity", details: "Smart contract development" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <Tool size={24} />,
      color: "secondary",
      skills: [
        { name: "Git/GitHub", details: "Version control and collaboration" },
        { name: "Postman", details: "API testing and documentation" },
        { name: "Mocha/Chai", details: "JavaScript testing frameworks" },
      ],
    },
    {
      category: "Cloud Services",
      icon: <Cloud size={24} />,
      color: "info",
      skills: [
        { name: "AWS Services", details: "Connecting websites to cloud services" },
        { name: "Render", details: "Web application hosting" },
        { name: "Vercel", details: "Frontend deployment" },
        { name: "Cloudinary", details: "Media storage and optimization" },
      ],
    },
  ];

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      backdrop="static"
      keyboard={false}
      dialogClassName="skills-modal"
    >
      <Modal.Header closeButton className="bg-dark text-light border-0">
        <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#ffc107" }}>
          <Code className="me-2" size={28} /> My Skills
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="bg-dark text-light">
        <Container>
          {skills.map((skillCategory, index) => (
            <Row key={index} className="mb-4">
              <Col xs={12}>
                <Card className="bg-dark text-light border-0 shadow-sm">
                  <Card.Body>
                    <Card.Title className={`text-${skillCategory.color} d-flex align-items-center mb-3`}>
                      <span className="me-2">{skillCategory.icon}</span> 
                      {skillCategory.category}
                    </Card.Title>
                    <ListGroup variant="flush">
                      {skillCategory.skills.map((skill, idx) => (
                        <ListGroup.Item
                          key={idx}
                          className="d-flex justify-content-between align-items-start bg-dark text-light border-bottom border-secondary py-2"
                        >
                          <div>
                            <h5 className="mb-1">{skill.name}</h5>
                            <small className="text-muted">{skill.details}</small>
                          </div>
                          <Badge bg={skillCategory.color} pill>
                            Skill
                          </Badge>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </Modal.Body>
      
      <Modal.Footer className="bg-dark text-light border-0">
        <Button variant="warning" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SkillsModal;