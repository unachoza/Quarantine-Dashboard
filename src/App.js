import React from 'react';
import UserDashboard from 'Pages/UserDashboard/UserDashboard.pages.js';
import BuildDashboard from 'Pages/BuildDashboard/BuildDashboard.pages.js';
import './App.css';

function App() {
  return (
    <div className="App">
      Quarantine Dashboard
      <div className="pages">
        <UserDashboard />
        <BuildDashboard />
      </div>
    </div>
  );
}

export default App;
