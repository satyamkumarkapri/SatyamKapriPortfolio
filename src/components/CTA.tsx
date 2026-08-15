import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
          </div>
          
          <div className="cta-form-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="57a275d4-fd7c-4b19-a6ea-e60cfc68f073" />
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required className="form-input" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" required className="form-textarea" rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit-form">
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
