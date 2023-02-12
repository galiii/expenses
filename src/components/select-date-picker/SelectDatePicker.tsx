import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import styles from './styles';


export const SelectDatePicker = () => {
  //states
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());



  return (
    <styles.DatepickerContainerStyled>
      <styles.InputLabelStyled id="date">Date</styles.InputLabelStyled>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <DatePicker value={selectedDate} onChange={handleDateChange} />

      </MuiPickersUtilsProvider>
    </styles.DatepickerContainerStyled>

  );
}
