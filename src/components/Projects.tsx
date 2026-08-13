import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Nexora Agency',
    category: 'Corporate Website',
    image: '/assets/project1.png',
  },
  {
    id: 2,
    title: 'Finovo Banking',
    category: 'Fintech Website',
    image: '/assets/project2.png',
  },
  {
    id: 3,
    title: 'Luna Furniture',
    category: 'E-commerce Website',
    image: '/assets/project3.png',
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="badge">FEATURED PROJECTS</div>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <a href="#" className="view-all">
            VIEW ALL PROJECTS <ArrowRight size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
                <a href="#" className="project-link">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
