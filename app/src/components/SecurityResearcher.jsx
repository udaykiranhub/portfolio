import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Shield, Lock, Bug } from 'lucide-react';

const SecurityResearch = () => {
  const highlights = [
    {
      title: "Smart Contract Audits",
      description: "Identifying vulnerabilities in Ethereum smart contracts",
      icon: <Shield size={24} className="text-primary" />,
      count: "10+"
    },
    {
      title: "CTF Competitions",
      description: "Participating in blockchain security challenges",
      icon: <Lock size={24} className="text-warning" />,
      count: "15+"
    },
    {
      title: "Vulnerabilities Found",
      description: "Critical bugs discovered in DeFi protocols",
      icon: <Bug size={24} className="text-danger" />,
      count: "5+"
    }
  ];

  return (
    <div className="my-5 py-5">
      <h2 className="text-primary mb-4">Security Research</h2>
      <p className="lead mb-5">Analysis on the Block Chain </p>
      
      <div className="row">
        {highlights.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="h-100 bg-dark text-light border-secondary">
              <Card.Body className="text-center">
                <div className="mb-3">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <Badge bg="primary" pill className="mb-3">{item.count}</Badge>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <Button 
          variant="outline-primary" 
          size="lg"
          href="https://blockchainsecurity-udaykiranpedda.netlify.app/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My Security Blog
        </Button>
      </div>
    </div>
  );
};

export default SecurityResearch;