import React from 'react';
import { ThemeProvider, mStyles } from '@material-ui/core/styles';
import theme from 'UI/Theme.js';
import UserDashboard from 'Pages/UserDashboard/UserDashboard.pages.js';
import BuildDashboard from 'Pages/BuildDashboard/BuildDashboard.pages.js';
import MiniDrawer from 'Components/LeftSlideDrawer/LeftSlideDrawer.component.js';
import './App.css';
import { USER } from 'Constants/User';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <MiniDrawer />
        {/* <BuildDashboard /> */}
        <div className="pages"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
