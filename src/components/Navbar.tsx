import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Simple intersection observer logic for active state could go here, 
      // but for now we'll just set it based on click for simplicity in this demo.
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Left: Logo */}
        <a href="#home" className="logo" onClick={() => setActive('home')}>
          <div className="logo-icon">SK</div>
          <div className="logo-text">
            <span className="logo-name">SATYAM KUMAR KAPRI</span>
            <span className="logo-title">Full-Stack Developer</span>
          </div>
        </a>
        
        {/* Center: Desktop Menu */}
        <nav className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className={`nav-item ${active === link.id ? 'active' : ''}`}
              onClick={() => {
                setActive(link.id);
                setIsOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          
          <div className="mobile-only-actions">
            <a href="/resume.html" download="Satyam_Kumar_Kapri_Resume.html" className="btn btn-outline mobile-action-btn">
              Download CV <Download size={14} />
            </a>
            <a href="#contact" className="btn btn-primary mobile-action-btn" onClick={() => setIsOpen(false)}>
              Let's Talk ↗
            </a>
          </div>
        </nav>
        
        {/* Right: Actions */}
        <div className="nav-right">
          <a href="/resume.html" download="Satyam_Kumar_Kapri_Resume.html" className="nav-action-text desktop-only">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary btn-sm desktop-only">
            Let's Talk ↗
          </a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
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
