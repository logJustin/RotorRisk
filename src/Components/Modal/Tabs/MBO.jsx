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
import FlightConditionsCheckboxes from '../Components/CheckboxesFlightConditions'
import SelectRiskLevels from '../Components/SelectRiskLevels'
import CheckboxesRiskLevel from '../Components/CheckboxesRiskLevel'

export default function MBO({ control }) {

    return (
        <>

            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Mission Briefing Officer</FormLabel>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend"><small>Adjust risk assessments on the Final Risk tab</small></FormLabel>
                </Grid>
                <Grid xs={12}>
                    <Controller
                        name="brieferComment"
                        control={control}
                        render={({ field }) => (
                            <TextField multiline rows={4} fullWidth {...field} label="MBO Comments" variant="outlined" />
                        )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}