import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'UI/Theme.js';
import MiniDrawer from 'Components/LeftSlideDrawer/Main&Drawer.component.js';
import './App.css';
import Modal from '@material-ui/core/Modal';

const App = () => {
  const [immediateOpen, setImmediateOpen] = useState(false);

  useEffect(() => {
    setImmediateOpen(true);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <MiniDrawer />
        {/* //opening model to get user input for name */}
        {/* <Modal
          open={immediateOpen}
          aria-labelledby="User Name"
          aria-describedby="enter user name to personalize dashboard"
        >
        </Modal> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
