import React, { useState } from 'react';
import { Trophy, Award, Code2, Medal, Zap, ExternalLink, FileText, Code, Flame, BookOpen, GraduationCap } from 'lucide-react';
import { SiHackerrank, SiLeetcode, SiCodechef } from 'react-icons/si';
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
  const [activeTab, setActiveTab] = useState<'programming' | 'certifications'>('programming');

  const compItems: ShowcaseItem[] = [
    {
      id: 1,
      icon: SiCodechef,
      title: '4★ CodeChef Programmer',
      desc: 'Current Rating: 1820 (Div 2). Highest rating 2128 — ranked #3556 globally and #3112 in India.',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#F59E0B',
      linkUrl: 'https://www.codechef.com/users/kl_2500031975',
      linkLabel: 'View Profile'
    },
    {
      id: 2,
      icon: SiCodechef,
      title: 'DSA Rating 1901',
      desc: 'Highest rating 1904 — ranked #445 globally and #422 in India for algorithmic problem solving.',
      badgeBg: 'rgba(139, 92, 246, 0.15)',
      iconColor: '#8B5CF6',
      linkUrl: 'https://www.codechef.com/users/kl_2500031975',
      linkLabel: 'View Profile'
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
    },
    {
      id: 6,
      icon: SiLeetcode,
      title: 'LeetCode Problem Solver',
      desc: 'Contest Rating 1,540 — actively solving algorithmic problems using Java. Participant in LeetCoding challenges.',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#F59E0B',
      linkUrl: 'https://leetcode.com/u/satyamkapri17/',
      linkLabel: 'View Profile'
    }
  ];

  const certItems: ShowcaseItem[] = [
    {
      id: 109,
      icon: Code2,
      title: 'HackQuest: Code for Communities 2.0',
      desc: "Certificate of Participation in HackQuest: Code for Communities 2.0 of Pantheon'26 by Unstop. Credential ID: 56514b3f-678a-4714-9f12-0197d74f94a4",
      badgeBg: 'rgba(236, 72, 153, 0.15)',
      iconColor: '#EC4899',
      linkUrl: 'https://unstop.com/certificate-preview/56514b3f-678a-4714-9f12-0197d74f94a4?utm_campaign',
      linkLabel: 'View Credential'
    },
    {
      id: 108,
      icon: Code2,
      title: 'Navachar - Code Fest 2026',
      desc: 'Certificate of Participation in Navachar - Code Fest 2026 by MIT & Unstop. Credential ID: 39a5f551-c293-4b92-aebf-44167998da36',
      badgeBg: 'rgba(139, 92, 246, 0.15)',
      iconColor: '#8B5CF6',
      linkUrl: 'https://unstop.com/certificate-preview/39a5f551-c293-4b92-aebf-44167998da36?utm_campaign',
      linkLabel: 'View Credential'
    },
    {
      id: 107,
      icon: Award,
      title: 'Scrum Fundamentals Certified',
      desc: 'Credential ID: 1192339 (SCRUMstudy).',
      badgeBg: 'rgba(59, 130, 246, 0.15)',
      iconColor: '#3B82F6',
      linkUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1192339',
      linkLabel: 'View Credential'
    },
    {
      id: 106,
      icon: SiHackerrank,
      title: 'HackerRank Certification',
      desc: 'Problem Solving (Intermediate) Certificate of Accomplishment (ID: BC5F3B0F81BC).',
      badgeBg: 'rgba(34, 197, 94, 0.15)',
      iconColor: '#22C55E',
      linkUrl: 'https://www.hackerrank.com/certificates/BC5F3B0F81BC',
      linkLabel: 'View Credential'
    },
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
      title: 'Algorithmic Problem Solving',
      desc: 'Certified by CodeChef in Algorithmic Problem Solving using Java. Credential ID: 712d249 (Username: kl2500031975).',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#F59E0B',
      linkUrl: 'https://www.codechef.com/certificates/verify',
      linkLabel: 'Verify Certificate'
    },
    {
      id: 110,
      icon: Code,
      title: 'Learn Java Certification',
      desc: 'Certified by CodeChef in Learn Java. Credential ID: 6a72528 (Username: kl2500031975).',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#F59E0B',
      linkUrl: 'https://www.codechef.com/certificates/verify',
      linkLabel: 'Verify Certificate'
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
      title: 'Introduction to ASP.Net',
      desc: 'Certificate of Completion by Simplilearn SkillUp. Credential ID: 10206891.',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      iconColor: '#06B6D4'
    },
    {
      id: 111,
      icon: BookOpen,
      title: 'Mathematics for Data Science',
      desc: 'Certificate of Completion by Simplilearn SkillUp. Credential ID: 10268307.',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      iconColor: '#06B6D4'
    },
    {
      id: 112,
      icon: BookOpen,
      title: 'Python Django 101',
      desc: 'Certificate of Completion by Simplilearn.',
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

        <div className="achievements-tabs-wrapper">
          <div className="achievements-tabs">
            <button 
              className={`achievements-tab ${activeTab === 'programming' ? 'active' : ''}`}
              onClick={() => setActiveTab('programming')}
            >
              <Trophy size={18} /> Competitive Programming
            </button>
            <button 
              className={`achievements-tab ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              <Award size={18} /> Certifications & Credentials
            </button>
          </div>
        </div>

        <div className="achievements-tab-content">
          {/* Ambient Glow Effects */}
          <div className="achievements-glow glow-1"></div>
          <div className="achievements-glow glow-2"></div>

          <div className="achievements-grid">
            {(activeTab === 'programming' ? compItems : certItems).map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="achievement-card" 
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    '--card-accent': item.iconColor
                  } as React.CSSProperties}
                >
                  <div className="achievement-card-header">
                    <div 
                      className="achievement-icon-wrapper" 
                      style={{ backgroundColor: item.badgeBg, color: item.iconColor }}
                    >
                      <Icon size={24} />
                    </div>
                    {item.linkUrl && (
                      <a 
                        href={item.linkUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="achievement-link-btn"
                        style={{ color: item.iconColor, borderColor: `${item.iconColor}40`, backgroundColor: `${item.iconColor}15` }}
                        title={item.linkLabel || "View Credential"}
                      >
                        <ExternalLink size={14} /> {item.linkLabel || 'View'}
                      </a>
                    )}
                  </div>
                  <div className="achievement-card-body">
                    <h4 className="achievement-title">{item.title}</h4>
                    <p className="achievement-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
