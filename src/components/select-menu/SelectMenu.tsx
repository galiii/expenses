import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import { Payment } from '../../models/expenses';
import styles from './styles';


Object.keys(Payment).forEach((p, i) => console.log(`${p}  ${i}`))
console.log("pay", Object.values(Payment));

export const SelectMenu = () => {
    //states
    const [pay, setPay] = React.useState<Payment>();

    const handleChange = (event: SelectChangeEvent) => {
        setPay(event.target.value as Payment);
    };

    //render
    return (
        <styles.SelectMenuContainerStyled sx={{ minWidth: 120 }} right={12}>
            <FormControl fullWidth >
                <styles.InputLabelStyled id="demo-simple-select-label">Payment</styles.InputLabelStyled>
                <Select
                    labelId="demo-simple-select-label"
                    label="Payment"
                    value={pay}

                    onChange={handleChange}
                >
                    {Object.values(Payment).map((payment, index) =>
                        <MenuItem
                            key={index}
                            value={payment}
                        >{payment}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </styles.SelectMenuContainerStyled>
    )
}
