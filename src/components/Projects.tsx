import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, FolderGit2, Star, GitFork } from 'lucide-react';

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
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'HealthNet',
    category: 'Healthcare Management System',
    description: 'A comprehensive hospital management platform with patient records, appointments, and billing.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/project1.png',
    link: 'https://github.com/satyamkumarkapri/HealthNet'
  },
  {
    id: 2,
    title: 'HealthNet Intelligent System',
    category: 'Java, OOP, Data Structures',
    description: 'An intelligent healthcare backend using OOP principles and advanced data structures for efficient data management.',
    tags: ['Java', 'OOP', 'DSA'],
    image: '/assets/project2.png',
    link: 'https://github.com/satyamkumarkapri/PhonePeProjectPBL'
  },
  {
    id: 3,
    title: 'PhonePe Payment System',
    category: 'Java',
    description: 'A simulated digital payments system modelled on PhonePe, built with core Java and object-oriented design.',
    tags: ['Java', 'OOP', 'System Design'],
    image: '/assets/project3.png',
    link: 'https://github.com/satyamkumarkapri/Resource_Booking_Project'
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

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="badge">FEATURED PROJECTS</div>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <a href="#" className="view-all" onClick={openModal}>
            VIEW ALL PROJECTS <ArrowRight size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-link">
                    <ExternalLink size={20} /> View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={20} />
                </a>
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
                <FolderGit2 size={24} />
                <h2>All GitHub Repositories</h2>
              </div>
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              {loading && <div className="modal-loading">Loading projects from GitHub...</div>}
              {error && <div className="modal-error">{error}</div>}
              
              {!loading && !error && (
                <div className="github-repos-grid">
                  {githubRepos.map(repo => (
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id} className="github-repo-card">
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
