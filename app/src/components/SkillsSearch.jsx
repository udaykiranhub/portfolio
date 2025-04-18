import React, { useState, useEffect } from 'react';
import { Form, Card, Badge } from 'react-bootstrap';
import { Search } from 'lucide-react';

const SkillsSearch = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Define all skills
  useEffect(() => {
    const allSkills = [
      { name: "MERN Stack", category: "Web Development" },
      { name: "MongoDB", category: "Databases" },
      { name: "Express.js", category: "Backend" },
      { name: "React.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Bootstrap", category: "Frontend" },
      { name: "HTML", category: "Frontend" },
      { name: "CSS", category: "Frontend" },
      { name: "Web Development", category: "General" },
      { name: "Ethereum Blockchain", category: "Blockchain" },
      { name: "Solidity", category: "Blockchain" },
      { name: "Foundry", category: "Blockchain" },
      { name: "Truffle", category: "Blockchain" },
      { name: "Security", category: "Blockchain" },
      { name: "Solidity Attacks Auditing", category: "Blockchain" },
      { name: "Defi", category: "Blockchain" },
      { name: "NFT", category: "Blockchain" },
      { name: "Web3.js", category: "Blockchain" },
      { name: "MetaMask", category: "Blockchain" },
      { name: "Python", category: "Programming" },
      { name: "JavaScript", category: "Programming" },
      { name: "Auditing", category: "Blockchain" },
      { name: "Redux", category: "Frontend" },
      { name: "SEO", category: "Web Development" },
      { name: "Data Structures", category: "Programming" },
      { name: "Git", category: "Tools" },
      { name: "GitHub", category: "Tools" },
      { name: "Postman", category: "Tools" },
      { name: "AWS Services", category: "Cloud" },
      { name: "IPFS", category: "Blockchain" },
      { name: "Material UI", category: "Frontend" },
    ];
    
    setSkills(allSkills);
    setFilteredSkills(allSkills);
  }, []);

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredSkills(skills);
      setResult('');
      return;
    }
 
    const filtered = skills.filter(skill => 
      skill.name.toLowerCase().includes(search.toLowerCase())
    );
    
    setFilteredSkills(filtered);
    
    if (filtered.length === 0) {
      setResult(`No skills found matching "${search}".`);
    } else {
      setResult(`Found ${filtered.length} matching skills.`);
    }
  }, [search, skills]);

  const categoryColors = {
    "Frontend": "primary",
    "Backend": "success",
    "Databases": "info",
    "Blockchain": "warning",
    "Programming": "danger",
    "Tools": "secondary",
    "Web Development": "primary",
    "Cloud": "info",
    "General": "dark"
  };

  return (
    <div className="skills-search">
      <Form.Group className="mb-3 position-relative">
        <div className="position-relative">
          <Form.Control
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
      
      {result && (
        <div className="result text-light mb-3 ps-3">
          <small>{result}</small>
        </div>
      )}
      
      <div className="skills-tags d-flex flex-wrap gap-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {filteredSkills.map((skill, index) => (
          <Badge 
            key={index} 
            bg={categoryColors[skill.category] || "primary"} 
            className="py-2 px-3 mb-1"
            style={{ 
              fontSize: "0.8rem", 
              transition: "all 0.3s ease",
              cursor: "pointer",
              opacity: 0.9
            }}
            onMouseOver={(e) => {
              e.target.style.opacity = 1;
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.opacity = 0.9;
              e.target.style.transform = "scale(1)";
            }}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
      
      <style jsx="true">{`
        .skills-tags::-webkit-scrollbar {
          width: 6px;
        }
        
        .skills-tags::-webkit-scrollbar-track {
          background: #232323;
          border-radius: 10px;
        }
        
        .skills-tags::-webkit-scrollbar-thumb {
          background: #0d6efd;
          border-radius: 10px;
        }
        
        .skills-tags::-webkit-scrollbar-thumb:hover {
          background: #0b5ed7;
        }
      `}</style>
    </div>
  );
};

export default SkillsSearch;