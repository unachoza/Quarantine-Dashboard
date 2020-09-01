import React, { memo } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

export const AddTodo = memo((props) => {
  return (
    <Paper style={{ margin: '10px', padding: '8px 0px 8px 8px' }}>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid xs={10} md={11} item style={{ display: 'flex', overflow: 'none' }}>
          <TextField
            placeholder="Add Todo here"
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
          />

          <Button
            color="primary"
            style={{ margin: '0px 0px 0px 20px' }}
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
