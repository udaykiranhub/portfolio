import React, { useState, useEffect } from 'react';
import { Form, Card, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Search } from 'lucide-react';

const SkillsSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Flattened skills data
  const allSkills = [
    { name: "MERN Stack", details: "MongoDB, Express.js, React.js, Node.js" },
    { name: "Bootstrap", details: "Responsive design and UI components" },
    { name: "Material UI", details: "Responsive design and UI components" },
    { name: "React.js", details: "Building dynamic user interfaces" },
    { name: "Redux", details: "State management for React applications" },
    { name: "HTML/CSS", details: "Markup and styling for web pages" },
    { name: "SEO", details: "Search engine optimization techniques" },
    { name: "Express.js", details: "Backend framework for server maintenance" },
    { name: "Node.js", details: "JavaScript runtime for backend development" },
    { name: "RESTful APIs", details: "API development and integration" },
    { name: "MongoDB", details: "NoSQL database for modern applications" },
    { name: "Mongoose", details: "MongoDB object modeling for Node.js" },
    { name: "MongoDB Aggregations", details: "Advanced data processing" },
    { name: "Ethereum Blockchain", details: "Building decentralized applications (dApps)" },
    { name: "Solidity", details: "Developing and deploying smart contracts" },
    { name: "Foundry & Truffle", details: "Testing and deploying smart contracts" },
    { name: "Smart Contract Auditing", details: "Identifying and mitigating security vulnerabilities" },
    { name: "DeFi Protocols", details: "Development and integration" },
    { name: "NFT", details: "Non-fungible token development" },
    { name: "Web3.js", details: "Ethereum JavaScript API" },
    { name: "IPFS", details: "Decentralized storage solution" },
    { name: "Polygon", details: "EVM-compatible blockchain scaling solution" },
    { name: "Binance Smart Chain", details: "EVM-compatible blockchain platform" },
    { name: "JavaScript", details: "Web and server-side development" },
    { name: "Python", details: "Used for DSA and problem-solving" },
    { name: "Git/GitHub", details: "Version control and collaboration" },
    { name: "Postman", details: "API testing and documentation" },
    { name: "Mocha/Chai", details: "JavaScript testing frameworks" },
    { name: "AWS Services", details: "Connecting websites to cloud services" },
    { name: "Render", details: "Web application hosting" },
    { name: "Vercel", details: "Frontend deployment" },
    { name: "Cloudinary", details: "Media storage and optimization" },
  ];

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSkills(allSkills);
      return;
    }
    
    const results = allSkills.filter(skill => 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredSkills(results);
  }, [searchTerm]);

  const renderTooltip = (props, skill) => (
    <Tooltip id={`tooltip-${skill.name}`} {...props}>
      <strong>{skill.name}</strong>
      <div className="text-muted">{skill.details}</div>
    </Tooltip>
  );

  return (
    <Card className="border-0 shadow-sm bg-dark text-light">
      <Card.Body>
        <div className="mb-4">
          <h5 className="mb-3">Skills Explorer</h5>
          
          {/* Search Input */}
          <Form.Group className="mb-3 position-relative">
            <div className="position-relative">
              <Form.Control
                type="text"
                placeholder="Search skills or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-dark text-light border-secondary py-2 ps-5"
                style={{ borderRadius: "30px" }}
              />
              <Search style={{ 
                position: "absolute", 
                left: "15px", 
                top: "50%", 
                transform: "translateY(-50%)",
                color: "#6c757d" 
              }} size={18} />
            </div>
          </Form.Group>
        </div>
        
        {/* Results */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-4 text-muted">
            No skills found matching "{searchTerm}"
          </div>
        ) : (
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, skill)}
              >
                <Badge 
                  pill
                  bg="secondary"
                  className="py-2 px-3 mb-2 me-2"
                  style={{ 
                    fontSize: "0.85rem",
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    opacity: 0.9
                  }}
                  onMouseOver={(e) => e.target.style.opacity = 1}
                  onMouseOut={(e) => e.target.style.opacity = 0.9}
                >
                  {skill.name}
                </Badge>
              </OverlayTrigger>
            ))}
          </div>
        )}
      </Card.Body>
      
      <style jsx="true">{`
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          max-height: 300px;
          overflow-y: auto;
          padding: 0.25rem;
        }
        
        .skills-grid::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .skills-grid::-webkit-scrollbar-track {
          background: #2c2c2c;
          border-radius: 10px;
        }
        
        .skills-grid::-webkit-scrollbar-thumb {
          background: #495057;
          border-radius: 10px;
        }
        
        .skills-grid::-webkit-scrollbar-thumb:hover {
          background: #6c757d;
        }
      `}</style>
    </Card>
  );
};

export default SkillsSearch;