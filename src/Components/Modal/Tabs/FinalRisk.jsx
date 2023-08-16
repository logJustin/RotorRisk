import React from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"
import CheckboxesRiskLevel from '../Components/CheckboxesRiskLevel'

export default function FinalRisk({ control, watch }) {
    const aircrewRiskMitigation = watch('aircrewRiskMitigation', '');
    const aircrewInitialRisk = watch('aircrewInitialRisk', '');
    const missionRiskMitigation = watch('missionRiskMitigation', '');
    const missionInitialRisk = watch('missionInitialRisk', '');
    const weatherRiskMitigation = watch('weatherRiskMitigation', '');
    const weatherInitialRisk = watch('weatherInitialRisk', '');

    return (
        <>

            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Aircrew Risk</FormLabel>
                    <FormLabel component="legend">Initial Risk: {aircrewInitialRisk}</FormLabel>
                    <FormLabel component="legend">Risk Mitigation: {aircrewRiskMitigation}</FormLabel>
                </Grid>
                <Grid xs={12}>
                    <Controller name="aircrewMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>

            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Mission Risk</FormLabel>
                    <FormLabel component="legend">Initial Risk: {missionInitialRisk}</FormLabel>
                    <FormLabel component="legend">Risk Mitigation: {missionRiskMitigation}</FormLabel>
                </Grid>
                <Grid xs={12}>
                    <Controller name="missionMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>

            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Weather Risk</FormLabel>
                    <FormLabel component="legend">Initial Risk: {weatherInitialRisk}</FormLabel>
                    <FormLabel component="legend">Risk Mitigation: {weatherRiskMitigation}</FormLabel>
                </Grid>
                <Grid xs={12}>
                    <Controller name="weatherMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>


            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Final Risk Assessment</FormLabel>
                </Grid>
                <Grid xs={12} >
                    <Controller name="greatestRisk" control={control} render={({ field }) => (
                        <TextField {...field} multiline rows={2} fullWidth label="What is the greatest risk to mission?" />
                    )}>
                    </Controller>
                </Grid>
                <Grid xs={12} >
                    <Controller name="finalRiskMitigation" control={control} render={({ field }) => (
                        <TextField {...field} multiline rows={2} fullWidth label="Risk Mitigation Technique" />
                    )}>
                    </Controller>
                </Grid>
                <Grid xs={12}>
                    <Controller name="finalMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>
        </>
    )
}