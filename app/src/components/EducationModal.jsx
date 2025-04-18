import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { BookOpen, GraduationCap, School } from 'lucide-react';

const EducationModal = ({ show, handleClose }) => {
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
        <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0d6efd" }}>
          <BookOpen className="me-2" size={28} /> Education
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="bg-dark text-light">
        <Alert variant="success" className="education-alert">
          <div className="education-item d-flex align-items-center mb-3">
            <School className="education-icon me-3" size={24} />
            <div>
              <strong>Institute:</strong> Lendi Institute of Engineering and Technology
            </div>
          </div>
          
          <div className="education-item d-flex align-items-center mb-3">
            <BookOpen className="education-icon me-3" size={24} />
            <div>
              <strong>Degree:</strong> Bachelor of Technology (B.Tech)
            </div>
          </div>
          
          <div className="education-item d-flex align-items-center">
            <GraduationCap className="education-icon me-3" size={24} />
            <div>
              <strong>Specialization:</strong> Computer Science and Engineering
            </div>
          </div>
        </Alert>
        
        <div className="p-3">
          <h4 className="text-primary mb-3">Educational Journey</h4>
          <p>
            Throughout my academic journey, I focused on building a strong foundation in computer science fundamentals
            while also exploring emerging technologies like blockchain and modern web development frameworks.
          </p>
          
          <h4 className="text-primary mt-4 mb-3">Key Courses</h4>
          <ul className="list-styled">
            <li className="mb-2">Data Structures and Algorithms</li>
            <li className="mb-2">Web Technologies</li>
            <li className="mb-2">Database Management Systems</li>
            <li className="mb-2">Software Engineering</li>
            <li className="mb-2">Cloud Computing</li>
            <li className="mb-2">Computer Networks</li>
          </ul>
        </div>
      </Modal.Body>
      
      <Modal.Footer className="bg-dark text-light border-0">
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EducationModal;