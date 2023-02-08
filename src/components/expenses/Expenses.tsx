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

export const Expenses = () => {
    //States
    const [expenses, setExpenses] = useState(contacts);
    //Helper

    //Renders
    const renderHeaderTable = () => {
        return (
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    };

    const renderBodyTable = () => {
        return (
            <TableBody>
                {expenses.map((row, i) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                            {Object.values(row).map((r, index) => (
                                <styles.TableStyledCell key={index}>
                                    {`${r} `}
                                </styles.TableStyledCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        );
    };

    return (
        <div>
            <h5>LIST</h5>
            <TableContainer sx={{ maxHeight: 440 }}>
                <styles.TableStyled stickyHeader aria-label="sticky table">
                    {renderHeaderTable()}
                    {renderBodyTable()}
                </styles.TableStyled>
            </TableContainer>
        </div>
    );
};
