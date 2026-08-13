import React from 'react';
import { Monitor, Layout, Code2, RefreshCw } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Clean, modern and conversion focused website designs.',
    icon: <Monitor size={24} />
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'User-centered designs that improve engagement.',
    icon: <Layout size={24} />
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Fast, responsive and SEO friendly websites.',
    icon: <Code2 size={24} />
  },
  {
    id: 4,
    title: 'Website Redesign',
    description: 'Transform your website into a modern digital experience.',
    icon: <RefreshCw size={24} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="badge">SERVICES</div>
            <h2 className="section-title">What I Do</h2>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card glass">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
