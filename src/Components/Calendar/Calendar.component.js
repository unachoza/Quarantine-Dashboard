import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
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
      <div>{daysPassed} Since Then</div>
    </>
  );
}
