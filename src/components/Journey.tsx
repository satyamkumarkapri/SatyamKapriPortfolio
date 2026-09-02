import React from 'react';
import { BookOpen, Compass, GraduationCap, Code2, Brain, Sparkles } from 'lucide-react';
import './Journey.css';

interface JourneyMilestone {
  id: number;
  side: 'left' | 'right';
  year: string;
  category: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  themeColor: string;
  themeBg: string;
  isFutureCard?: boolean;
}

const Journey: React.FC = () => {
  const milestones: JourneyMilestone[] = [
    {
      id: 1,
      side: 'left',
      year: '2012 — 2023',
      category: 'FOUNDATION',
      title: "St. Joseph's School, Banka (ICSE)",
      desc: 'Built early roots in computer science and Java programming, while actively developing student leadership and analytical thinking.',
      icon: BookOpen,
      themeColor: '#38BDF8',
      themeBg: 'rgba(56, 189, 248, 0.12)'
    },
    {
      id: 2,
      side: 'right',
      year: '2023 — 2025',
      category: 'BEYOND TECHNOLOGY',
      title: 'L.N. College Shahpur (12th PCMB)',
      desc: 'Completed higher secondary education in Physics, Chemistry, Math & Biology (PCMB), developing deep scientific curiosity and problem-solving discipline.',
      icon: Compass,
      themeColor: '#F59E0B',
      themeBg: 'rgba(245, 158, 11, 0.12)'
    },
    {
      id: 3,
      side: 'left',
      year: '2025 — 2029',
      category: 'ENGINEERING',
      title: 'B.Tech in CSE — KL University',
      desc: 'Pursuing Project-Based Learning (PBL) Trimester Mode maintaining an exceptional 9.12 / 10.0 CGPA, mastering data structures, algorithms, and software engineering.',
      icon: GraduationCap,
      themeColor: '#8B5CF6',
      themeBg: 'rgba(139, 92, 246, 0.12)'
    },
    {
      id: 4,
      side: 'right',
      year: '2025 — PRESENT',
      category: 'BUILDING & DSA',
      title: 'Full-Stack Apps & 4★ CodeChef',
      desc: 'Architecting full-scale applications like HealthNet while competing actively in competitive programming (4★, 2128 max rating, 640+ problems solved).',
      icon: Code2,
      themeColor: '#10B981',
      themeBg: 'rgba(16, 185, 129, 0.12)'
    },
    {
      id: 5,
      side: 'left',
      year: 'ONGOING',
      category: 'INTELLIGENCE & AI',
      title: 'Machine Learning & RPA Club',
      desc: 'Exploring machine learning pipelines and intelligent tools as an active member of the Robotic Process Automation (RPA) Club at KL University.',
      icon: Brain,
      themeColor: '#EC4899',
      themeBg: 'rgba(236, 72, 153, 0.12)'
    },
    {
      id: 6,
      side: 'right',
      year: 'LONG-TERM VISION',
      category: 'THE FUTURE',
      title: 'MBA, Intelligent Ventures & Impact',
      desc: 'MBA. Technology. Business. Intelligent ventures. Meaningful impact. Bridging deep technical engineering with enterprise innovation.',
      icon: Sparkles,
      themeColor: '#06B6D4',
      themeBg: 'rgba(6, 182, 212, 0.12)',
      isFutureCard: true
    }
  ];

  return (
    <section id="journey" className="journey section-padding">
      <div className="container journey-container">
        
        {/* Section Header */}
        <div className="journey-header">
          <div className="badge">TIMELINE</div>
          <h2 className="journey-title-main">MY JOURNEY</h2>
          <h3 className="journey-title-sub">IS JUST GETTING STARTED.</h3>
        </div>

        {/* Alternating Structured Timeline */}
        <div className="alt-timeline">
          {/* Central Glowing Vertical Axis */}
          <div className="alt-timeline-line"></div>

          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <div 
                key={m.id} 
                className={`alt-timeline-row row-${m.side} animate-fade-in`}
              >
                {/* Central Glowing Node with Pulse */}
                <div 
                  className="alt-timeline-node"
                  style={{ backgroundColor: m.themeColor, boxShadow: `0 0 10px ${m.themeColor}, 0 0 20px ${m.themeColor}88` }}
                >
                  <div className="alt-node-pulse" style={{ backgroundColor: m.themeColor }}></div>
                </div>

                {/* Horizontal Connector Line */}
                <div 
                  className="alt-connector"
                  style={{ background: `linear-gradient(to ${m.side === 'left' ? 'left' : 'right'}, ${m.themeColor}, transparent)` }}
                ></div>

                {/* Structured Milestone Card */}
                <div className={`journey-card card-base ${m.isFutureCard ? 'journey-future-card' : ''}`}>
                  <div className="journey-card-top">
                    <span 
                      className="journey-category-tag"
                      style={{ color: m.themeColor, backgroundColor: m.themeBg, borderColor: `${m.themeColor}33` }}
                    >
                      <Icon size={13} className="journey-cat-icon" />
                      {m.category}
                    </span>
                    <span className="journey-year-pill">{m.year}</span>
                  </div>

                  <h4 className="journey-card-title">{m.title}</h4>
                  <p className="journey-card-desc">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Journey;
