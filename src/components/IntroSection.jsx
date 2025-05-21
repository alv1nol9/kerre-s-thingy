import React from "react";
import { Link } from 'react-router-dom';
import '../../css/IntroSection.css'; // <--- ADJUSTED PATH

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="overlay" />
      <div className="intro-content">
        <h1>Find Your Dream Car</h1>
        <p>Browse top-rated listings, compare models, and drive away happy.</p>
        <Link to="/cars" className="cta-button">Browse Cars 🚘</Link>
      </div>
    </div>
  );
};

export default IntroSection;