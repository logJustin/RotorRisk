import React from 'react';
import { FormLabel, Grid, Checkbox } from '@mui/material';

const RiskLevelCheckbox = ({ value, onChange, title }) => {
    const handleCheckboxChange = (newValue) => {
        onChange(newValue);
    };

    const riskLevels = ['L', 'M', 'M*', 'H', 'H*', 'EH'];

    return (
        <div>
            <FormLabel sx={{ textAlign: 'center' }} component="legend">
                {title}
            </FormLabel>
            <Grid container justifyContent="space-evenly">
                {riskLevels.map((riskLevel) => (
                    <label htmlFor={riskLevel} key={riskLevel}>
                        <Checkbox
                            id={riskLevel}
                            checked={value === riskLevel}
                            onChange={() => handleCheckboxChange(riskLevel)}
                        />
                        {riskLevel}
                    </label>
                ))}
            </Grid>
        </div>
    );
};

export default RiskLevelCheckbox;
