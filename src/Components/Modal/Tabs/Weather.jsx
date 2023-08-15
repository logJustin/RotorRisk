import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Modal, InputLabel, MenuItem, FormControl, Select, TextField, Paper, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Unstable_Grid2';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useForm, Controller, FormProvider } from "react-hook-form"
import Input from "@mui/material/Input"
import { Today } from '@mui/icons-material';
import CheckboxesModeOfFlight from '../Components/CheckboxesModeOfFlight'
import CheckboxesBinary from '../Components/CheckboxesBinary'
import CheckboxesFlightConditions from '../Components/CheckboxesFlightConditions'

export default function Weather({ control, watch }) {
    const weatherInitialRisk = watch('weatherInitialRisk', '');

    return (
        <>
            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                // marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Ceilings</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="gt1000" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={"Greater than 1000'"} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="lt1000" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={"Less than 1000'"} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="lt700" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={"Less than 700'"} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="lt500" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={"Less than 500'"} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>



            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Visibility</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="gt3" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Greater than 3 SM'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="gt2" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Greater than 2 SM'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="gt1" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Greater than 1 SM'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="lt1" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Less than 1 SM'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>



            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12} sm={6} md={3}>
                    <Controller name="altRequired" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'IFR Alternate Required'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>



            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Lunar Data</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={4} marginBottom={3}>
                    <Controller name="gt25IllumAndgt30degrees" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Greater than 25% and 30°'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={4} marginBottom={3}>
                    <Controller name="lt25IllumAndlt30degrees" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Less than 25% and 30°'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={4} marginBottom={3}>
                    <Controller name="gt25IllumAndgt30degreesLimitedLighting" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={`< 25% and 30° (Limited Lighting)`} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>





            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Weather Hazards</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="windGt30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Wind >30 Knots'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="windGt30Hoist" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Wind >30 Knots (Sling/Hoist)'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="gustSpreadGt20" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Gusts >20 Knots'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="forecastThunderstorms" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Forecast Thunderstorms'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="modTurbulenceIcing" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Mod. Turbulence/Icing'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="oatNegative10Positive30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'OAT >35°C or <-10°C'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'Center' }} component="legend">Weather Risk Assessment</FormLabel>
                </Grid>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'left' }} component="legend">Initial Risk: {weatherInitialRisk}</FormLabel>
                </Grid>
                {/* Weather Mitigation */}
                <Grid xs={12} >
                    <Controller name="weatherRiskMitigation" control={control} render={({ field }) => (
                        <TextField {...field} multiline rows={2} fullWidth label="Risk Mitigation Techniques" />
                    )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}