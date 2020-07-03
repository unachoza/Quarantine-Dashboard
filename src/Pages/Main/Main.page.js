import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'Pages/UserDashboard/UserDashboard.styles.css';
import { USER } from 'Constants/User.js';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div className="Main__container">
      <div style={{ fontSize: '60px', textAlign: 'center', marginTop: '60px' }}>{USER.name}'s Dashboard</div>
      <div className={classes.toolbar} />
      <Typography paragraph>Things I'm counting and keeping track of</Typography>
      Landing on the main page blah blah blah
    </div>
  );
};

export default Main;
