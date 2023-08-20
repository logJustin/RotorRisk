import React, { useState } from 'react';
import { FormLabel, Grid, Checkbox } from '@mui/material';

const TESTCheckboxesBinary = ({ value, onChange, task }) => {
    const [checkbox, setCheckbox] = useState(value === 'true');

    const handleCheckboxChange = () => {
        const newValue = !checkbox;
        setCheckbox(newValue);
        if (onChange) {
            onChange(newValue ? 'true' : 'false');
        }
    };

    return (
        <>
            <FormLabel sx={{ textAlign: 'center' }} component="legend">{task}</FormLabel>
            <Grid container justifyContent="space-evenly">
                <label>
                    <Checkbox
                        id="true"
                        checked={checkbox}
                        onChange={handleCheckboxChange}
                    />
                    Applicable
                </label>
            </Grid>
        </>
    );
};

export default TESTCheckboxesBinary;
