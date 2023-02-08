import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const SelectMenu = () => {
    return (
        <div>
            <InputLabel id="label">Age</InputLabel>
            <Select labelId="label" id="select" value="20">
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
            </Select>

        </div>
    )
}
