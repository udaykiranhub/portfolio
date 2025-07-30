import React from 'react';
import { Code, Server, Shield } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Blockchain Developer",
      company: "Freelance",
      date: "2023 - Present",
      description: "Developing smart contracts and decentralized applications",
      Icon: Code,
      color: "#0d6efd"
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      date: "2021 - 2023",
      description: "Building web applications using MERN stack",
      Icon: Server,
      color: "#198754"
    },
    {
      title: "Security Researcher",
      company: "CTF Player",
      date: "2023 - Present",
      description: "Participating in security competitions and audits",
      Icon: Shield,
      color: "#fd7e14"
    }
  ];

  return (
    <div className="timeline-container my-5 py-5">
      <h2 className="text-primary mb-5">My Journey</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon" style={{ backgroundColor: exp.color }}>
              <exp.Icon size={20} color="#fff" />
            </div>
            <div className="timeline-content" style={{ borderLeftColor: exp.color }}>
              {/* <div className="timeline-date">{exp.date}</div> */}
              <h3 className="timeline-title">{exp.title}</h3>
              {/* <h4 className="timeline-subtitle">{exp.company}</h4> */}
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .timeline {
          position: relative;
          padding-left: 50px;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 25px;
          width: 2px;
          background: #6c757d;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }
        
        .timeline-icon {
          position: absolute;
          left: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .timeline-content {
          margin-left: 70px;
          padding: 20px;
          background: #1a1a1a;
          border-radius: 6px;
          border-left: 3px solid;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-date {
          color: #6c757d;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        
        .timeline-title {
          color: #fff;
          margin: 0 0 5px 0;
          font-size: 1.25rem;
        }
        
        .timeline-subtitle {
          color: #adb5bd;
          margin: 0 0 10px 0;
          font-size: 1rem;
          font-weight: normal;
        }
        
        .timeline-description {
          color: #dee2e6;
          margin: 0;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .timeline {
            padding-left: 30px;
          }
          
          .timeline::before {
            left: 15px;
          }
          
          .timeline-icon {
            width: 30px;
            height: 30px;
          }
          
          .timeline-content {
            margin-left: 50px;
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceTimeline;