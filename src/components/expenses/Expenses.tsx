import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./styles";
import { useState } from "react";

import { contacts } from "../../db/mock-data";
import { columns } from "../../utils/constants";
import Paper from "@mui/material/Paper";

export const Expenses = () => {
    //States
    const [expenses, setExpenses] = useState(contacts);
    //Helper

    console.log("col", Object.entries(expenses[0]));
    //Renders
    const renderHeaderTable = () => {
        return (
            <styles.StyledTableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                </TableRow>
            </styles.StyledTableHead>
        );
    };

    const renderBodyTable = () => {
        return (
            <TableBody>
                {expenses.map((row, i) => {
                    return (
                        <styles.StyledTableRow role="checkbox" tabIndex={-1} key={i}>
                            {Object.values(row).filter((it, index) => index !== 0).map((r, index) => (
                                <styles.TableStyledCell key={r.id}>
                                    {`${r} `}
                                </styles.TableStyledCell>
                            ))}
                        </styles.StyledTableRow>
                    );
                })}
            </TableBody>
        );
    };

    return (
        <div>
            <h5>LIST</h5>
            <styles.ContainerTableStyled sx={{ maxHeight: 440 }} >
                <styles.TableStyled stickyHeader aria-label="sticky table">
                    {renderHeaderTable()}
                    {renderBodyTable()}
                </styles.TableStyled>
            </styles.ContainerTableStyled>
        </div>
    );
};
