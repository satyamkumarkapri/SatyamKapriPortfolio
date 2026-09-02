import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, GraduationCap, Award, Star, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const fullSubtitle = "Computer Science & Engineering student building scalable software, intelligent systems, and practical AI-powered products.";
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedSubtitle(fullSubtitle.slice(0, i));
      i++;
      if (i > fullSubtitle.length) clearInterval(intervalId);
    }, 40);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-in">
          <div className="badge hero-badge">👋 HELLO, I'M</div>
          <h1 className="hero-title">
            <span className="hero-name">Satyam Kumar Kapri</span> <br />
            <span className="hero-role">Full-Stack Software Engineer</span> <br />
            <span className="text-gradient hero-highlight">AI, ML & Software Development</span>
          </h1>
          <p className="hero-subtitle">
            {displayedSubtitle}
            <span className="cursor-blink">|</span>
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="/resume.html" download="Satyam_Kumar_Kapri_Resume.html" className="btn btn-outline pulse-btn">
              Download CV <Download size={16} />
            </a>
            <div className="hero-socials">
              <a href="https://github.com/satyamkumarkapri" target="_blank" rel="noreferrer" className="hero-social-btn" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/satyamkumarkapri" target="_blank" rel="noreferrer" className="hero-social-btn" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="availability-badge">
            <span className="status-dot"></span>
            Open to opportunities & collaborations
          </div>
          
          <div className="hero-achievements card-base">
            <div className="ach-item">
              <GraduationCap size={18} className="ach-icon" />
              <div className="ach-text">
                <span className="ach-title">KL University</span>
                <span className="ach-sub">B.Tech CSE · 2029</span>
              </div>
            </div>
            <div className="ach-divider"></div>
            <div className="ach-item">
              <Award size={18} className="ach-icon" />
              <div className="ach-text">
                <span className="ach-title">9.12 / 10.0</span>
                <span className="ach-sub">Current CGPA</span>
              </div>
            </div>
            <div className="ach-divider"></div>
            <div className="ach-item">
              <Star size={18} className="ach-icon" />
              <div className="ach-text">
                <span className="ach-title">4★ CodeChef</span>
                <span className="ach-sub">Div 2 · 2128 Max</span>
              </div>
            </div>
            <div className="ach-divider"></div>
            <div className="ach-item">
              <Code2 size={18} className="ach-icon" />
              <div className="ach-text">
                <span className="ach-title">DSA</span>
                <span className="ach-sub">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-glow"></div>
          <div className="hero-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3 dashed"></div>
          </div>
          <img src="/assets/hero.png" alt="Satyam Kumar Kapri" className="hero-image animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
