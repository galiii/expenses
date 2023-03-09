import TableHead from "@material-ui/core/TableHead";
import { Table, TableCell, TableContainer, TableRow } from "@mui/material";
import styled from "styled-components";

export namespace styles {

  export const ContainerTableStyled = styled(TableContainer)`
  background-color: #333333;
`;
  export const TableStyled = styled(Table)`
    color: blue;
    border-bottom: 1px solid #7a86a1 !important;
    table-layout: fixed;
    width: 30% !important;
    margin: 0 auto;
  `;

  export const StyledTableHead = styled(TableHead)`
    background-color: #1a1a1a;
    color: #ffffff;
    font-size: 16px;
  `;

  export const StyledTableRow = styled(TableRow)`
background-color: #292929;
`;

  export const TableStyledCell = styled(TableCell)`
    color:  #ffffff !important;
    border-bottom: 1px solid #7a86a1 !important;
    width: 500px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export default styles;
