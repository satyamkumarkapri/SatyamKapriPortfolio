import React from 'react';
import { Trophy, Award, Star, Code2, Medal, Zap, ExternalLink, FileText, Code, Flame, BookOpen, GraduationCap } from 'lucide-react';
import './Achievements.css';

interface ShowcaseItem {
  id: number;
  icon: React.ElementType;
  title: string;
  desc: string;
  badgeBg: string;
  iconColor: string;
  linkUrl?: string;
  linkLabel?: string;
}

const Achievements: React.FC = () => {
  const compItems: ShowcaseItem[] = [
    {
      id: 1,
      icon: Star,
      title: '4★ CodeChef Programmer',
      desc: 'Division 2. Highest rating 2128 — ranked #2196 globally and #1825 in India.',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#F59E0B'
    },
    {
      id: 2,
      icon: Code2,
      title: 'DSA Rating 1846',
      desc: 'Highest rating 1904 — ranked #556 globally and #535 in India for algorithmic problem solving.',
      badgeBg: 'rgba(139, 92, 246, 0.15)',
      iconColor: '#8B5CF6'
    },
    {
      id: 3,
      icon: Medal,
      title: 'Problem Solver Gold Badge',
      desc: 'Successfully solved 640+ competitive programming problems.',
      badgeBg: 'rgba(234, 179, 8, 0.15)',
      iconColor: '#EAB308'
    },
    {
      id: 4,
      icon: Zap,
      title: 'Adobe University Hackathon',
      desc: 'Cleared Round 1 – Online Assessment (MCQ + Coding) of the Adobe University Hackathon, Aug 2026.',
      badgeBg: 'rgba(239, 68, 68, 0.15)',
      iconColor: '#EF4444',
      linkUrl: '/assets/adobe_hackathon_certificate.pdf',
      linkLabel: 'Certificate'
    },
    {
      id: 5,
      icon: Trophy,
      title: 'RPA Club Member',
      desc: 'Active member of the Robotic Process Automation (RPA) Club at KL University — exploring automation & AI workflows.',
      badgeBg: 'rgba(59, 130, 246, 0.15)',
      iconColor: '#3B82F6'
    }
  ];

  const certItems: ShowcaseItem[] = [
    {
      id: 101,
      icon: FileText,
      title: 'Adobe & Unstop',
      desc: 'Adobe University Hackathon — Official Certificate of Participation (Issued August 2026).',
      badgeBg: 'rgba(239, 68, 68, 0.15)',
      iconColor: '#EF4444',
      linkUrl: '/assets/adobe_hackathon_certificate.pdf',
      linkLabel: 'View PDF'
    },
    {
      id: 102,
      icon: Code,
      title: 'CodeChef Certification',
      desc: 'Certified in Java Programming & Algorithmic Problem Solving using Java.',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#F59E0B'
    },
    {
      id: 103,
      icon: Flame,
      title: 'freeCodeCamp',
      desc: 'Certified in Frontend Development Libraries & Legacy Responsive Web Design.',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#10B981'
    },
    {
      id: 104,
      icon: BookOpen,
      title: 'Simplilearn',
      desc: 'Python Django 101, Introduction to ASP.NET & Mathematics for Data Science.',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      iconColor: '#06B6D4'
    },
    {
      id: 105,
      icon: GraduationCap,
      title: 'Cambridge Assessment',
      desc: 'Linguaskill International English Language Proficiency Certification.',
      badgeBg: 'rgba(139, 92, 246, 0.15)',
      iconColor: '#8B5CF6'
    }
  ];

  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="badge">RECOGNITION</div>
            <h2 className="section-title">Achievements & Certifications</h2>
          </div>
        </div>

        <div className="achievements-symmetrical-grid">
          {/* Left Column Card: Competitive Programming */}
          <div className="showcase-card card-base">
            <div className="showcase-card-header">
              <div className="showcase-header-icon-wrap comp-icon-theme">
                <Trophy size={24} />
              </div>
              <h3 className="showcase-card-title">Competitive Programming</h3>
            </div>
            
            <div className="showcase-divider"></div>

            <div className="showcase-list">
              {compItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="showcase-item">
                    <div 
                      className="showcase-icon-badge" 
                      style={{ backgroundColor: item.badgeBg, color: item.iconColor }}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="showcase-content">
                      <div className="showcase-title-row">
                        <h4 className="showcase-item-title">{item.title}</h4>
                        {item.linkUrl && (
                          <a 
                            href={item.linkUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="showcase-pill-link"
                            title="View Official Certificate"
                          >
                            <ExternalLink size={12} /> {item.linkLabel || 'View'}
                          </a>
                        )}
                      </div>
                      <p className="showcase-item-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Card: Certifications */}
          <div className="showcase-card card-base">
            <div className="showcase-card-header">
              <div className="showcase-header-icon-wrap cert-icon-theme">
                <Award size={24} />
              </div>
              <h3 className="showcase-card-title">Certifications & Credentials</h3>
            </div>
            
            <div className="showcase-divider"></div>

            <div className="showcase-list">
              {certItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="showcase-item">
                    <div 
                      className="showcase-icon-badge" 
                      style={{ backgroundColor: item.badgeBg, color: item.iconColor }}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="showcase-content">
                      <div className="showcase-title-row">
                        <h4 className="showcase-item-title">{item.title}</h4>
                        {item.linkUrl && (
                          <a 
                            href={item.linkUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="showcase-pill-link cert-pill-accent"
                            title="View Official Certificate"
                          >
                            <ExternalLink size={12} /> {item.linkLabel || 'View'}
                          </a>
                        )}
                      </div>
                      <p className="showcase-item-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
