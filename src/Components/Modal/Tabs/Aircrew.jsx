import React, { useEffect, useRef } from 'react';
import { Controller } from "react-hook-form"
import { InputLabel, MenuItem, FormControl, Select, TextField, FormLabel, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckboxesFlightConditions from '../Components/CheckboxesFlightConditions'
import aircraftInfo from '../../../data/aircraftTailNumbers'
import AircrewRiskLookupValue from '../../../utils/AircrewRiskLookupValue';
import AircrewRiskLookupValueNG from '../../../utils/AircrewRiskLookupValueNG';
import CalculateHighestRisk from '../../../utils/CalculateHighestRisk';

export default function Aircrew({ control, watch, setValue, aircrews }) {


    const crewSelect = (position) => (
        Object.values(aircrews)
            .filter(crewmember => crewmember.position === position)
            .map(crewmember => (
                <MenuItem key={crewmember.name} value={crewmember.name}>
                    {crewmember.name}
                </MenuItem>
            ))
    );


    const firstRender = useRef(true)
    const aircraftType = watch("aircraftType")
    const aircrewInitialRisk = watch('aircrewInitialRisk')
    const pc = watch('pc')
    const pi = watch('pi')
    const nrcm1 = watch('nrcm1')
    const nrcm2 = watch('nrcm2')
    const nrcm3 = watch('nrcm3')
    const pcRisk = watch('pcRisk')
    const piRisk = watch('piRisk')
    const nrcm1Risk = watch('nrcm1Risk')
    const nrcm2Risk = watch('nrcm2Risk')
    const nrcm3Risk = watch('nrcm3Risk')

    useEffect(() => {
        if (!firstRender.current) {
            const selectedpc = aircrews.find(member => member.name === pc)
            const selectedpi = aircrews.find(member => member.name === pi)
            const selectednrcm1 = aircrews.find(member => member.name === nrcm1)
            const selectednrcm2 = aircrews.find(member => member.name === nrcm2)
            const selectednrcm3 = aircrews.find(member => member.name === nrcm3)

            const newRiskPC = AircrewRiskLookupValue(selectedpc?.aircraft, true, selectedpc?.atleast25InAO)
            const newRiskPI = AircrewRiskLookupValue(selectedpi?.aircraft, true, selectedpi?.atleast25InAO)
            const newRiskNRCM1 = AircrewRiskLookupValue(selectednrcm1?.aircraft, false, selectednrcm1?.atleast25InAO)
            const newRiskNRCM2 = AircrewRiskLookupValue(selectednrcm2?.aircraft, false, selectednrcm2?.atleast25InAO)
            const newRiskNRCM3 = AircrewRiskLookupValue(selectednrcm3?.aircraft, false, selectednrcm3?.atleast25InAO)

            const newRiskPCNG = AircrewRiskLookupValueNG(selectedpc?.NG, selectedpc?.atleast25InAO)
            const newRiskPING = AircrewRiskLookupValueNG(selectedpi?.NG, selectedpi?.atleast25InAO)
            const newRiskNRCM1NG = AircrewRiskLookupValueNG(selectednrcm1?.NG, selectednrcm1?.atleast25InAO)
            const newRiskNRCM2NG = AircrewRiskLookupValueNG(selectednrcm2?.NG, selectednrcm2?.atleast25InAO)
            const newRiskNRCM3NG = AircrewRiskLookupValueNG(selectednrcm3?.NG, selectednrcm3?.atleast25InAO)

            function compareRiskLevels(risk1, risk2) {
                const hierarchy = ["L", "M"];
                return hierarchy.indexOf(risk1) < hierarchy.indexOf(risk2) ? risk2 : risk1;
            }

            const biggestpcRisk = compareRiskLevels(newRiskPC, newRiskPCNG)
            const biggestpiRisk = compareRiskLevels(newRiskPI, newRiskPING)
            const biggestnrcm1Risk = compareRiskLevels(newRiskNRCM1, newRiskNRCM1NG)
            const biggestnrcm2Risk = compareRiskLevels(newRiskNRCM2, newRiskNRCM2NG)
            const biggestnrcm3Risk = compareRiskLevels(newRiskNRCM3, newRiskNRCM3NG)

            setValue('pcRisk', biggestpcRisk)
            setValue('piRisk', biggestpiRisk)
            setValue('nrcm1Risk', biggestnrcm1Risk)
            setValue('nrcm2Risk', biggestnrcm2Risk)
            setValue('nrcm3Risk', biggestnrcm3Risk)


            // Determine the highest risk level
            const risks = [biggestpcRisk, biggestpiRisk, biggestnrcm1Risk, biggestnrcm2Risk, biggestnrcm3Risk];
            const highestRisk = CalculateHighestRisk(risks)
            setValue('aircrewInitialRisk', highestRisk);
        } else {
            firstRender.current = false;
        }
    }, [pc, pi, nrcm1, nrcm2, nrcm3]);
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
                                    onChange={(selectedValue) => {
                                        field.onChange(selectedValue); // Let the Controller handle value update
                                        setValue('aircraftTail', ''); // Set aircraftTail to an empty string
                                    }}
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
                            <TextField fullWidth required {...field} label="Mission" variant="outlined" />
                        )}>
                    </Controller>
                </Grid>
                {/* Mission Statement */}
                <Grid xs={9}>
                    <Controller
                        name="missionStatement"
                        control={control}
                        render={({ field }) => (
                            <TextField fullWidth required {...field} label="Mission Statement" variant="outlined" />
                        )}>
                    </Controller>
                </Grid>
                {/* Route */}
                <Grid xs={12}>
                    <Controller
                        name="route"
                        control={control}
                        render={({ field }) => (
                            <TextField fullWidth required {...field} id="outlined-basic" label="Route" variant="outlined" />
                        )} />
                </Grid>
                <Grid xs={6}>
                    <Controller
                        name="etd"
                        control={control}
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopTimePicker sx={{ width: '100%' }} {...field} label="ETD" views={['hours', 'minutes']} timeSteps={{ minutes: 15 }} ampm={false} />
                            </LocalizationProvider>
                        )} />
                </Grid>
                <Grid xs={6}>
                    <Controller
                        name="ete"
                        control={control}
                        render={({ field }) => (
                            <TextField fullWidth required {...field} label="ETE (Duration)" placeholder='1.5' type='number' />
                        )}
                    />
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
                        <FormControl required fullWidth>
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
                        <FormControl required fullWidth>
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
                <Grid xs={3}>
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
                <Grid xs={1}>
                    <IconButton aria-label="delete" size="large" onClick={() => { setValue('nrcm1', '') }}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Grid>
                {/* NRCM 2 */}
                <Grid xs={3}>
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
                <Grid xs={1}>
                    <IconButton aria-label="delete" size="large" onClick={() => { setValue('nrcm2', '') }}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Grid>
                {/* NRCM 3 */}
                <Grid xs={3}>
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
                <Grid xs={1}>
                    <IconButton aria-label="delete" size="large" onClick={() => { setValue('nrcm3', '') }}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
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
                        <TextField required {...field} multiline rows={2} fullWidth label="Risk Mitigation Techniques" />
                    )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}