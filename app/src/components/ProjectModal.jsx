import React from 'react';
import { Modal, Button, Badge, ListGroup } from 'react-bootstrap';
import { Code, Globe, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, show, handleClose }) => {
  if (!project) return null;
  
  const isBlockchain = project.category === "Blockchain";
  
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
        <Modal.Title className="d-flex align-items-center">
          {isBlockchain ? (
            <Globe size={24} className="text-warning me-2" />
          ) : (
            <Code size={24} className="text-primary me-2" />
          )}
          <span style={{ color: isBlockchain ? "#ffc107" : "#0d6efd" }}>
            {project.title}
          </span>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="bg-dark text-light">
        <div className="project-image mb-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="img-fluid rounded"
            style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>
        
        <div className="project-details">
          <h4 className="mb-3">About the Project</h4>
          <p>{project.description}</p>
          
          <div className="mb-4">
            <h5 className="mb-2">Technologies Used</h5>
            <div className="d-flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  bg={isBlockchain ? "warning" : "primary"}
                  className="py-2 px-3"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="mb-2">Key Features</h5>
            <ListGroup variant="flush">
              {project.features.map((feature, index) => (
                <ListGroup.Item 
                  key={index}
                  className="bg-dark text-light border-bottom border-secondary py-2 ps-0"
                >
                  • {feature}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </Modal.Body>
      
      <Modal.Footer className="bg-dark text-light border-0">
        <Button 
          variant="outline-light" 
          className="d-flex align-items-center gap-2"
          onClick={handleClose}
        >
          <ExternalLink size={18} />
          View Repository
        </Button>
        <Button 
          variant={isBlockchain ? "warning" : "primary"} 
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;