import React, { useEffect, useRef } from 'react';
import { Controller } from "react-hook-form"
import { TextField, FormLabel } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CheckboxesModeOfFlight from '../components/CheckboxesModeOfFlight'
import CheckboxesBinary from '../components/CheckboxesBinary'
import RecencyToggleButton from '../components/RecencyToggleButton'
import useFinalRiskValue from '../../../../hooks/useFinalRiskValue'
import useHighestRiskValue from '../../../../hooks/useHighestRiskValue';

export default function Mission({ control, watch, setValue }) {

    const firstRender = useRef(true)
    const missionInitialRisk = watch('missionInitialRisk');
    const airAssault = watch('airAssault')
    const AH64AttackReconSecurity = watch('AH64AttackReconSecurity')
    const MEDEVAC = watch('MEDEVAC')
    const CASEVAC = watch('CASEVAC')
    const FARP = watch('FARP')
    const multiship = watch('multiship')
    const mixedMultiShip = watch('mixedMultiShip')
    const MTFGeneralTraining = watch('MTFGeneralTraining')
    const dartOneTimeFlight = watch('dartOneTimeFlight')
    const blackout = watch('blackout')
    const waterBucket = watch('waterBucket')
    const paradrops = watch('paradrops')
    const rappelSpiesFries = watch('rappelSpiesFries')
    const externalLoads = watch('externalLoads')
    const airmovementVIP = watch('airmovementVIP')
    const continuation = watch('continuation')
    const CEFS = watch('CEFS')
    const fatCow = watch('fatCow')
    const terrainFlight = watch('terrainFlight')
    const mountainOperations = watch('mountainOperations')
    const overwaterOperations = watch('overwaterOperations')
    const pinnacleOperations = watch('pinnacleOperations')
    const urbanOperations = watch('urbanOperations')
    const confinedOperations = watch('confinedOperations')
    const OGEwithin10 = watch('OGEwithin10')
    const IGEwithin10 = watch('IGEwithin10')
    const OGEwithin5 = watch('OGEwithin5')
    const IGEwithin5 = watch('IGEwithin5')
    const progessionEvaluationEPs = watch('progessionEvaluationEPs')
    const IFRSimulatedIMC = watch('IFRSimulatedIMC')
    const CBRNE = watch('CBRNE')
    const nonLiveHoist = watch('nonLiveHoist')
    const liveHoist = watch('liveHoist')
    const combatManueveringFlight = watch('combatManueveringFlight')
    const gunneryLiveFire = watch('gunneryLiveFire')
    const CALFEX = watch('CALFEX')
    const AMS = watch('AMS')
    const blackoutCurtain = watch('blackoutCurtain')
    const OWUntrained = watch('OWUntrained')
    const famFlight = watch('famFlight')
    const hoverWXRlt500 = watch('hoverWXRlt500')
    const UH60DoorsOff = watch('UH60DoorsOff')
    const OWSea4to5 = watch('OWSea4to5')
    const OWSeaGt6 = watch('OWSeaGt6')
    const pcGt90 = watch('pcGt90')
    const pcGt60 = watch('pcGt60')
    const pcGt30 = watch('pcGt30')
    const piGt90 = watch('piGt90')
    const piGt60 = watch('piGt60')
    const piGt30 = watch('piGt30')
    const nrcm1Gt90 = watch('nrcm1Gt90')
    const nrcm1Gt60 = watch('nrcm1Gt60')
    const nrcm1Gt30 = watch('nrcm1Gt30')
    const nrcm2Gt90 = watch('nrcm2Gt90')
    const nrcm2Gt60 = watch('nrcm2Gt60')
    const nrcm2Gt30 = watch('nrcm2Gt30')
    const nrcm3Gt90 = watch('nrcm3Gt90')
    const nrcm3Gt60 = watch('nrcm3Gt60')
    const nrcm3Gt30 = watch('nrcm3Gt30')
    const hoistGt90 = watch('hoistGt90')
    const hoistGt60 = watch('hoistGt60')
    const hoistGt30 = watch('hoistGt30')
    const specificGt12 = watch('specificGt12')
    const specific2to12 = watch('specific2to12')
    const specificLt2 = watch('specificLt2')
    const vagueGt12 = watch('vagueGt12')
    const vague2to12 = watch('vague2to12')
    const vagueLt2 = watch('vagueLt2')

    useEffect(() => {
        if (!firstRender.current) {
            const newairAssault = useHighestRiskValue('airAssault', airAssault)
            const newAH64AttackReconSecurity = useHighestRiskValue('AH64AttackReconSecurity', AH64AttackReconSecurity)
            const newMEDEVAC = useHighestRiskValue('MEDEVAC', MEDEVAC)
            const newCASEVAC = useHighestRiskValue('CASEVAC', CASEVAC)
            const newFARP = useHighestRiskValue('FARP', FARP)
            const newmultiship = useHighestRiskValue('multiship', multiship)
            const newmixedMultiShip = useHighestRiskValue('mixedMultiShip', mixedMultiShip)
            const newMTFGeneralTraining = useHighestRiskValue('MTFGeneralTraining', MTFGeneralTraining)
            const newdartOneTimeFlight = useHighestRiskValue('dartOneTimeFlight', dartOneTimeFlight)
            const newblackout = useHighestRiskValue('blackout', blackout)
            const newwaterBucket = useHighestRiskValue('waterBucket', waterBucket)
            const newparadrops = useHighestRiskValue('paradrops', paradrops)
            const newrappelSpiesFries = useHighestRiskValue('rappelSpiesFries', rappelSpiesFries)
            const newexternalLoads = useHighestRiskValue('externalLoads', externalLoads)
            const newairmovementVIP = useHighestRiskValue('airmovementVIP', airmovementVIP)
            const newcontinuation = useHighestRiskValue('continuation', continuation)
            const newCEFS = useHighestRiskValue('CEFS', CEFS)
            const newfatCow = useHighestRiskValue('fatCow', fatCow)
            const newterrainFlight = useHighestRiskValue('terrainFlight', terrainFlight)
            const newmountainOperations = useHighestRiskValue('mountainOperations', mountainOperations)
            const newoverwaterOperations = useHighestRiskValue('overwaterOperations', overwaterOperations)
            const newpinnacleOperations = useHighestRiskValue('pinnacleOperations', pinnacleOperations)
            const newurbanOperations = useHighestRiskValue('urbanOperations', urbanOperations)
            const newconfinedOperations = useHighestRiskValue('confinedOperations', confinedOperations)
            const newOGEwithin10 = useHighestRiskValue('OGEwithin10', OGEwithin10)
            const newIGEwithin10 = useHighestRiskValue('IGEwithin10', IGEwithin10)
            const newOGEwithin5 = useHighestRiskValue('OGEwithin5', OGEwithin5)
            const newIGEwithin5 = useHighestRiskValue('IGEwithin5', IGEwithin5)
            const newprogessionEvaluationEPs = useHighestRiskValue('progessionEvaluationEPs', progessionEvaluationEPs)
            const newIFRSimulatedIMC = useHighestRiskValue('IFRSimulatedIMC', IFRSimulatedIMC)
            const newCBRNE = useHighestRiskValue('CBRNE', CBRNE)
            const newnonLiveHoist = useHighestRiskValue('nonLiveHoist', nonLiveHoist)
            const newliveHoist = useHighestRiskValue('liveHoist', liveHoist)
            const newcombatManueveringFlight = useHighestRiskValue('combatManueveringFlight', combatManueveringFlight)
            const newgunneryLiveFire = useHighestRiskValue('gunneryLiveFire', gunneryLiveFire)
            const newCALFEX = useHighestRiskValue('CALFEX', CALFEX)
            const newAMS = useHighestRiskValue('AMS', AMS)
            const newblackoutCurtain = useHighestRiskValue('blackoutCurtain', blackoutCurtain)
            const newOWUntrained = useHighestRiskValue('OWUntrained', OWUntrained)
            const newfamFlight = useHighestRiskValue('famFlight', famFlight)
            const newhoverWXRlt500 = useHighestRiskValue('hoverWXRlt500', hoverWXRlt500)
            const newUH60DoorsOff = useHighestRiskValue('UH60DoorsOff', UH60DoorsOff)
            const newOWSea4to5 = useHighestRiskValue('OWSea4to5', OWSea4to5)
            const newOWSeaGt6 = useHighestRiskValue('OWSeaGt6', OWSeaGt6)
            const newpcGt90 = useHighestRiskValue('pcGt90', pcGt90)
            const newpcGt60 = useHighestRiskValue('pcGt60', pcGt60)
            const newpcGt30 = useHighestRiskValue('pcGt30', pcGt30)
            const newpiGt90 = useHighestRiskValue('piGt90', piGt90)
            const newpiGt60 = useHighestRiskValue('piGt60', piGt60)
            const newpiGt30 = useHighestRiskValue('piGt30', piGt30)
            const newnrcm1Gt90 = useHighestRiskValue('nrcm1Gt90', nrcm1Gt90)
            const newnrcm1Gt60 = useHighestRiskValue('nrcm1Gt60', nrcm1Gt60)
            const newnrcm1Gt30 = useHighestRiskValue('nrcm1Gt30', nrcm1Gt30)
            const newnrcm2Gt90 = useHighestRiskValue('nrcm2Gt90', nrcm2Gt90)
            const newnrcm2Gt60 = useHighestRiskValue('nrcm2Gt60', nrcm2Gt60)
            const newnrcm2Gt30 = useHighestRiskValue('nrcm2Gt30', nrcm2Gt30)
            const newnrcm3Gt90 = useHighestRiskValue('nrcm3Gt90', nrcm3Gt90)
            const newnrcm3Gt60 = useHighestRiskValue('nrcm3Gt60', nrcm3Gt60)
            const newnrcm3Gt30 = useHighestRiskValue('nrcm3Gt30', nrcm3Gt30)
            const newhoistGt90 = useHighestRiskValue('hoistGt90', hoistGt90)
            const newhoistGt60 = useHighestRiskValue('hoistGt60', hoistGt60)
            const newhoistGt30 = useHighestRiskValue('hoistGt30', hoistGt30)
            const newspecificGt12 = useHighestRiskValue('specificGt12', specificGt12)
            const newspecific2to12 = useHighestRiskValue('specific2to12', specific2to12)
            const newspecificLt2 = useHighestRiskValue('specificLt2', specificLt2)
            const newvagueGt12 = useHighestRiskValue('vagueGt12', vagueGt12)
            const newvague2to12 = useHighestRiskValue('vague2to12', vague2to12)
            const newvagueLt2 = useHighestRiskValue('vagueLt2', vagueLt2)

            // Determine the highest risk level
            const risks = [newairAssault, newAH64AttackReconSecurity, newMEDEVAC, newCASEVAC, newFARP, newmultiship, newmixedMultiShip, newMTFGeneralTraining, newdartOneTimeFlight, newblackout, newwaterBucket, newparadrops, newrappelSpiesFries, newexternalLoads, newairmovementVIP, newcontinuation, newCEFS, newfatCow, newterrainFlight, newmountainOperations, newoverwaterOperations, newpinnacleOperations, newurbanOperations, newconfinedOperations, newOGEwithin10, newIGEwithin10, newOGEwithin5, newIGEwithin5, newprogessionEvaluationEPs, newIFRSimulatedIMC, newCBRNE, newnonLiveHoist, newliveHoist, newcombatManueveringFlight, newgunneryLiveFire, newCALFEX, newAMS, newblackoutCurtain, newOWUntrained, newfamFlight, newhoverWXRlt500, newUH60DoorsOff, newOWSea4to5, newOWSeaGt6, newblackoutCurtain, newpcGt90, newpcGt60, newpcGt30, newpiGt90, newpiGt60, newpiGt30, newnrcm1Gt90, newnrcm1Gt60, newnrcm1Gt30, newnrcm2Gt90, newnrcm2Gt60, newnrcm2Gt30, newnrcm3Gt90, newnrcm3Gt60, newnrcm3Gt30, newhoistGt90, newhoistGt60, newhoistGt30, newspecificGt12, newspecific2to12, newspecificLt2, newvagueGt12, newvague2to12, newvagueLt2];
            const highestRisk = useFinalRiskValue(risks)

            // set the initial risk of weather
            setValue('missionInitialRisk', highestRisk);
        } else {
            firstRender.current = false;
        }
    }, [airAssault, AH64AttackReconSecurity, MEDEVAC, CASEVAC, FARP, multiship, mixedMultiShip, MTFGeneralTraining, dartOneTimeFlight, blackout, waterBucket, paradrops, rappelSpiesFries, externalLoads, airmovementVIP, continuation, CEFS, fatCow, terrainFlight, mountainOperations, overwaterOperations, pinnacleOperations, urbanOperations, confinedOperations, OGEwithin10, IGEwithin10, OGEwithin5, IGEwithin5, progessionEvaluationEPs, IFRSimulatedIMC, CBRNE, nonLiveHoist, liveHoist, combatManueveringFlight, gunneryLiveFire, CALFEX, AMS, blackoutCurtain, OWUntrained, famFlight, hoverWXRlt500, UH60DoorsOff, OWSea4to5, OWSeaGt6, blackoutCurtain, pcGt90, pcGt60, pcGt30, piGt90, piGt60, piGt30, nrcm1Gt90, nrcm1Gt60, nrcm1Gt30, nrcm2Gt90, nrcm2Gt60, nrcm2Gt30, nrcm3Gt90, nrcm3Gt60, nrcm3Gt30, hoistGt90, hoistGt60, hoistGt30, specificGt12, specific2to12, specificLt2, vagueGt12, vague2to12, vagueLt2]);


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
                    <Controller name="MEDEVAC" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'MEDEVAC'} value={field.value} onChange={field.onChange} />)}
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
                    <Controller name="CEFS" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'CEFS Operations'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="fatCow" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'FAT COW / WET HAWK'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="CASEVAC" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'CASEVAC'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="FARP" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'FARP'} value={field.value} onChange={field.onChange} />)}
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
                    <Controller name="crossCountryBorder" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Cross Country/Border'} value={field.value} onChange={field.onChange} />)}
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
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="Cruisewithin10" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Cruise within 10% MTA'} value={field.value} onChange={field.onChange} />)}
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
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="blackoutCurtain" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Blackout Curtain (AH)'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
            </Grid>




            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                marginTop: '24px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Unit Tasks</FormLabel>
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="OWUntrained" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'OW Untrained ACMs'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="famFlight" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Familiarization Flight'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoverWXRlt500" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'Hover Wx <500 / 1SM'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="UH60DoorsOff" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'UH60 Doors Off'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="OWSea4to5" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'OW Sea State 4-5'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="OWSeaGt6" control={control} render={({ field }) => (
                        <CheckboxesModeOfFlight task={'OW Sea State ≥ 6'} value={field.value} onChange={field.onChange} />)}
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
                {/* <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <RecencyToggleButton
                        task={'NRCM 1 > 90 days'}
                        value={nrcm1Gt90}       // Pass the value from your state management
                        onChange={(newValue) => {
                            setValue('nrcm1Gt90', newValue); // Update the state
                            // Perform other actions if needed
                        }}
                        setValue={setValue}
                        ninety={nrcm1Gt90}      // Set the initial value of the ToggleButton
                        sixty={nrcm1Gt60}      // Assuming nrcm1Gt60 and nrcm1Gt30 are defined somewhere
                        thirty={nrcm1Gt30}
                        control={control}
                    />
                </Grid> */}


                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt90" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 1 > 90 days'} value={field.value} onChange={field.onChange} />
                    )}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt60" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 1 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm1Gt30" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 1 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt90" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 2 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt60" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 2 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm2Gt30" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 2 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt90" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 3 > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt60" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 3 > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="nrcm3Gt30" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'NRCM 3 > 30 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt90" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Hoist > 90 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt60" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Hoist > 60 days'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="hoistGt30" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Hoist > 30 days'} value={field.value} onChange={field.onChange} />)}
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
                        <CheckboxesBinary task={'Specific: > 12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="specific2to12" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Specific: 2-12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="specificLt2" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Specific: < 2 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vagueGt12" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Vague: > 12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vague2to12" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Vague: 2-12 Hours'} value={field.value} onChange={field.onChange} />)}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={3} marginBottom={3}>
                    <Controller name="vagueLt2" control={control} render={({ field }) => (
                        <CheckboxesBinary task={'Vague: < 2 Hours'} value={field.value} onChange={field.onChange} />)}
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
                        <TextField required  {...field} multiline rows={2} fullWidth label="Risk Mitigation Techniques" />
                    )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}