import React from 'react';

/**
 * Skills Component
 * Renders technical competencies and proficiency levels dynamically from props.
 */
function Skills({ skillList = [] }) {
  return (
    <section id="skills" className="glass-panel">
      <div className="section-title-wrap">
        <span className="section-icon">⚡</span>
        <h3 className="section-title">Technical Skills</h3>
      </div>
      <p className="section-subtitle">
        Core technologies, frameworks, and engineering proficiencies
      </p>

      <ul className="skills-list">
        {skillList.map((skill, index) => {
          const name = typeof skill === 'string' ? skill : skill.name;
          const level = typeof skill === 'object' && skill.level ? skill.level : 85;
          const category = typeof skill === 'object' && skill.category ? skill.category : 'General';

          return (
            <li key={typeof skill === 'string' ? skill : skill.name || index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{name}</span>
                <span className="skill-badge">{category}</span>
              </div>
              <div className="skill-level-bar">
                <div
                  className="skill-level-fill"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
