import React from 'react';
import { FormLabel, Grid, Checkbox } from '@mui/material';

const RiskLevelCheckbox = ({ initialRisk, value, onChange, title }) => {
    const handleCheckboxChange = (newValue) => {
        onChange(newValue);
    };

    const riskLevels = ['L', 'M', 'M*', 'H', 'H*', 'EH'];

    // Determine which risk levels should be disabled based on initialRisk
    const disabledRiskLevels = [];
    if (initialRisk === 'M*') {
        disabledRiskLevels.push('L', 'M');
    } else if (initialRisk === 'H*') {
        disabledRiskLevels.push('L', 'M', 'M*', 'H');
    } else if (initialRisk === 'H') {
        disabledRiskLevels.push('L');
    } else if (initialRisk === 'EH') {
        disabledRiskLevels.push('L', 'M', 'M*');
    }

    return (
        <>
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
                            disabled={disabledRiskLevels.includes(riskLevel)}
                        />
                        {riskLevel}
                    </label>
                ))}
            </Grid>
        </>
    );
};

export default RiskLevelCheckbox;
