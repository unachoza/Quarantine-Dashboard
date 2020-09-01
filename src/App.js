import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'UI/Theme.js';
import MiniDrawer from 'Components/LeftSlideDrawer/Main&Drawer.component.js';
import Modal from '@material-ui/core/Modal';
import UserDashboard from 'Pages/UserDashboard/UserDashboard.pages.js';
import './App.css';

const App = () => {
  const [immediateOpen, setImmediateOpen] = useState(true);

  useEffect(() => {
    setImmediateOpen(true);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <UserDashboard />
        {/* <MiniDrawer /> */}
        {/* //opening model to get user input for name */}
        {/* <Modal
          open={immediateOpen}
          aria-labelledby="User Name"
          aria-describedby="enter user name to personalize dashboard"
        ></Modal> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
