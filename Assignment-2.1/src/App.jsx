import React from 'react';
import './App.css'; // Import the CSS file for styling
import CollaborationSVG from './assets/collaboration.svg'; // Import the SVG image

const App = () => {
  return (
    <div className="app-container">
      {/* Left Section: Text Area */}
      <div className="left-section">
        <div className="decorative-circles top-left"></div>
        <h1>
          React <br /> Projects
        </h1>
        <p>
          Get a variety of practical applications and hands-on experience with this guide to React projects.
        </p>
      </div>

      {/* Right Section: Illustration Area */}
      <div className="right-section">
      <img src={CollaborationSVG} alt="Collaboration Illustration" className="illustration" />
        <div className="decorative-circles bottom-right"></div>
      </div>
    </div>
  );
};

export default App;