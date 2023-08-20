import React from 'react';
import { Controller } from 'react-hook-form';
import { Typography, FormLabel, ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function RecencyToggleButton({ task, control }) {
    return (
        <>
            <FormLabel sx={{ textAlign: 'center' }} component="legend">{task}</FormLabel>
            <Controller
                name="recency"
                control={control}
                defaultValue={null}
                render={({ field: { onChange, value } }) => (
                    <ToggleButtonGroup
                        size="small"
                        value={value}
                        exclusive
                        onChange={(event, newValue) => {
                            onChange(newValue);
                        }}
                    >
                        <ToggleButton value="nrcm1Gt90">
                            <Typography>{'>'}90</Typography>
                        </ToggleButton>
                        <ToggleButton value="nrcm1Gt60">
                            <Typography>{'>'}60</Typography>
                        </ToggleButton>
                        <ToggleButton value="nrcm1Gt30">
                            <Typography>{'>'}30</Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                )}
            />
        </>
    );
}
