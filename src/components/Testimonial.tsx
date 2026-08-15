import React from 'react';
import { Target } from 'lucide-react';
import './Testimonial.css';

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-card glass">
          <div className="quote-icon">
            <Target size={48} />
          </div>
          <p className="testimonial-text">
            "I am currently focused on building AI-driven full-stack applications, deepening my expertise in Machine Learning algorithms, and solving complex Data Structures & Algorithms problems to write highly optimized code."
          </p>
          <div className="testimonial-author">
            <img src="/assets/hero.png" alt="Satyam Kumar Kapri" className="author-avatar" />
            <div>
              <h4 className="author-name">Satyam Kumar Kapri</h4>
              <p className="author-title">Current Focus & Objectives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
