import React, { useState, useEffect } from 'react';
import { ThemeProvider, mStyles } from '@material-ui/core/styles';
import theme from 'UI/Theme.js';
import UserDashboard from 'Pages/UserDashboard/UserDashboard.pages.js';
import BuildDashboard from 'Pages/BuildDashboard/BuildDashboard.pages.js';
import MiniDrawer from 'Components/LeftSlideDrawer/LeftSlideDrawer.component.js';
import './App.css';
import Modal from '@material-ui/core/Modal';
import SimpleModal from 'Components/SimpleModal/Modal.component';
import { USER } from 'Constants/User';

const App = () => {
  const [immediateOpen, setImmediateOpen] = useState(false);

  useEffect(() => {
    setImmediateOpen(true);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <MiniDrawer />
        <Modal openModal={immediateOpen} />
        {/* <BuildDashboard /> */}
        <div className="pages"></div>
      </div>
    </ThemeProvider>
  );
};

export default App;
