import React from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"
import CheckboxesModeOfFlight from '../Components/CheckboxesModeOfFlight'

export default function Mission({ control, watch }) {
    const missionInitialRisk = watch('missionInitialRisk', '');

    return (
        <>
            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Mission Considerations</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="airAssault" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Air Assault'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="AH64AttackReconSecurity" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'AH64 Attack/Recon/Security'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="medevacCasevac" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'MEDEVAC/CASEVAC'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="multiship" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Multiship'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="mixedMultiShip" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Mixed MDS Multiship'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="MTFGeneralTraining" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'MTF General/Training'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="dartOneTimeFlight" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'DART/One Time Flight'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="blackout" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Blackout Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="waterBucket" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Waterbucket/Fire Fighting'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="paradrops" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Paradrops/Parachute'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="rappelSpiesFries" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Rappel/SPIES/FRIES'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="externalLoads" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'External Loads'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="airmovementVIP" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Air Movement/VIP'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="continuation" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Continuation Training'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="CEFS" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'CEFS Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="fatCow" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'FAT COW / WET HAWK'} value={field.value} onChange={field.onChange} />)}
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
                        <CheckboxesModeOfFlight task={'Terrain Flight'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="mountainOperations" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Mountain Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="overwaterOperations" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Overwater Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="pinnacleOperations" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Pinnacle Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="urbanOperations" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Urban Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="confinedOperations" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Confined Area Operations'} value={field.value} onChange={field.onChange} />)}
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
                        <CheckboxesModeOfFlight task={'OGE within 10% MTA'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="OGEwithin5" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'OGE within 5% MTA'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="IGEwithin10" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'IGE within 10% MTA'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="IGEwithin5" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'IGE within 5% MTA'} value={field.value} onChange={field.onChange} />)}
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
                        <CheckboxesModeOfFlight task={'Progression/Eval/EPs'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="IFRSimulatedIMC" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'IFR/SIM IMC'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="CBRNE" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'CBRNE'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nonLiveHoist" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Hoist Training (Non-Live)'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="liveHoist" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Hoist Training (Live)'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="combatManueveringFlight" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Combat Manuevering Flight'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="gunneryLiveFire" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Gunnery/Live Fire'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="CALFEX" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'CALFEX'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="AMS" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'AMS Training'} value={field.value} onChange={field.onChange} />)}
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
                        <CheckboxesModeOfFlight task={'PC > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="pcGt60" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'PC > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="pcGt30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'PC > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="piGt90" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'PI > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="piGt60" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'PI > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="piGt30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'PI > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt90" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 1 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt60" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 1 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 1 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt90" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 2 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt60" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 2 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 2 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt90" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 3 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt60" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 3 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'NRCM 3 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt90" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Hoist > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt60" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Hoist > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt30" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Hoist > 30 days'} value={field.value} onChange={field.onChange} />)}
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
                        <CheckboxesModeOfFlight task={'Specific: > 12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="specific2to12" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Specific: 2-12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="specificLt2" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Specific: < 2 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vagueGt12" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Vague: > 12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vague2to12" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Vague: 2-12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vagueLt2" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Vague: < 2 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'Center' }} component="legend">Mission Risk Assessment</FormLabel>
                </Grid>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'left' }} component="legend">Initial Risk: {missionInitialRisk}</FormLabel>
                </Grid>
                {/* Mission Mitigation */}
                <Grid xs={12} >
                    <Controller name="missionRiskMitigation" control={control} render={({ field }) => (
                        <TextField {...field} multiline rows={2} fullWidth label="Risk Mitigation Techniques" />
                    )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}