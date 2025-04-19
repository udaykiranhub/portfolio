import React from 'react';
import { Modal, Button, Alert, Badge } from 'react-bootstrap';
import { CheckCircle, Trophy, Code, Cloud, Cog } from 'lucide-react';

const ExpertiseModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="bg-dark text-light border-0">
        <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#198754" }}>
          <Cog className="me-2" size={28} /> My Expertise
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="bg-dark text-light">
        <Alert variant="success" className="expertise-alert">
          <strong style={{ fontSize: "1.4rem", color: "#198754" }}>Key Skills:</strong>
          <ul className="expertise-list list-unstyled mt-3">
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>Web Page Optimization</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>Web Hosting</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>Efficient DApp Development</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>Application State Management (Redux)</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>SEO Optimization</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>MongoDB Aggregation Pipeline</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>Integrating Cloud Services</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>IPFS Storage Solutions</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <CheckCircle className="expertise-icon me-3" size={20} /> 
              <span>
                Security Researcher {" "}
                <Badge bg="dark" pill className="ms-2">
           
                </Badge>
              </span>
            </li>
          </ul>
        </Alert>

        <Alert variant="success" className="expertise-alert mt-4">
          <strong style={{ fontSize: "1.4rem", color: "#198754" }}>Achievements:</strong>
          <ul className="expertise-list list-unstyled mt-3">
            <li className="mb-3 d-flex align-items-center">
              <Trophy className="expertise-icon me-3" size={20} /> 
              <span>Industrial Experience With internship and reelancing Tasks</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <Trophy className="expertise-icon me-3" size={20} /> 
              <span>Technical Lead in College Projects</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <Trophy className="expertise-icon me-3" size={20} /> 
              <span>Worked on Real-Time Projects</span>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <Trophy className="expertise-icon me-3" size={20} /> 
              <span>Hackathon Participation</span>
            </li>
       
          </ul>
        </Alert>
      </Modal.Body>
      
      <Modal.Footer className="bg-dark text-light border-0">
        <Button variant="success" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExpertiseModal;