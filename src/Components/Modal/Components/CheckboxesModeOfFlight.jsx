import React from 'react';
import { FormControlLabel, FormLabel, Grid, Checkbox } from '@mui/material';

const CheckboxesModeOfFlight = ({ value, onChange, task }) => {

    const handleCheckboxChange = (newValue) => {
        const updatedValues = value
            .split(' ')
            .filter(item => item.trim() !== newValue);

        if (!value.includes(newValue)) {
            updatedValues.push(newValue);
        }

        const sortedValues = updatedValues.sort((a, b) => {
            const order = ['D', 'UN', 'NG'];
            return order.indexOf(a) - order.indexOf(b);
        });

        onChange(sortedValues.join(' ').trim()); // Trim leading/trailing spaces
    };

    return (
        <>
            <FormLabel sx={{ textAlign: 'center' }} component="legend">{task}</FormLabel>
            <Grid container justifyContent="space-evenly"
            // borderBottom={'1px solid white'}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('D')}
                            onChange={() => handleCheckboxChange('D')}
                        />
                    }
                    label="D"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('UN')}
                            onChange={() => handleCheckboxChange('UN')}
                        />
                    }
                    label="UN"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('NG')}
                            onChange={() => handleCheckboxChange('NG')}
                        />
                    }
                    label="NG"
                />
            </Grid>
        </>
    );
};

export default CheckboxesModeOfFlight;
