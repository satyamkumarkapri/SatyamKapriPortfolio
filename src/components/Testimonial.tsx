import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonial.css';

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-card glass">
          <div className="quote-icon">
            <Quote size={48} />
          </div>
          <p className="testimonial-text">
            Aarav is a fantastic designer who truly understands our brand and audience. The new website exceeded our expectations and boosted our business.
          </p>
          <div className="testimonial-author">
            <img src="/assets/avatar.png" alt="James Carter" className="author-avatar" />
            <div>
              <h4 className="author-name">James Carter</h4>
              <p className="author-title">CEO, Nexora Agency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
