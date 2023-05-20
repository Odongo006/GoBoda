import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './LandPg/Header/header';
import HeroSec from './LandPg/HeroSec/heroSec';
import AboutSec from './LandPg/AboutSec/aboutSec';
import Course from './LandPg/CourseOffer/course';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <div>
      {/* Render each landing page module */}
      <Header />
      <HeroSec />
      <AboutSec />
      <Course />
      {/* Render other landing page modules */}
    </div>
  </StrictMode>,
);
