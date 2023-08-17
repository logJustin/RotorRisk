import React from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"
import CheckboxesModeOfFlight from '../Components/CheckboxesModeOfFlight'
import CheckboxesBinary from '../Components/CheckboxesBinary'
import AircrewRiskLookupValue from '../../../utils/AircrewRiskLookupValue';
import CalculateHighestRisk from '../../../utils/CalculateHighestRisk';

export default function Weather({ control, watch }) {
    const weatherInitialRisk = watch('weatherInitialRisk', '');


    // implement this for the Weather Tab
    // const firstRender = useRef(true)
    // const aircraftType = watch("aircraftType")
    // const aircrewInitialRisk = watch('aircrewInitialRisk')
    // const pc = watch('pc')
    // const pi = watch('pi')
    // const nrcm1 = watch('nrcm1')
    // const nrcm2 = watch('nrcm2')
    // const nrcm3 = watch('nrcm3')

    // useEffect(() => {
    //     if (!firstRender.current) {
    //         const newAircrewInitialRiskPC = AircrewRiskLookupValue(aircrews[pc]?.aircraft, true)
    //         const newAircrewInitialRiskPI = AircrewRiskLookupValue(aircrews[pi]?.aircraft, true)
    //         const newAircrewInitialRiskNRCM1 = AircrewRiskLookupValue(aircrews[nrcm1]?.aircraft, false)
    //         const newAircrewInitialRiskNRCM2 = AircrewRiskLookupValue(aircrews[nrcm2]?.aircraft, false)
    //         const newAircrewInitialRiskNRCM3 = AircrewRiskLookupValue(aircrews[nrcm3]?.aircraft, false)

    //         // Determine the highest risk level
    //         const risks = [newAircrewInitialRiskPC, newAircrewInitialRiskPI, newAircrewInitialRiskNRCM1, newAircrewInitialRiskNRCM2, newAircrewInitialRiskNRCM3];
    //         const highestRisk = CalculateHighestRisk(risks)
    //         setValue('aircrewInitialRisk', highestRisk);
    //     } else {
    //         firstRender.current = false;
    //     }
    // }, [pc, pi, nrcm1, nrcm2, nrcm3]);
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
                        <CheckboxesBinary task={'Greater than 25% and 30°'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={4} marginBottom={3}>
                    <Controller name="lt25IllumAndlt30degrees" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Less than 25% and 30°'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={4} marginBottom={3}>
                    <Controller name="gt25IllumAndgt30degreesLimitedLighting" control={control} render={({ field }) => (
                        <CheckboxesBinary task={`< 25% and 30° (Limited Lighting)`} value={field.value} onChange={field.onChange} />)}
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