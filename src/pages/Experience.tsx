import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => (
  <section className="work-section">
    <h2>Experience</h2>

    <div className="work-card">
      <div className="work-details">
        <h3>Full Stack Intern</h3>
        <p><strong>Company:</strong> Stacklane</p>
        <p><strong>Duration:</strong> March 2025 – Present</p>
        <p>
          Working on frontend development and cloud deployment strategies. 
          Contributing to scalable UI components, integrating REST APIs, and applying 
          DevOps practices using platforms like <strong>AWS</strong> and <strong>Azure</strong>. 
          Actively building a HackerNews clone using <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Prisma</strong>, and <strong>PostgreSQL</strong>.
        </p>
      </div>
    </div>

 
  </section>
);

export default Experience;
