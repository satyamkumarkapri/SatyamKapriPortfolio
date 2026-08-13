import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar glass">
      <div className="container navbar-container">
        <a href="#" className="logo">
          <span className="logo-icon">SK</span>
          <div className="logo-text">
            <span className="logo-name">SATYAM KUMAR KAPRI</span>
            <span className="logo-title">WEB DESIGNER</span>
          </div>
        </a>
        
        <nav className="nav-links">
          <a href="#home" className="active">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#process">PROCESS</a>
          <a href="#blog">BLOG</a>
          <a href="#contact">CONTACT</a>
        </nav>
        
        <a href="#contact" className="btn btn-outline btn-sm">
          LET'S TALK <span className="arrow">↗</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
