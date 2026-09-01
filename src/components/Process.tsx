import React from 'react';
import { Search, PenTool, Code2, Zap, Rocket } from 'lucide-react';
import './Process.css';

const processes = [
  {
    num: '01',
    title: 'Analyze',
    desc: 'Understanding data, constraints, and core business objectives.',
    icon: Search,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.1)'
  },
  {
    num: '02',
    title: 'Architect',
    desc: 'Designing scalable system architectures and data models.',
    icon: PenTool,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)'
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Writing efficient, robust, and clean software code.',
    icon: Code2,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)'
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Training AI models, testing algorithms, and refining performance.',
    icon: Zap,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)'
  },
  {
    num: '05',
    title: 'Deploy',
    desc: 'Seamless integration, deployment, and ongoing system support.',
    icon: Rocket,
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)'
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

        <div className="process-steps">
          {processes.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="process-step">
                <div className="step-icon-wrapper" style={{ background: step.bg }}>
                  <Icon size={24} color={step.color} />
                </div>
                <div className="step-number-badge" style={{ color: step.color, borderColor: step.bg }}>
                  {step.num}
                </div>
                <div className="step-content">
                  <h4 className="step-title" style={{ color: step.color }}>{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
