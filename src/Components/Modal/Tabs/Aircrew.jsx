import React, { useEffect, useRef } from 'react';
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"
import CheckboxesFlightConditions from '../Components/CheckboxesFlightConditions'
import aircrews from '../../../data/seederCrewData'
import aircraftInfo from '../../../data/aircraftTailNumbers'
import AircrewRiskLookupValue from '../../../utils/AircrewRiskLookupValue';
import AircrewRiskLookupValueNG from '../../../utils/AircrewRiskLookupValueNG';
import CalculateHighestRisk from '../../../utils/CalculateHighestRisk';

export default function Aircrew({ control, watch, setValue }) {

    const crewSelect = (position) => (
        Object.entries(aircrews)
            .filter(([crewmember, info]) => info.position === position)
            .map(([crewmember, info]) => (
                <MenuItem key={crewmember} value={crewmember}>
                    {crewmember}
                </MenuItem>
            ))
    )

    const firstRender = useRef(true)
    const aircraftType = watch("aircraftType")
    const aircrewInitialRisk = watch('aircrewInitialRisk')
    const pc = watch('pc')
    const pi = watch('pi')
    const nrcm1 = watch('nrcm1')
    const nrcm2 = watch('nrcm2')
    const nrcm3 = watch('nrcm3')


    useEffect(() => {
        if (!firstRender.current) {
            const newRiskPC = AircrewRiskLookupValue(aircrews[pc]?.aircraft, true)
            const newRiskPI = AircrewRiskLookupValue(aircrews[pi]?.aircraft, true)
            const newRiskNRCM1 = AircrewRiskLookupValue(aircrews[nrcm1]?.aircraft, false)
            const newRiskNRCM2 = AircrewRiskLookupValue(aircrews[nrcm2]?.aircraft, false)
            const newRiskNRCM3 = AircrewRiskLookupValue(aircrews[nrcm3]?.aircraft, false)
            const newRiskPCNG = AircrewRiskLookupValueNG(aircrews[pc]?.NG, aircrews[pc]?.NG)
            const newRiskPING = AircrewRiskLookupValueNG(aircrews[pi]?.NG, aircrews[pc]?.NG)
            const newRiskNRCM1NG = AircrewRiskLookupValueNG(aircrews[nrcm1]?.NG, aircrews[pc]?.NG)
            const newRiskNRCM2NG = AircrewRiskLookupValueNG(aircrews[nrcm2]?.NG, aircrews[pc]?.NG)
            const newRiskNRCM3NG = AircrewRiskLookupValueNG(aircrews[nrcm3]?.NG, aircrews[pc]?.NG)

            // Determine the highest risk level
            const risks = [newRiskPC, newRiskPI, newRiskNRCM1, newRiskNRCM2, newRiskNRCM3];
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
                        )} />
                </Grid>
                <Grid xs={6}>
                    <Controller
                        name="etd"
                        control={control}
                        render={({ field }) => (
                            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                                <DesktopTimePicker {...field} fullWidth label="ETD" views={['hours', 'minutes']} timeSteps={{ minutes: 15 }} ampm={false} />
                            </LocalizationProvider>
                        )} />
                </Grid>
                <Grid xs={6}>
                    <Controller
                        name="ete"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} fullWidth label="ETE (Duration)" placeholder='1.5' type='number' />
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