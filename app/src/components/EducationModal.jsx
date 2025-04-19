import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { School, BookOpen, GraduationCap, Percent, MapPin } from 'lucide-react';

const EducationModal = ({ show, handleClose }) => {
  const educationItems = [
    {
      icon: <School size={20} className="text-primary" />,
      title: "Institute",
      value: "Lendi Institute of Engineering and Technology",
    },
    {
      icon: <BookOpen size={20} className="text-success" />,
      title: "Course",
      value: "B.Tech (Bachelor of Technology)",
    },
    {
      icon: <GraduationCap size={20} className="text-warning" />,
      title: "Specialization",
      value: "Computer Science and Engineering",
    },
    {
      icon: <Percent size={20} className="text-info" />,
      title: "Percentage",
      value: "80% ",
    },
    {
      icon: <MapPin size={20} className="text-secondary" />,
      title: "Location",
      value: "Vizianagaram, Andhra Pradesh,India",
    }
  ];

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="education-modal"
    >
      <Modal.Header closeButton className="bg-dark text-light border-secondary">
        <Modal.Title className="d-flex align-items-center">
          <School className="me-2" size={24} />
          <span>Education Details</span>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="bg-dark text-light p-0">
        <ListGroup variant="flush">
          {educationItems.map((item, index) => (
            <ListGroup.Item 
              key={index}
              className="bg-dark text-light border-secondary"
            >
              <div className="d-flex align-items-center py-2">
                <div className="me-3">
                  {item.icon}
                </div>
                <div>
                  <div className="text-muted small">{item.title}</div>
                  <div className="fw-medium">{item.value}</div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      
      <Modal.Footer className="bg-dark border-secondary">
        <Button 
          variant="primary" 
          onClick={handleClose}
          className="px-3"
        >
          Close
        </Button>
      </Modal.Footer>

      <style jsx="true">{`
        .education-modal .modal-content {
          border: 1px solid #444;
        }
        .education-modal .list-group-item {
          transition: background-color 0.2s;
        }
        .education-modal .list-group-item:hover {
          background-color: rgba(255,255,255,0.05);
        }
      `}</style>
    </Modal>
  );
};

export default EducationModal;