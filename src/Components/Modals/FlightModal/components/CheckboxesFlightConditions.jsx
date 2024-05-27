import React from 'react';
import { FormControlLabel, FormLabel, Grid, Checkbox } from '@mui/material';

const CheckboxesFlightConditions = ({ value, onChange, title }) => {

    const handleCheckboxChange = (newValue) => {
        const updatedValues = value
            .split(' ')
            .filter(item => item.trim() !== newValue);

        if (!value.includes(newValue)) {
            updatedValues.push(newValue);
        }

        const sortedValues = updatedValues.sort((a, b) => {
            const order = ['1', '2', '3', '4', '5', '6'];
            return order.indexOf(a) - order.indexOf(b);
        });

        onChange(sortedValues.join(' ').trim()); // Trim leading/trailing spaces
    };

    return (
        <Grid container justifyContent="space-evenly"> {/* Apply justifyContent here */}
            <Grid item xs={12}>
                <FormLabel sx={{ textAlign: 'center' }} component="legend">{title}</FormLabel>
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('1')}
                            onChange={() => handleCheckboxChange('1')}
                        />
                    }
                    label="1 - Day"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('2')}
                            onChange={() => handleCheckboxChange('2')}
                        />
                    }
                    label="2 - Night"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('3')}
                            onChange={() => handleCheckboxChange('3')}
                        />
                    }
                    label="3 - NVG"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('4')}
                            onChange={() => handleCheckboxChange('4')}
                        />
                    }
                    label="4 - IMC/SIM IMC"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('5')}
                            onChange={() => handleCheckboxChange('5')}
                        />
                    }
                    label="5 - Multi Aircraft"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value.includes('6')}
                            onChange={() => handleCheckboxChange('6')}
                        />
                    }
                    label="6 - Terrain Flight"
                />
            </Grid>
        </Grid>
    );
};

export default CheckboxesFlightConditions;
