import React from 'react';
import { ArrowRight, Download, Clock, Grid, UserCheck, Activity } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="badge">HELLO, I'M</div>
          <h1 className="hero-title">
            Satyam Kumar Kapri <br />
            <span className="text-muted">Web Designer &</span> <br />
            <span className="text-gradient">Digital Experience</span> <span className="text-muted">Creator</span>
          </h1>
          <p className="hero-subtitle">
            I design clean, futuristic and high-performing websites that help brands grow and make lasting impressions.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              VIEW MY WORK <ArrowRight size={18} />
            </a>
            <a href="#" className="btn btn-outline">
              DOWNLOAD CV <Download size={18} />
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <Clock className="stat-icon" />
              <div>
                <div className="stat-value">5+</div>
                <div className="stat-label">YEARS EXPERIENCE</div>
              </div>
            </div>
            <div className="stat-item">
              <Grid className="stat-icon" />
              <div>
                <div className="stat-value">80+</div>
                <div className="stat-label">PROJECTS COMPLETED</div>
              </div>
            </div>
            <div className="stat-item">
              <UserCheck className="stat-icon" />
              <div>
                <div className="stat-value">35+</div>
                <div className="stat-label">HAPPY CLIENTS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-bg-shape"></div>
          <img src="/assets/hero.png" alt="Satyam Kumar Kapri" className="hero-image" />
          
          {/* Floating UI Elements */}
          <div className="floating-card ai-interface glass animate-float" style={{ animationDelay: '0s' }}>
            <div className="card-header">
              <span className="card-title">AI INTERFACE</span>
              <span className="dots">...</span>
            </div>
            <div className="robot-icon-placeholder">
               <div className="robot-head"></div>
            </div>
            <div className="card-footer">
               <span className="footer-title">NEURAL NETWORK</span>
               <Activity size={16} color="var(--color-primary)" />
            </div>
          </div>

          <div className="floating-card design-system glass animate-float" style={{ animationDelay: '2s' }}>
            <div className="card-header">
              <span className="card-title">DESIGN SYSTEM</span>
            </div>
            <div className="ds-content">
              <div className="ds-circle"></div>
              <ul className="ds-list">
                <li><span>UI/UX</span> <div className="ds-bar b1"></div></li>
                <li><span>WIREFRAME</span> <div className="ds-bar b2"></div></li>
                <li><span>PROTOTYPE</span> <div className="ds-bar b3"></div></li>
                <li><span>DEVELOPMENT</span> <div className="ds-bar b4"></div></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
