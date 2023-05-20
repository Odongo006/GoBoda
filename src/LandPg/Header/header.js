import React from 'react';
import './header.css';

const Header = () => (
  <header className="Heading" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
    <h1 style={{ fontSize: '24px', margin: '0' }}>GoBoda</h1>
    <nav>
      <ul style={{
        display: 'flex', listStyle: 'none', margin: '0', padding: '0',
      }}
      >
        <li style={{ marginRight: '10px' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        </li>
        <li style={{ marginRight: '10px' }}>
          <a href="#courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a>
        </li>
        <li style={{ marginRight: '10px' }}>
          <a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</a>
        </li>
        <li>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
