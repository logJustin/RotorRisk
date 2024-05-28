import React, { useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"
import CheckboxesRiskLevel from '../components/CheckboxesRiskLevel'
import useFinalRiskValue from '../../../../hooks/useFinalRiskValue';

export default function FinalRisk({ control, watch, setValue }) {

    const firstRender = useRef(true)
    const aircrewInitialRisk = watch('aircrewInitialRisk');
    const missionInitialRisk = watch('missionInitialRisk');
    const weatherInitialRisk = watch('weatherInitialRisk');
    const aircrewRiskMitigation = watch('aircrewRiskMitigation');
    const missionRiskMitigation = watch('missionRiskMitigation');
    const weatherRiskMitigation = watch('weatherRiskMitigation');
    const aircrewMitigatedRisk = watch('aircrewMitigatedRisk');
    const missionMitigatedRisk = watch('missionMitigatedRisk');
    const weatherMitigatedRisk = watch('weatherMitigatedRisk');
    const finalInitialRisk = watch('finalInitialRisk')


    useEffect(() => {
        if (!firstRender.current) {
            // Determine the highest risk level
            const risks = [aircrewInitialRisk, missionInitialRisk, weatherInitialRisk, aircrewMitigatedRisk, missionMitigatedRisk, weatherMitigatedRisk];
            const highestRisk = useFinalRiskValue(risks)
            setValue('finalInitialRisk', highestRisk);
        } else {
            firstRender.current = false;
        }
    }, [aircrewInitialRisk, missionInitialRisk, weatherInitialRisk, aircrewMitigatedRisk, missionMitigatedRisk, weatherMitigatedRisk]);

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
                <Grid xs={12} md={10}>
                    <Controller name="aircrewMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} initialRisk={aircrewInitialRisk} />)}
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
                <Grid xs={12} md={10}>
                    <Controller name="missionMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} initialRisk={missionInitialRisk} />)}
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
                <Grid xs={12} md={10}>
                    <Controller name="weatherMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} initialRisk={weatherInitialRisk} />)}
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
                        <TextField required {...field} multiline rows={2} fullWidth label="What is the greatest risk to mission?" />
                    )}>
                    </Controller>
                </Grid>
                <Grid xs={12} >
                    <Controller name="finalRiskMitigation" control={control} render={({ field }) => (
                        <TextField required {...field} multiline rows={2} fullWidth label="Risk Mitigation Technique" />
                    )}>
                    </Controller>
                </Grid>
                <Grid xs={12} md={10}>
                    <Controller name="finalMitigatedRisk" control={control} render={({ field }) => (
                        <CheckboxesRiskLevel title="Residual Risk" value={field.value} onChange={field.onChange} initialRisk={finalInitialRisk} />)}
                    />
                </Grid>
            </Grid>
        </>
    )
}