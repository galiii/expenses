import { Table, TableCell } from "@mui/material";
import styled from "styled-components";

export namespace styles {
  export const TableStyled = styled(Table)`
    color: blue;
    border-bottom: 1px solid #7a86a1 !important;
    table-layout: fixed;
    width: 30% !important;
    margin: 0 auto;
  `;

  export const TableStyledCell = styled(TableCell)`
    color: blue !important;
    border-bottom: 1px solid #7a86a1 !important;
    width: 500px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export default styles;
