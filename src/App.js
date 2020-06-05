import React from 'react';
import UserDashboard from 'Pages/UserDashboard/UserDashboard.pages.js';
import BuildDashboard from 'Pages/BuildDashboard/BuildDashboard.pages.js';
import './App.css';

function App() {
  return (
    <div>
      Quarantine Dashboard
      <UserDashboard />
      <BuildDashboard />
      <div className="pages"></div>
    </div>
  );
}

export default App;
