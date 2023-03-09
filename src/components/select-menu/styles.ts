import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import styled from "styled-components";

export namespace styles {
  export const SelectMenuContainerStyled = styled(Box)`
    width: 100%;
  `;

  export const InputLabelStyled = styled(InputLabel)`
    //font-size: 12px !important;
  `;

  export const SelectStyled = styled(Select)`
    padding: 0 !important;
    text-align: left;
    .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input {
   padding: 12px;
  }
  `;
}

export default styles;
