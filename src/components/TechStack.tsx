import React from 'react';
import { Code2, Layout, Server, Database, BrainCircuit, Settings2 } from 'lucide-react';
import './TechStack.css';

interface Skill {
  name: string;
  badge?: string;
}

interface TechCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  themeColor: string;
  themeBg: string;
  skills: Skill[];
}

const TechStack: React.FC = () => {
  const techCategories: TechCategory[] = [
    {
      title: 'Languages & Core CS',
      subtitle: 'Fundamentals & OOP',
      icon: Code2,
      themeColor: '#8B5CF6',
      themeBg: 'rgba(139, 92, 246, 0.12)',
      skills: [
        { name: 'Java', badge: 'Core & OOP' },
        { name: 'Python', badge: 'Scripting & ML' },
        { name: 'JavaScript', badge: 'ES6+' },
        { name: 'TypeScript', badge: 'Strict Types' },
        { name: 'C / C++', badge: 'Systems' },
        { name: 'SQL', badge: 'Relational' }
      ]
    },
    {
      title: 'Frontend Engineering',
      subtitle: 'Reactive User Interfaces',
      icon: Layout,
      themeColor: '#06B6D4',
      themeBg: 'rgba(6, 182, 212, 0.12)',
      skills: [
        { name: 'React.js', badge: 'Components' },
        { name: 'TypeScript', badge: 'Type-Safe UI' },
        { name: 'Vite', badge: 'Bundler' },
        { name: 'Tailwind CSS', badge: 'Design System' },
        { name: 'HTML5 / CSS3', badge: 'Semantic' },
        { name: 'Responsive UI', badge: 'Mobile-first' }
      ]
    },
    {
      title: 'Backend & Services',
      subtitle: 'Server Architectures & APIs',
      icon: Server,
      themeColor: '#10B981',
      themeBg: 'rgba(16, 185, 129, 0.12)',
      skills: [
        { name: 'Node.js', badge: 'Runtime' },
        { name: 'Express.js', badge: 'REST APIs' },
        { name: 'Spring Boot', badge: 'Enterprise' },
        { name: 'FastAPI', badge: 'Python APIs' },
        { name: 'Microservices', badge: 'Distributed' },
        { name: 'JWT Auth', badge: 'Security' }
      ]
    },
    {
      title: 'Databases & Storage',
      subtitle: 'Data Persistence & Modeling',
      icon: Database,
      themeColor: '#F59E0B',
      themeBg: 'rgba(245, 158, 11, 0.12)',
      skills: [
        { name: 'PostgreSQL', badge: 'Relational' },
        { name: 'MongoDB', badge: 'NoSQL Docs' },
        { name: 'Schema Design', badge: 'Normalization' },
        { name: 'Data Indexing', badge: 'Query Tuning' },
        { name: 'Aggregation', badge: 'Pipelines' },
        { name: 'Data Security', badge: 'ACID' }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      subtitle: 'Intelligent Systems & Analytics',
      icon: BrainCircuit,
      themeColor: '#EC4899',
      themeBg: 'rgba(236, 72, 153, 0.12)',
      skills: [
        { name: 'Scikit-Learn', badge: 'ML Models' },
        { name: 'Pandas', badge: 'Data Wrangling' },
        { name: 'NumPy', badge: 'Vector Math' },
        { name: 'Hugging Face', badge: 'NLP Models' },
        { name: 'ML Pipelines', badge: 'Feature Eng.' },
        { name: 'Model Tuning', badge: 'Validation' }
      ]
    },
    {
      title: 'DevOps & Tooling',
      subtitle: 'Workflow & Infrastructure',
      icon: Settings2,
      themeColor: '#3B82F6',
      themeBg: 'rgba(59, 130, 246, 0.12)',
      skills: [
        { name: 'Git', badge: 'Version Control' },
        { name: 'GitHub', badge: 'Collaboration' },
        { name: 'Docker', badge: 'Containers' },
        { name: 'Postman', badge: 'API Testing' },
        { name: 'Render', badge: 'Deployment' },
        { name: 'VS Code', badge: 'Dev Setup' }
      ]
    }
  ];

  return (
    <section id="techstack" className="techstack section-padding">
      <div className="container">
        
        <div className="section-header center-align">
          <div className="badge">SKILLS</div>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A comprehensive, battle-tested technology stack spanning frontend systems, backend services, databases, and AI modeling.
          </p>
        </div>

        <div className="tech-symmetric-grid">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="tech-category-card card-base animate-fade-in"
              >
                {/* Header */}
                <div className="tech-card-header">
                  <div 
                    className="tech-icon-badge"
                    style={{ backgroundColor: category.themeBg, color: category.themeColor, borderColor: `${category.themeColor}33` }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="tech-category-title">{category.title}</h3>
                    <p className="tech-category-sub">{category.subtitle}</p>
                  </div>
                </div>

                {/* Structured 2-Column Micro Grid of Skills */}
                <div className="tech-skills-grid">
                  {category.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="tech-skill-tile">
                      <div className="tech-tile-left">
                        <span 
                          className="tech-tile-dot"
                          style={{ backgroundColor: category.themeColor }}
                        />
                        <span className="tech-tile-name">{skill.name}</span>
                      </div>
                      {skill.badge && (
                        <span 
                          className="tech-tile-badge"
                          style={{ color: category.themeColor, backgroundColor: category.themeBg }}
                        >
                          {skill.badge}
                        </span>
                      )}
                    </div>
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

export default TechStack;
