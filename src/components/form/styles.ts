import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export namespace styles {
  export const TitleFormStyled = styled.h5`
    margin: 0;
    margin-top: 10px;
    margin-left: 28px;
    text-align: start;
    padding: 0;
    font-weight: 800;
  `;

  export const ContainerFormStyled = styled.form`
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    margin: 32px 28px 12px;
    //width: 100%;
`;

  export const TextFieldStyled = styled(TextField)`
   width: 100%;

`;

}

export default styles;