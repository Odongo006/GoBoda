import React from 'react';
import './heroSec.css';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to the Bodaboda Training Center</h1>
      <p className="hero-description">
        At our center, we emphasize responsible behavior and professionalism in the bodaboda
        sector. Join us to gain the necessary skills and knowledge to excel in this industry.
      </p>
      <div className="hero-buttons">
        <button type="button" className="explore-button">
          Explore Courses
        </button>
        <button type="button" className="signup-button">
          Sign Up for Updates
        </button>
      </div>
    </div>
    <div className="hero-image" />
  </section>
);

export default HeroSection;
