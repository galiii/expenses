import { Calendar, DatePicker } from "@material-ui/pickers";
import InputLabel from "@mui/material/InputLabel";
import styled from "styled-components";

export namespace styles {
  export const DatepickerContainerStyled = styled.div`
    display: flex;
    //gap: 10px;
    justify-content: space-around;
    gap: 10px;
    align-self: flex-start;
  `;

  export const InputLabelStyled = styled(InputLabel)`
    font-size: 12px !important;
  `;

  export const DatepickerStyled = styled(DatePicker)`
  && {
    .MuiInputBase-root {
      font-size: 14px;
      background-color: pink;
    }

    .MuiInput-underline:before {
      border-bottom-color: #ccc;
    }

    .MuiInput-underline:after {
      border-bottom-color: #5f5f5f;
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom-color: #aaa;
    }

    .MuiPickersDay-currentMonth:not(.MuiPickersDay-daySelected) {
      color: #333;
      background-color: red;
    }

    .MuiPickersDay-daySelected {
      background-color: #5f5f5f;
      color: #fff;
    }
  }`

  export const StyledCalendar = styled.div`
  calendar {
    & .MuiPickersCalendar-week {
      margin: '0 112px';
    }
    & .MuiPickersDay-day {
      color: 'red';
      font-weight: 'bold',
    }
  }`;


  export const DatePickerStyled = styled(DatePicker)`
  .MuiFilledInput-root {
    padding: 5px;
  }


.MuiFilledInput-input {
    padding: 5px;
}
  
  `;


}

export default styles;
