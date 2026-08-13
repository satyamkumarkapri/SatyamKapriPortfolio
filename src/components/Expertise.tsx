import React from 'react';
import './Expertise.css';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Web Design', level: 90 },
  { name: 'HTML / CSS', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'WordPress', level: 90 }
];

const tools = [
  { name: 'Figma', label: 'F', color: '#F24E1E', bg: '#fff0ec' },
  { name: 'Adobe XD', label: 'Xd', color: '#FF61F6', bg: '#ffeaff' },
  { name: 'Photoshop', label: 'Ps', color: '#31A8FF', bg: '#e5f3ff' },
  { name: 'Illustrator', label: 'Ai', color: '#FF9A00', bg: '#fff4e5' },
  { name: 'Webflow', label: 'W', color: '#4353FF', bg: '#eaecff' },
  { name: 'WordPress', label: 'W', color: '#21759B', bg: '#e6f3f8' },
  { name: 'HTML5', label: '5', color: '#E34F26', bg: '#ffefe9' },
  { name: 'CSS3', label: '3', color: '#1572B6', bg: '#e5f2fa' },
  { name: 'JavaScript', label: 'JS', color: '#F7DF1E', bg: '#fffce6' },
  { name: 'PHP', label: 'php', color: '#777BB4', bg: '#f1f1f8' }
];

const Expertise: React.FC = () => {
  return (
    <section className="expertise section-padding">
      <div className="container">
        
        <div className="expertise-content">
          <div className="skills-column">
            <div className="badge">TOOLS & SKILLS</div>
            <h2 className="section-title">My Expertise</h2>
            
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="tools-column">
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card glass">
                  <div className="tool-icon" style={{ color: tool.color, backgroundColor: tool.bg }}>
                    {tool.label}
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Expertise;
