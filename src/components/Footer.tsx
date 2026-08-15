import React from 'react';
import { Send } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">SK</span>
              <div className="logo-text">
                <span className="logo-name">SATYAM KUMAR KAPRI</span>
                <span className="logo-title">AI & SOFTWARE ENGINEERING</span>
              </div>
            </a>
            <p className="footer-desc">
              Building intelligent systems and robust software solutions.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">FOLLOW ME</h4>
            <ul>
              <li><a href="https://instagram.com/btw_its._satyam" target="_blank" rel="noreferrer" className="social-link instagram"><FaInstagram size={18} /> Instagram</a></li>
              <li><a href="https://github.com/satyamkumarkapri" target="_blank" rel="noreferrer" className="social-link github"><FaGithub size={18} /> Github</a></li>
              <li><a href="https://linkedin.com/in/satyamkumarkapri" target="_blank" rel="noreferrer" className="social-link linkedin"><FaLinkedin size={18} /> LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">NEWSLETTER</h4>
            <p>Get tech insights & project updates straight to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn-submit">
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Satyam Kumar Kapri. All rights reserved.</p>
          <p>Designed with <span className="heart">♥</span> for great experiences.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
