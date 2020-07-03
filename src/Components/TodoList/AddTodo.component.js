import React, { memo } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

export const AddTodo = memo((props) => {
  return (
    <Paper style={{ margin: '16px', padding: '16px 0px 16px 16px', width: '435px' }}>
      <Grid container style={{ marginRight: '-20px', width: '440px' }}>
        <Grid xs={10} md={11} item style={{ display: 'flex', overflow: 'none' }}>
          <TextField
            placeholder="Add Todo here"
            fullWidth
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
          />

          <Button
            color="primary"
            style={{ margin: '0px 2px 0px 20px' }}
            variant="outlined"
            onClick={props.onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
});
