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
            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Mission Considerations</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="airAssault" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Air Assault'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="AH64AttackReconSecurity" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'AH64 Attack/Recon/Security'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="medevacCasevac" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'MEDEVAC/CASEVAC'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="multiship" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Multiship'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="mixedMultiShip" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Mixed MDS Multiship'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="MTFGeneralTraining" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'MTF General/Training'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="dartOneTimeFlight" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'DART/One Time Flight'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="blackout" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Blackout Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="waterBucket" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Waterbucket/Fire Fighting'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="paradrops" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Paradrops/Parachute'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="rappelSpiesFries" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Rappel/SPIES/FRIES'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="externalLoads" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'External Loads'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="airmovementVIP" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Air Movement/VIP'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="continuation" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Continuation Training'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="CEFS" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'CEFS Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="fatCow" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'FAT COW / WET HAWK'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Terrain Considerations</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="terrainFlight" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Terrain Flight'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="mountainOperations" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Mountain Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="overwaterOperations" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Overwater Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="pinnacleOperations" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Pinnacle Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="urbanOperations" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Urban Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="confinedOperations" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Confined Area Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Power Considerations</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="OGEwithin10" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'OGE within 10% MTA'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="OGEwithin5" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'OGE within 5% MTA'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="IGEwithin10" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'IGE within 10% MTA'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="IGEwithin5" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'IGE within 5% MTA'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>



            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Training Considerations</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="progessionEvaluationEPs" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Progression/Eval/EPs'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="IFRSimulatedIMC" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'IFR/SIM IMC'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="CBRNE" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'CBRNE'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nonLiveHoist" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Hoist Training (Non-Live)'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="liveHoist" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Hoist Training (Live)'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="combatManueveringFlight" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Combat Manuevering Flight'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="gunneryLiveFire" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Gunnery/Live Fire'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="CALFEX" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'CALFEX'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="AMS" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'AMS Training'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Mission Recency</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="pcGt90" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'PC > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="pcGt60" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'PC > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="pcGt30" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'PC > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="piGt90" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'PI > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="piGt60" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'PI > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="piGt30" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'PI > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt90" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 1 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt60" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 1 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt30" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 1 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt90" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 2 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt60" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 2 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt30" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 2 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt90" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 3 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt60" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 3 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt30" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'NRCM 3 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt90" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Hoist > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt60" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Hoist > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt30" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Hoist > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Mission Planning Time</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="specificGt12" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Specific: > 12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="specific2to12" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Specific: 2-12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="specificLt2" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Specific: < 2 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vagueGt12" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Vague: > 12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vague2to12" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Vague: 2-12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vagueLt2" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Vague: < 2 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Final Risk???</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="airAssault" control={control} render={({ field }) => (
                        <MissionTasksCheckbox task={'Air Assault'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>
        </>
    )
}