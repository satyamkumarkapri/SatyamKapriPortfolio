import React from 'react';
import { Trophy, Award, Star, Code2, Medal, Zap } from 'lucide-react';
import './Achievements.css';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="badge">ACHIEVEMENTS</div>
            <h2 className="section-title">Competitive Programming & Certifications</h2>
          </div>
        </div>

        <div className="achievements-container">
          
          {/* Competitive Programming Column */}
          <div className="achievement-column glass">
            <div className="column-header">
              <Trophy size={28} className="column-icon" />
              <h3>Competitive Programming</h3>
            </div>
            
            <div className="achievement-list">
              <div className="achievement-item">
                <div className="achievement-icon-wrapper star-wrapper">
                  <Star size={20} />
                </div>
                <div className="achievement-details">
                  <h4>4★ CodeChef Programmer</h4>
                  <p>Division 2. Highest rating 2128 — ranked #2196 globally and #1825 in India.</p>
                </div>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-icon-wrapper">
                  <Code2 size={20} />
                </div>
                <div className="achievement-details">
                  <h4>DSA Rating 1846</h4>
                  <p>Highest rating 1904 — ranked #556 globally and #535 in India for algorithmic problem solving.</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon-wrapper gold-wrapper">
                  <Medal size={20} />
                </div>
                <div className="achievement-details">
                  <h4>Problem Solver Gold Badge</h4>
                  <p>Successfully solved 640+ competitive programming problems.</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon-wrapper" style={{ background: 'linear-gradient(135deg, #FF0000, #FF6B6B)' }}>
                  <Zap size={20} />
                </div>
                <div className="achievement-details">
                  <h4>Adobe University Hackathon</h4>
                  <p>Cleared Round 1 – Online Assessment (MCQ + Coding) of the Adobe University Hackathon, Aug 2026.</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon-wrapper" style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}>
                  <Trophy size={20} />
                </div>
                <div className="achievement-details">
                  <h4>RPA Club Member</h4>
                  <p>Active member of the Robotic Process Automation (RPA) Club at KL University — exploring automation, AI-driven workflows, and intelligent productivity tools.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="achievement-column glass">
            <div className="column-header">
              <Award size={28} className="column-icon" />
              <h3>Certifications</h3>
            </div>
            
            <div className="cert-list">
              <div className="cert-item">
                <h4>Adobe</h4>
                <ul>
                  <li>Adobe University Hackathon – Round 1 Qualifier (Aug 2026)</li>
                </ul>
              </div>

              <div className="cert-item">
                <h4>CodeChef</h4>
                <ul>
                  <li>Java Programming</li>
                  <li>Algorithmic Problem Solving Using Java</li>
                </ul>
              </div>
              
              <div className="cert-item">
                <h4>freeCodeCamp</h4>
                <ul>
                  <li>Frontend Development Libraries</li>
                  <li>Legacy Responsive Web Design</li>
                </ul>
              </div>

              <div className="cert-item">
                <h4>Simplilearn</h4>
                <ul>
                  <li>Python Django 101</li>
                  <li>Introduction to ASP.NET</li>
                  <li>Mathematics for Data Science</li>
                </ul>
              </div>

              <div className="cert-item">
                <h4>Cambridge</h4>
                <ul>
                  <li>Linguaskill Certification</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Achievements;
