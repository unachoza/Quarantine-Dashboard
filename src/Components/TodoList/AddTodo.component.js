import React, { memo } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  divider: {
    height: 28,
    margin: 4,
  },
}));

const CustomizedInputBase = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};

export const AddTodo = memo((props) => {
  const classes = useStyles();
  return (
    <Paper style={{ margin: 16, padding: 16, width: 'fit-content' }}>
      <CustomizedInputBase></CustomizedInputBase>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16, display: 'flex', overflow: 'none' }}>
          <TextField
            placeholder="Add Todo here"
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            fullWidth
          />
          <Divider className={classes.divider} orientation="vertical" />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button fullWidth color="primary" variant="outlined" onClick={props.onButtonClick}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
});
