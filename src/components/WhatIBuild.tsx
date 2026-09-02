import React from 'react';
import { Layout, Brain, Server, Code, CheckCircle2 } from 'lucide-react';
import './WhatIBuild.css';

interface BuildCard {
  id: number;
  icon: React.ElementType;
  title: string;
  badge: string;
  desc: string;
  themeColor: string;
  themeBg: string;
  highlights: string[];
  tags: string[];
}

const WhatIBuild: React.FC = () => {
  const cards: BuildCard[] = [
    {
      id: 1,
      icon: Layout,
      title: 'Full-Stack Web Engineering',
      badge: 'ARCHITECTURE & UX',
      desc: 'Architecting modern, production-ready web applications from responsive frontends to resilient backends with high performance and accessibility.',
      themeColor: '#8B5CF6',
      themeBg: 'rgba(139, 92, 246, 0.12)',
      highlights: [
        'Modern SPA & SSR architectures with React, TypeScript & Vite',
        'Reactive state management, accessible UI components & fluid animations',
        'End-to-end integration with RESTful endpoints and external services'
      ],
      tags: ['React.js', 'TypeScript', 'Vite', 'Node.js', 'Tailwind CSS']
    },
    {
      id: 2,
      icon: Brain,
      title: 'Intelligent Systems & AI',
      badge: 'MACHINE LEARNING & DATA',
      desc: 'Developing practical machine learning models and intelligent tools that process complex datasets to deliver predictive insights and automated workflows.',
      themeColor: '#06B6D4',
      themeBg: 'rgba(6, 182, 212, 0.12)',
      highlights: [
        'Supervised & unsupervised learning pipelines using Scikit-Learn',
        'Data preprocessing, statistical analysis & feature engineering with Pandas & NumPy',
        'Integrating ML model inference into live APIs and production backends'
      ],
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'FastAPI', 'AI/ML']
    },
    {
      id: 3,
      icon: Server,
      title: 'Scalable Backend Systems',
      badge: 'DISTRIBUTED SERVICES & APIS',
      desc: 'Designing robust server-side architectures, database schemas, and microservices engineered for high throughput, data integrity, and fault tolerance.',
      themeColor: '#10B981',
      themeBg: 'rgba(16, 185, 129, 0.12)',
      highlights: [
        'RESTful microservices engineered with Node.js, Express and Java',
        'Relational & NoSQL database modeling with PostgreSQL and MongoDB',
        'Secure authentication (JWT), CORS policies, rate limiting & error handling'
      ],
      tags: ['Node.js', 'Express', 'Java', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      id: 4,
      icon: Code,
      title: 'DSA & Algorithmic Optimization',
      badge: 'COMPETITIVE PROGRAMMING',
      desc: 'Tackling complex algorithmic puzzles and performance bottlenecks with rigorous mathematical logic and optimized space-time computational complexity.',
      themeColor: '#F59E0B',
      themeBg: 'rgba(245, 158, 11, 0.12)',
      highlights: [
        '4★ Competitive Programmer on CodeChef (Division 2, 2128 Max Rating)',
        '640+ algorithmic challenges solved across competitive coding platforms',
        'Deep command of Dynamic Programming, Graph Theory, Trees & Greedy techniques'
      ],
      tags: ['Java', 'Algorithms', 'Data Structures', 'CodeChef 4★', 'Optimization']
    }
  ];

  return (
    <section className="what-i-build section-padding">
      <div className="container">
        
        <div className="section-header center-align">
          <div className="badge">EXPERTISE</div>
          <h2 className="section-title">What I Build</h2>
          <p className="section-subtitle">
            Applying core computer science fundamentals, full-stack technologies, and AI capabilities to build scalable, high-impact products.
          </p>
        </div>

        <div className="build-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            
            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            };

            return (
              <div 
                key={card.id} 
                className="build-card card-base"
                onMouseMove={handleMouseMove}
              >
                {/* Top Row: Icon + Category Badge */}
                <div className="build-card-top">
                  <div 
                    className="build-icon-wrapper" 
                    style={{ backgroundColor: card.themeBg, color: card.themeColor, borderColor: `${card.themeColor}33` }}
                  >
                    <Icon size={26} />
                  </div>
                  <span 
                    className="build-category-badge"
                    style={{ color: card.themeColor, borderColor: `${card.themeColor}40`, backgroundColor: `${card.themeColor}12` }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title & Narrative */}
                <h3 className="build-title">{card.title}</h3>
                <p className="build-desc">{card.desc}</p>

                {/* Detailed Highlights Checklist */}
                <div className="build-highlights">
                  {card.highlights.map((point, pIndex) => (
                    <div key={pIndex} className="build-point">
                      <CheckCircle2 size={16} className="build-check-icon" style={{ color: card.themeColor }} />
                      <span className="build-point-text">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Footer */}
                <div className="build-tags">
                  {card.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="build-tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIBuild;
