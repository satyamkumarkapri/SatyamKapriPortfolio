import React from 'react';
import './Process.css';

const processes = [
  {
    num: '01',
    title: 'Analyze',
    desc: 'Understanding data, constraints, and core business objectives.'
  },
  {
    num: '02',
    title: 'Architect',
    desc: 'Designing scalable system architectures and data models.'
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Writing efficient, robust, and clean software code.'
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Training AI models, testing algorithms, and refining performance.'
  },
  {
    num: '05',
    title: 'Deploy',
    desc: 'Seamless integration, deployment, and ongoing system support.'
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
