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
import CheckboxesFlightConditions from '../Components/CheckboxesFlightConditions'

export default function Aircrew({ control, watch }) {

    const aircraftInfo = {
        HH60M: ['20-20128', '20-20129', '20-20130', '20-20131', '20-20132', '20-20133'],
        AH64E: ['19-20134', '19-20135', '19-20136', '19-20137', '19-20138', '19-20139'],
        CH47F: ['18-20134', '18-20135', '18-20136', '18-20137', '18-20138', '18-20139'],
        UH60V: ['17-20134', '17-20135', '17-20136', '17-20137', '17-20138', '17-20139'],
    };
    const aircrews = {
        'CPT Reynolds': {
            position: 'pilot',
            aircraft: 500,
            NG: 115
        },
        'CPT Smith': {
            position: 'pilot',
            aircraft: 310,
            NG: 115
        },
        'SGT Daniels': {
            position: 'nrcm',
            aircraft: 2050,
            NG: 800
        },
        'CPT Johnson': {
            position: 'pilot',
            aircraft: 1520,
            NG: 620
        },
        'CPT Williams': {
            position: 'pilot',
            aircraft: 920,
            NG: 260
        },
        '1LT Davis': {
            position: 'pilot',
            aircraft: 1830,
            NG: 470
        },
        '1LT Anderson': {
            position: 'pilot',
            aircraft: 1150,
            NG: 540
        },
        'SGT Martinez': {
            position: 'nrcm',
            aircraft: 630,
            NG: 310
        },
        'SGT Walker': {
            position: 'nrcm',
            aircraft: 1240,
            NG: 870
        },
        'CPL Lopez': {
            position: 'nrcm',
            aircraft: 1480,
            NG: 720
        },
        'CPL Scott': {
            position: 'nrcm',
            aircraft: 860,
            NG: 420
        }
    };
    const aircraftType = watch("aircraftType")
    const crewSelect = (position) => (
        Object.entries(aircrews)
            .filter(([crewmember, info]) => info.position === position)
            .map(([crewmember, info]) => (
                <MenuItem key={crewmember} value={crewmember}>
                    {crewmember}
                </MenuItem>
            ))
    )

    const aircrewInitialRisk = watch('aircrewInitialRisk', '');

    // Add block for ETD & ETE, a lookup function for hours, and a risk input
    return (
        <>
            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">DA-5484</FormLabel>
                </Grid>
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
                        <CheckboxesFlightConditions title={'Flight Conditions'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>



            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Aircrew</FormLabel>
                </Grid>
                {/* PC */}
                <Grid xs={4}>
                    <Controller name="pc" control={control} render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="pcSelect">Pilot in Command</InputLabel>
                            <Select label="Pilot in Command" {...field}>
                                {crewSelect('pilot')}
                            </Select>
                        </FormControl>
                    )}
                    />
                </Grid>
                <Grid xs={2}>
                    <Controller name="pcSeat" control={control} render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="pcSeatSelect">PC Seat</InputLabel>
                            <Select
                                label="PC Seat"
                                {...field}
                            >
                                {["Left", "Right", "Front", "Back", "Both", "Cabin"].map((seat) => (
                                    <MenuItem key={seat} value={seat}>{seat}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}>
                    </Controller>
                </Grid>
                {/* PI */}
                <Grid xs={4}>
                    <Controller name="pi" control={control} render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="piSelect">Pilot</InputLabel>
                            <Select label="Pilot" {...field}>
                                {crewSelect('pilot')}
                            </Select>
                        </FormControl>
                    )}
                    />
                </Grid>
                <Grid xs={2}>
                    <Controller name="piSeat" control={control} render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="piSeatSelect">PI Seat</InputLabel>
                            <Select
                                label="PC Seat"
                                {...field}
                            >
                                {["Left", "Right", "Front", "Back", "Both", "Cabin"].map((seat) => (
                                    <MenuItem key={seat} value={seat}>{seat}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}>
                    </Controller>
                </Grid>
                {/* NRCM 1 */}
                <Grid xs={4}>
                    <Controller name="nrcm1" control={control} render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="nrcm1Select">NRCM 1</InputLabel>
                            <Select label="NRCM 1" {...field}>
                                {crewSelect('nrcm')}
                            </Select>
                        </FormControl>
                    )}>

                    </Controller>
                </Grid>
                {/* NRCM 2 */}
                <Grid xs={4}>
                    <Controller name="nrcm2" control={control} render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="nrcm2Select">NRCM 2</InputLabel>
                            <Select label="NRCM 2" {...field}>
                                {crewSelect('nrcm')}
                            </Select>
                        </FormControl>
                    )}>

                    </Controller>
                </Grid>
                {/* NRCM 3 */}
                <Grid xs={4}>
                    <Controller name="nrcm3" control={control} render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="nrcm3Select">NRCM 3</InputLabel>
                            <Select label="NRCM 3" {...field}>
                                {crewSelect('nrcm')}
                            </Select>
                        </FormControl>
                    )}>
                    </Controller>
                </Grid>
            </Grid >


            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'Center' }} component="legend">Aircrew Risk Assessment</FormLabel>
                </Grid>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'left' }} component="legend">Initial Risk: {aircrewInitialRisk}</FormLabel>
                </Grid>
                {/* Aircrew Mitigation */}
                <Grid xs={12} >
                    <Controller name="aircrewRiskMitigation" control={control} render={({ field }) => (
                        <TextField {...field} multiline rows={2} fullWidth label="Risk Mitigation Techniques" />
                    )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}