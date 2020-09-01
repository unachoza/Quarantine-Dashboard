import React, { memo, useState } from 'react';
import { AppBar, Toolbar, Typography, Paper, TextField } from '@material-ui/core';

const Layout = memo((props) => {
  const [title, setTitle] = useState('Create a List');
  const titleList = (e) => {
    console.log('clicked this title', e);
    setTitle(e.target.value);
  };
  return (
    <Paper
      elevation={0}
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: '#fafafa',
        border: 'solid',
        width: '300px',
        height: 'fit-content',
      }}
    >
      <AppBar color="primary" position="static" style={{ height: 45 }}>
        <Toolbar>
          <Typography color="inherit" onClick={titleList}>
            Create a List
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Paper>
  );
});
export default Layout;
