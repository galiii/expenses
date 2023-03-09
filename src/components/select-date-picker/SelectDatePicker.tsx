import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker, Calendar } from "@material-ui/pickers";
import styles from "./styles";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export const SelectDatePicker = () => {
  //states
  //const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

  const handleDayRender = (
    day: Date,
    selectedDate: Date,
    dayComponent: JSX.Element
  ) => {
    return (
      <styles.StyledCalendar>
        {dayComponent}
      </styles.StyledCalendar>
    );

  };

  return (
    <styles.DatepickerContainerStyled>
      <styles.InputLabelStyled id="date">Date</styles.InputLabelStyled>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <styles.DatePickerStyled
          value={new Date()}
          onChange={() => console.log('Date selected')}

          //label="Select a date"
          renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
            console.log(dayComponent);
            return dayComponent;
          }}
          orientation="landscape"
          inputVariant="filled"
        />
      </MuiPickersUtilsProvider>
    </styles.DatepickerContainerStyled>
  );
};
