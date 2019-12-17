import React from 'react';
import LandingHome from './LandingHome';
import './landingPage.css';

function LandingPage() {
  return (
    <>
      <body>
        <div className="Header">
          <h1>GroovnMusic</h1>
        </div>
        <div className="tagline">
          <h3>get into the groove....</h3>
        </div>

        <div className="search">
          <input type="text" className="input" placeholder="Search ...." />
          <ul>...</ul>
        </div>
        <LandingHome />
      </body>
    </>
  );
}

export default LandingPage;
