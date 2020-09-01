import React from 'react';
import Header from 'UI/Header';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import 'Pages/UserDashboard/UserDashboard.styles.css';

const UserDashboard = () => {
  return (
    <>
      <Header />
      <div className="UserDashboard__container">UserDashboard</div>
    </>
  );
};

export default UserDashboard;
