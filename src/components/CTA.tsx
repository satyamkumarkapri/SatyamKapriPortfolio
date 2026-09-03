import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="cta section-padding">
      <div className="container">
        
        <div className="cta-wrapper card-base">
          <div className="cta-content">
            <div className="badge">LET'S CONNECT</div>
            <h2 className="cta-title">Ready to build something great?</h2>
            <p className="cta-desc">
              I'm open to discussing software engineering roles, internships, and exciting freelance projects.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <a href="mailto:satyamkumarkapri17@gmail.com" className="contact-link">satyamkumarkapri17@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-label">Phone</div>
                  <a href="tel:+917061171017" className="contact-link">+91 7061****17</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-text">Bihar, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-form-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="57a275d4-fd7c-4b19-a6ea-e60cfc68f073" />
              
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" placeholder="abc" required className="form-input" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" placeholder="abc@example.com" required className="form-input" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" placeholder="How can I help you?" required className="form-textarea" rows={4}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CTA;
