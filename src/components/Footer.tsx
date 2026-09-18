import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp, FaSnapchatGhost, FaEnvelope } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-card card-base">
          
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <div className="logo-icon">SK</div>
                <div className="logo-text-footer">
                  <span className="logo-name">Satyam Kumar Kapri</span>
                  <span className="logo-title">Full-Stack Engineer</span>
                </div>
              </div>
              <p className="footer-bio">
                Building scalable software, intelligent systems, and practical AI-powered products.
              </p>
              <div className="footer-socials">
                <a href="https://github.com/satyamkumarkapri" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-github">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/satyamkumarkapri" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-linkedin">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://instagram.com/btw_its._satyam" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-instagram">
                  <FaInstagram size={18} />
                </a>
                <a href="https://snapchat.com/add/satyamkapri17" target="_blank" rel="noreferrer" aria-label="Snapchat" className="social-snapchat">
                  <FaSnapchatGhost size={18} />
                </a>
                <a href="https://codechef.com/users/kl_2500031975" target="_blank" rel="noreferrer" aria-label="CodeChef" className="social-codechef">
                  <SiCodechef size={18} />
                </a>
                <a href="https://leetcode.com/u/satyamkapri17" target="_blank" rel="noreferrer" aria-label="LeetCode" className="social-leetcode">
                  <SiLeetcode size={18} />
                </a>
                <a href="mailto:satyamkumarkapri17@gmail.com" aria-label="Email" className="social-email">
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#journey">Experience</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><a href="/resume.html" target="_blank">Resume</a></li>
                <li><a href="https://github.com/satyamkumarkapri" target="_blank">GitHub</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; {new Date().getFullYear()} Satyam Kumar Kapri. All rights reserved.</p>
            <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
              <FaArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
