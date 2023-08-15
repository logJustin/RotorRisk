import React from 'react';
import { FormLabel, Grid, Checkbox } from '@mui/material';

const CheckboxesBinary = ({ value, onChange, task }) => {
    const handleCheckboxChange = (newValue) => {
        onChange(newValue);
    };

    return (
        <>
            <FormLabel sx={{ textAlign: 'center' }} component="legend">{task}</FormLabel>
            <Grid container justifyContent="space-evenly">
                <label htmlFor="true">
                    <Checkbox
                        id="true"
                        checked={value === 'true'}
                        onChange={() => handleCheckboxChange('true')}
                    />
                    True
                </label>
                <label htmlFor="false">
                    <Checkbox
                        id="false"
                        checked={value === 'false'}
                        onChange={() => handleCheckboxChange('false')}
                    />
                    False
                </label>
            </Grid>
        </>
    );
};

export default CheckboxesBinary;
