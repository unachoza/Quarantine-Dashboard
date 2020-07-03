import React, { memo } from 'react';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
const Layout = memo((props) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa', border: 'solid', width: 'fit-content' }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">Create a todo List</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));
export default Layout;
