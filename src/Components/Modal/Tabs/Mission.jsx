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

export default function Mission({ control }) {
    return (
        <>

            <Grid container spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={6}>
                    <Controller name="airAssault" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Air Assault'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>

            </Grid>
        </>
    )
}