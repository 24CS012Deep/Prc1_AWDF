import React from 'react';

/**
 * Projects Component
 * Renders portfolio project cards with tech stack badges and repository links.
 */
function Projects({ projects = [] }) {
  return (
    <section id="projects" className="glass-panel">
      <div className="section-title-wrap">
        <span className="section-icon">💼</span>
        <h3 className="section-title">Featured Projects</h3>
      </div>
      <p className="section-subtitle">
        Selected software engineering, full-stack, and frontend projects
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              View on GitHub <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
