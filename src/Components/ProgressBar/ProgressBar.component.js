import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '20%',
    height: '15px',
    margin: '20px',
  },
}));

export default function LinearDeterminate() {
  const theme = useTheme();
  const classes = useStyles();
  const [progress, setProgress] = React.useState(18);

  return (
    <div className={classes.root}>
      <Typography variant="h6">Zero To Master Data Structures</Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{
          height: '24px',
          borderRadius: '3px',
        }}
      />
      <Typography variant="h6">{progress}%</Typography>
    </div>
  );
}
