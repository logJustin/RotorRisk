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
import Input from "@material-ui/core/Input"
import { Today } from '@mui/icons-material';
import MissionTasksCheckbox from '../MissionTasksCheckboxes'
import FlightConditionsCheckboxes from '../FlightConditionsCheckboxes'

export default function Aircrew({ control, aircraftInfo, aircraftType }) {
    return (
        <>
            <Grid container spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                {/* Flight Date */}
                <Grid xs={4}>
                    <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker closeOnSelect={true} sx={{ width: '100%' }} {...field} label="Flight Date" />
                            </LocalizationProvider>
                        )}
                    />
                </Grid>
                {/* Aircraft */}
                <Grid xs={4}>
                    <FormControl fullWidth component="fieldset">
                        <InputLabel>Aircraft</InputLabel>
                        <Controller
                            name="aircraftType"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    fullWidth
                                    label="Aircraft"
                                >
                                    {Object.keys(aircraftInfo).map((helicopterType) => (
                                        <MenuItem key={helicopterType} value={helicopterType}>
                                            {helicopterType}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </Grid>
                {/* Tail Number */}
                <Grid xs={4}>
                    <FormControl fullWidth component="fieldset">
                        <InputLabel>Tail Number</InputLabel>
                        <Controller
                            name="aircraftTail"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    // labelId="tailNumberSelect"
                                    {...field}
                                    label="Tail Number"
                                    fullWidth
                                >
                                    {aircraftInfo[aircraftType]?.map((tailNumber) => (
                                        <MenuItem key={tailNumber} value={tailNumber}>
                                            {tailNumber}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </Grid>
                {/* Mission */}
                <Grid xs={3}>
                    <Controller
                        name="mission"
                        control={control}
                        render={({ field }) => (
                            <TextField fullWidth {...field} label="Mission" variant="outlined" />
                        )}>
                    </Controller>
                </Grid>
                {/* Mission Statement */}
                <Grid xs={9}>
                    <Controller
                        name="missionStatement"
                        control={control}
                        render={({ field }) => (
                            <TextField fullWidth {...field} label="Mission Statement" variant="outlined" />
                        )}>
                    </Controller>
                </Grid>
                {/* Route */}
                <Grid xs={12}>
                    <Controller
                        name="route"
                        control={control}
                        render={({ field }) => (
                            <TextField fullWidth {...field} id="outlined-basic" label="Route" variant="outlined" />
                        )} >
                    </Controller>
                </Grid>

                <Grid xs={12} padding={'8px'}>
                    {/* Flight Conditions Selection */}
                    <Controller name="flightConditions" control={control} render={({ field }) => (
                        <FlightConditionsCheckboxes title={'Flight Conditions'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>
        </>
    )
}