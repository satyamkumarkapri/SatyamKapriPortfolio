import React, { useState } from 'react';
import { ExternalLink, X, FolderGit2, Star, GitFork } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const projects = [
  {
    id: 1,
    title: 'HealthNet',
    category: 'Healthcare Management System',
    description: 'A comprehensive hospital management platform with patient records, appointments, and billing. Engineered for high availability and secure data handling.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/assets/project1.png',
    githubUrl: 'https://github.com/satyamkumarkapri/HealthNet',
    demoUrl: '',
    featured: true
  },
  {
    id: 2,
    title: 'Hospital Navigation System',
    category: 'Navigation & Pathfinding',
    description: 'An application designed to help patients and staff navigate through complex hospital layouts efficiently.',
    tags: ['Java', 'Algorithms', 'DSA'],
    image: '/assets/hospital_nav.png',
    githubUrl: 'https://github.com/satyamkumarkapri/HospitalNavigationSystem',
    demoUrl: 'https://hospitalnavigationsystem.onrender.com',
    featured: false
  },
  {
    id: 3,
    title: 'PhonePe Payment System',
    category: 'System Design',
    description: 'A simulated digital payments system modelled on PhonePe, built with core Java and object-oriented design patterns.',
    tags: ['Java', 'OOP', 'System Design'],
    image: '/assets/project3.png',
    githubUrl: 'https://github.com/satyamkumarkapri/PhonePeProjectPBL',
    demoUrl: '',
    featured: false
  },
  {
    id: 4,
    title: 'Skill Track (SIH)',
    category: 'Full Stack Development',
    description: 'A platform developed for Smart India Hackathon to track and manage skills effectively.',
    tags: ['TypeScript', 'React', 'Node.js'],
    image: '/assets/skilltrack.png',
    githubUrl: 'https://github.com/satyamkumarkapri/Skill_Track_Sih',
    demoUrl: 'https://skilltrackmaharashtra.vercel.app',
    featured: false
  },
  {
    id: 6,
    title: 'Product Catalog',
    category: 'Backend Development',
    description: 'A robust product catalog management system built with Java.',
    tags: ['Java', 'Backend'],
    image: '/assets/project3.png',
    githubUrl: 'https://github.com/satyamkumarkapri/Product_Catalog',
    demoUrl: '',
    featured: false
  },
  {
    id: 7,
    title: 'Placements Prediction',
    category: 'Machine Learning',
    description: 'A machine learning model to predict student placement outcomes based on academic and extracurricular data.',
    tags: ['Python', 'HTML', 'Machine Learning'],
    image: '/assets/project1.png',
    githubUrl: 'https://github.com/satyamkumarkapri/Placements_Prediction',
    demoUrl: '',
    featured: false
  },
  
  {
    id: 10,
    title: 'COVID-19 Data Analysis',
    category: 'Data Science & Machine Learning',
    description: 'A fully responsive, interactive AI/Data Science dashboard for visualizing global pandemic data using Machine Learning and advanced charting.',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Hugging Face'],
    image: '/assets/covid19.png',
    githubUrl: 'https://github.com/satyamkumarkapri/Covid-19-Data-Analysis',
    demoUrl: 'https://huggingface.co/spaces/satyamkumarkapri/Covid-19DataAnalysis',
    featured: false
  },
  {
    id: 11,
    title: 'Kishan Traders',
    category: 'Business & Corporate',
    description: "A modern, responsive business website for Bihar's most trusted wholesale supplier of iron, steel, and building materials.",
    tags: ['React', 'Web Development', 'Business'],
    image: '/assets/kishan_traders.png',
    githubUrl: '',
    demoUrl: 'https://kishan-traders.vercel.app/',
    featured: false
  }
];

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchGithubRepos = async () => {
    if (githubRepos.length > 0) return;
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/satyamkumarkapri/repos?sort=updated&per_page=100');
      if (!response.ok) throw new Error('Failed to fetch repositories');
      const data = await response.json();
      setGithubRepos(data.filter((repo: any) => !repo.fork));
    } catch (err) {
      setError('Could not load projects from GitHub.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    fetchGithubRepos();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const featuredProject = projects.find(p => p.featured) || projects[0];
  const otherProjects = projects.filter(p => !p.featured || p.id !== featuredProject.id);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        
        <div className="section-header project-header">
          <div>
            <div className="badge">PORTFOLIO</div>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <button className="btn btn-outline" onClick={openModal}>
            <FaGithub size={16} /> View All GitHub Repos
          </button>
        </div>

        {/* Featured Project */}
        <div 
          className="featured-project card-base"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          }}
        >
          <div className="featured-image">
            {featuredProject.image === '/assets/hospital_nav.png' || featuredProject.image === '/assets/covid19.png' || featuredProject.image === '/assets/skilltrack.png' || featuredProject.image === '/assets/kishan_traders.png' ? (
              <img src={featuredProject.image} alt={featuredProject.title} loading="lazy" />
            ) : (
              <div className="image-coming-soon">
                <span>Image Coming Soon</span>
              </div>
            )}
          </div>
          <div className="featured-content">
            <div className="badge featured-badge">FEATURED</div>
            <h3 className="featured-title">{featuredProject.title}</h3>
            <p className="featured-category">{featuredProject.category}</p>
            <p className="featured-desc">{featuredProject.description}</p>
            <div className="project-tags">
              {featuredProject.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-actions mt-6" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {featuredProject.demoUrl && (
                <a href={featuredProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
              {featuredProject.githubUrl && (
                <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Source Code <FaGithub size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card card-base animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div className="project-image-wrapper">
                {project.image === '/assets/hospital_nav.png' || project.image === '/assets/covid19.png' || project.image === '/assets/skilltrack.png' || project.image === '/assets/kishan_traders.png' ? (
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                ) : (
                  <div className="image-coming-soon">
                    <span>Image Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions mt-4" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '16px' }}>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* GitHub Projects Modal */}
      {isModalOpen && (
        <div className="projects-modal-overlay" onClick={closeModal}>
          <div className="projects-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <FolderGit2 size={24} className="text-primary" />
                <h2>All GitHub Repositories</h2>
              </div>
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              {loading && (
                <div className="modal-state">
                  <div className="spinner"></div>
                  <p>Loading repositories...</p>
                </div>
              )}
              {error && <div className="modal-state error">{error}</div>}
              
              {!loading && !error && (
                <div className="github-repos-grid">
                  {githubRepos.map(repo => (
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id} className="github-repo-card card-base">
                      <div className="repo-header">
                        <FolderGit2 className="repo-icon" size={20} />
                        <ExternalLink className="repo-link-icon" size={16} />
                      </div>
                      <h3 className="repo-name">{repo.name}</h3>
                      <p className="repo-description">{repo.description || 'No description provided.'}</p>
                      <div className="repo-footer">
                        {repo.language && (
                          <span className="repo-lang">
                            <span className="lang-dot"></span>
                            {repo.language}
                          </span>
                        )}
                        <div className="repo-stats">
                          <span title="Stars"><Star size={14} /> {repo.stargazers_count}</span>
                          <span title="Forks"><GitFork size={14} /> {repo.forks_count}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
