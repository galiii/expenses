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
}

export default styles;
