import React from 'react';

/**
 * About Component
 * Demonstrates: Static UI component presenting biographical information.
 */
function About() {
  return (
    <section id="about" className="glass-panel">
      <div className="section-title-wrap">
        <span className="section-icon">👨‍💻</span>
        <h3 className="section-title">About Me</h3>
      </div>
      <p style={{ color: '#d1d5db', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
        Hello! I am Deep Chauhan, a B.Tech Computer Science and Engineering student at
        Charotar University of Science and Technology (CHARUSAT). I am passionate about modern full-stack web
        technologies, building responsive, scalable applications with React, Node.js, Express, and MongoDB.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h4>🎓 Education</h4>
          <p>B. Tech in Computer Science and Engineering (CSPIT / DEPSTAR, CHARUSAT) — 2024–2028</p>
        </div>
        <div className="about-card">
          <h4>🚀 Focus Areas</h4>
          <p>Frontend architecture, component-driven design, REST APIs, and distributed cloud computing.</p>
        </div>
        <div className="about-card">
          <h4>💡 Engineering Philosophy</h4>
          <p>Clean code, reusable component patterns, rigorous testing, and seamless user experiences.</p>
        </div>
        <div className="about-card">
          <h4>📍 Location & Availability</h4>
          <p>Gujarat, India — open to software engineering internships and collaborative open-source work.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
