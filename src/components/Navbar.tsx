import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        
        {/* Desktop Menu */}
        <nav className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
          <a href="#achievements" onClick={() => setIsOpen(false)}>ACHIEVEMENTS</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
          
          <a href="#contact" className="btn btn-outline btn-sm mobile-only" onClick={() => setIsOpen(false)}>
            LET'S TALK <span className="arrow">↗</span>
          </a>
        </nav>
        
        <div className="nav-right">
          <a href="#contact" className="btn btn-outline btn-sm desktop-only">
            LET'S TALK <span className="arrow">↗</span>
          </a>
          
          {/* Hamburger Icon */}
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
