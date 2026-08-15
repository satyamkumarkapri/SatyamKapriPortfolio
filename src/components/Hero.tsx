import React from 'react';
import { ArrowRight, Download, GraduationCap, Award, Star } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="badge">HELLO, I'M</div>
          <h1 className="hero-title">
            <span className="hero-name">Satyam Kumar Kapri</span> <br />
            <span className="text-muted">Full-Stack Software Engineer</span> <br />
            <span className="text-gradient">AI, ML & Business Enthusiast</span>
          </h1>
          <p className="hero-subtitle">
            Computer Science & Engineering student exploring the intersection of artificial intelligence, software engineering, and business innovation.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              VIEW MY WORK <ArrowRight size={18} />
            </a>
            <a href="/resume.html" download="Satyam_Kumar_Kapri_Resume.html" className="btn btn-outline">
              DOWNLOAD CV <Download size={18} />
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <GraduationCap className="stat-icon" />
              <div>
                <div className="stat-value">KL University</div>
                <div className="stat-label">B.TECH CSE '29</div>
              </div>
            </div>
            <div className="stat-item">
              <Award className="stat-icon" />
              <div>
                <div className="stat-value">9.12 / 10.0</div>
                <div className="stat-label">CURRENT CGPA</div>
              </div>
            </div>
            <div className="stat-item">
              <Star className="stat-icon" />
              <div>
                <div className="stat-value">3★ CodeChef</div>
                <div className="stat-label">DIV 2 (1700 MAX)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-bg-shape"></div>
          <img src="/assets/hero.png" alt="Satyam Kumar Kapri" className="hero-image" />
          
          {/* Floating UI Elements */}


          
        </div>
      </div>
    </section>
  );
};

export default Hero;
