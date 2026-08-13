import React from 'react';
import './Process.css';

const processes = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding your goals, audience and requirements.'
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Research, strategy and wireframing the structure.'
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Creating visually engaging and user-friendly designs.'
  },
  {
    num: '04',
    title: 'Develop',
    desc: 'Building fast, responsive and optimized websites.'
  },
  {
    num: '05',
    title: 'Deliver',
    desc: 'Testing, launching and ongoing support.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="process section-padding">
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="badge">MY PROCESS</div>
            <h2 className="section-title">A Simple, Effective Process</h2>
          </div>
        </div>

        <div className="process-timeline">
          <div className="timeline-line"></div>
          
          <div className="process-steps">
            {processes.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
