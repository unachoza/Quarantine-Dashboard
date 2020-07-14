import 'date-fns';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 500,
    height: 500,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date('2020-01-18T21:11:54'));
  const [daysPassed, setDaysPassed] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    makeCounterFromDate(date);
    console.log(daysPassed);
  };
  const makeCounterFromDate = (startDate) => {
    let today = new Date();
    let daysSince = differenceInCalendarDays(today, startDate);
    setDaysPassed(daysSince);
  };

  return (
    <>
      {daysPassed === 0 && (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around" style={{ width: 1 }}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              disableUnderline={true}
              style={{ width: '25px', height: '25px' }}
              // label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      )}
      {daysPassed > 0 && <div>{daysPassed} Days have passed since then</div>}
    </>
  );
}
