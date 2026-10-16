import React from 'react';

/**
 * Header Component
 * Displays developer personal details, active status, and custom theme banner.
 */
function Header({ name, rollNo, role, tagline, themeColor }) {
  const headerStyle = {
    background: themeColor 
      ? `linear-gradient(135deg, ${themeColor} 0%, #111827 100%)`
      : 'linear-gradient(135deg, #1e1b4b 0%, #111827 100%)'
  };

  return (
    <header className="header-wrapper" style={headerStyle}>
      <div className="header-badge-row">
        <span className="badge-tag">ID: {rollNo}</span>
        <span className="badge-tag">CSPIT / DEPSTAR - CHARUSAT</span>
        <span className="badge-tag badge-status">
          <span className="status-dot"></span>
          Available for Opportunities
        </span>
      </div>
      <h1 className="header-name">{name}</h1>
      <h2 className="header-role">{role}</h2>
      <p className="header-tagline">{tagline}</p>
    </header>
  );
}

export default Header;
