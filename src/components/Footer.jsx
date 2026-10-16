import React from 'react';

/**
 * Footer Component
 * Displays institutional affiliation, contact links, and copyright info.
 */
function Footer({ studentName, rollNo, email, githubUrl }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-wrap">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href={`mailto:${email}`} className="footer-link">
              📧 {email}
            </a>
          </li>
          <li>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
              🐙 GitHub Profile
            </a>
          </li>
          <li>
            <span className="footer-link">
              🏛️ CHARUSAT - CSPIT / DEPSTAR
            </span>
          </li>
        </ul>
        <p className="footer-copy">
          © {currentYear} {studentName} ({rollNo}) • Department of Computer Science & Engineering, CHARUSAT.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
