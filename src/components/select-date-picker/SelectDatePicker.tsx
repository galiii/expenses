import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


export const SelectDatePicker = () => {
  //states
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());



  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />

    </MuiPickersUtilsProvider>
  );
}
