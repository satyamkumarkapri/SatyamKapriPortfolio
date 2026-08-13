import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="cta section-padding">
      <div className="container">
        
        <div className="cta-card">
          <div className="cta-content">
            <div className="badge">LET'S WORK TOGETHER</div>
            <h2 className="section-title">Have a Project in Mind?</h2>
            <p className="cta-desc">
              I'm available for freelance projects and collaborations.<br/> Let's build something amazing together.
            </p>
            <a href="mailto:satyamkumarkapri17@gmail.com" className="btn btn-primary">
              LET'S TALK <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="cta-info">
            <div className="contact-list">
              <div className="contact-item">
                <Mail className="contact-icon" size={20} />
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">satyamkumarkapri17@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={20} />
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+91 7061171017</div>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" size={20} />
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Bihar, India</div>
                </div>
              </div>
            </div>
            
            <div className="cta-graphics">
              <div className="paper-plane">
                 <Send size={48} className="plane-icon" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CTA;
