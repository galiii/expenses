import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Expense, Payment } from "../../models/expenses";
import Paper from '@mui/material/Paper';
import { SelectMenu } from "../select-menu/SelectMenu";
import { SelectDatePicker } from "../select-date-picker/SelectDatePicker"


type CustomTextFieldProps = {
    label: string,
    detail: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Form = () => {
    //states
    const [formValues, setFormValues] = useState<Expense>({
        detail: "",
        date: "",
        amount: 0,
        payments: Payment.CASH
    });
    //helper
    //render
    return (
        <Paper elevation={0} >
            <form>
                <TextField
                    id="detail-input"
                    name="detail"
                    label="Detail"
                    type="text"
                    value={formValues.detail}
                    //onChange={handleInputChange}

                    variant={"outlined"} //enables special material-ui styling
                    size={"small"}
                    margin={"dense"}
                />
                <SelectMenu />
                <SelectDatePicker />
                <Button>Submit</Button>
            </form>
        </Paper>
    )
}

