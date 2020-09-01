import React from 'react';
import Header from 'UI/Header';
import ProgressBar from 'Components/ProgressBar/ProgressBar.component';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import 'Pages/UserDashboard/UserDashboard.styles.css';

const UserDashboard = () => {
  return (
    <>
      <Header />

      <ProgressBar />
    </>
  );
};

export default UserDashboard;
