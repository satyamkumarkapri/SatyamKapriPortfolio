import React from 'react';
import { Wrench, Code2, Server, Database, Settings2 } from 'lucide-react';
import './TechStack.css';

const TechStack: React.FC = () => {
  return (
    <section id="techstack" className="techstack section-padding">
      <div className="container">
        
        <div className="techstack-header">
          <Wrench size={32} className="techstack-icon" />
          <h2 className="section-title">Tech Stack & Skills</h2>
        </div>

        <div className="techstack-grid">
          
          {/* Languages */}
          <div className="tech-category">
            <h3 className="category-title">
              <Code2 size={20} /> Languages
            </h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
              <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
              <img src="https://img.shields.io/badge/SQL-025E8C?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQL" />
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            </div>
          </div>

          {/* Frontend & Backend */}
          <div className="tech-category">
            <h3 className="category-title">
              <Server size={20} /> Frontend & Backend
            </h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
              <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
              <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
              <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
              <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
              <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
            </div>
          </div>

          {/* Databases, AI & ML */}
          <div className="tech-category">
            <h3 className="category-title">
              <Database size={20} /> Databases, AI & ML
            </h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
              <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
              <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
              <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
              <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="Numpy" />
              <img src="https://img.shields.io/badge/Hugging_Face-F8D521?style=for-the-badge&logo=hugging-face&logoColor=black" alt="Hugging Face" />
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="tech-category">
            <h3 className="category-title">
              <Settings2 size={20} /> Tools & Platforms
            </h3>
            <div className="badge-container">
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
              <img src="https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
              <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
              <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
              <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
