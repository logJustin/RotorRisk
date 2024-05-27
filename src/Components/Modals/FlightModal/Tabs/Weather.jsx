import React, { useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"
import CheckboxesModeOfFlight from '../Components/CheckboxesModeOfFlight'
import CheckboxesBinary from '../Components/CheckboxesBinary'
import useFinalRiskValue from '../../../../hooks/useFinalRiskValue';
import useHighestRiskValue from '../../../../hooks/useHighestRiskValue';

export default function Weather({ control, watch, setValue }) {

    const firstRender = useRef(true)
    const weatherInitialRisk = watch('weatherInitialRisk')
    const gt1000 = watch('gt1000')
    const lt1000 = watch('lt1000')
    const lt700 = watch('lt700')
    const lt500 = watch('lt500')
    const gt3 = watch('gt3')
    const gt2 = watch('gt2')
    const gt1 = watch('gt1')
    const lt1 = watch('lt1')
    const altRequired = watch('altRequired')
    const gt25IllumAndgt30degrees = watch('gt25IllumAndgt30degrees')
    const lt25IllumAndlt30degrees = watch('lt25IllumAndlt30degrees')
    const gt25IllumAndgt30degreesLimitedLighting = watch('gt25IllumAndgt30degreesLimitedLighting')
    const windGt30 = watch('windGt30')
    const windGt30Hoist = watch('windGt30Hoist')
    const gustSpreadGt20 = watch('gustSpreadGt20')
    const forecastThunderstorms = watch('forecastThunderstorms')
    const modTurbulenceIcing = watch('modTurbulenceIcing')
    const oatNegative10Positive30 = watch('oatNegative10Positive30')

    useEffect(() => {
        if (!firstRender.current) {
            const newgt1000 = useHighestRiskValue('gt1000', gt1000)
            const newlt1000 = useHighestRiskValue('lt1000', lt1000)
            const newlt700 = useHighestRiskValue('lt700', lt700)
            const newlt500 = useHighestRiskValue('lt500', lt500)
            const newgt3 = useHighestRiskValue('gt3', gt3)
            const newgt2 = useHighestRiskValue('gt2', gt2)
            const newgt1 = useHighestRiskValue('gt1', gt1)
            const newlt1 = useHighestRiskValue('lt1', lt1)
            const newaltRequired = useHighestRiskValue('altRequired', altRequired)
            const newgt25IllumAndgt30degrees = useHighestRiskValue('gt25IllumAndgt30degrees', gt25IllumAndgt30degrees)
            const newlt25IllumAndlt30degrees = useHighestRiskValue('lt25IllumAndlt30degrees', lt25IllumAndlt30degrees)
            const newgt25IllumAndgt30degreesLimitedLighting = useHighestRiskValue('gt25IllumAndgt30degreesLimitedLighting', gt25IllumAndgt30degreesLimitedLighting)
            const newWinds = useHighestRiskValue('windGt30', windGt30)
            const newWindsHoist = useHighestRiskValue('windGt30Hoist', windGt30Hoist)
            const newGustSpread = useHighestRiskValue('gustSpreadGt20', gustSpreadGt20)
            const newThunderstorms = useHighestRiskValue('forecastThunderstorms', forecastThunderstorms)
            const newTurbulence = useHighestRiskValue('modTurbulenceIcing', modTurbulenceIcing)
            const newOAT = useHighestRiskValue('oatNegative10Positive30', oatNegative10Positive30)

            // Determine the highest risk level
            const risks = [newWinds, newWindsHoist, newGustSpread, newThunderstorms, newTurbulence, newOAT, newgt1000, newlt1000, newlt700, newlt500, newgt3, newgt2, newgt1, newlt1, newaltRequired, , newgt25IllumAndgt30degrees, newlt25IllumAndlt30degrees, newgt25IllumAndgt30degreesLimitedLighting];
            const highestRisk = useFinalRiskValue(risks)

            // set the initial risk of weather
            setValue('weatherInitialRisk', highestRisk);
        } else {
            firstRender.current = false;
        }
    }, [windGt30, windGt30Hoist, gustSpreadGt20, forecastThunderstorms, modTurbulenceIcing, oatNegative10Positive30, gt1000, lt1000, lt700, lt500, gt3, gt2, gt1, lt1, altRequired, gt25IllumAndgt30degrees, lt25IllumAndlt30degrees, gt25IllumAndgt30degreesLimitedLighting]);


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