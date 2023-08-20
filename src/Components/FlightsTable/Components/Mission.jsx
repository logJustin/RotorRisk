import * as React from 'react';
import { Table, TableCell, TableHead, TableRow, Typography, IconButton, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import determineHighestRisk from '../../../utils/RiskLookupColor'
import '../FlightsList.css';

export default function Mission({ row }) {
    const [missionOpen, setMissionOpen] = React.useState(false);
    const [lowRisk, moderateRisk, highRisk, extremelyHighRisk] = ['#8CD47E', '#F8D66D', '#FF6961', '#653239']

    return (
        <>
            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setMissionOpen(!missionOpen)}
                        sx={{ display: 'inline' }}
                    >
                        {missionOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Mission: {row.missionMitigatedRisk}</Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <Collapse in={missionOpen} timeout="auto" unmountOnExit>
                        <Table size="small" >
                            <TableHead>
                                <TableRow key='MissionStatement'>
                                    <TableCell colSpan={4} component="th" scope="row">Mission Statement: {row.missionStatement}</TableCell>
                                </TableRow>
                                <TableRow key='MissionInfo'>
                                    <TableCell component="th" scope="row">Mission: {row.mission}</TableCell>
                                    <TableCell colSpan={2}>Flight Conditions: {row.flightConditions}</TableCell>
                                    <TableCell>ETD: {row.etd}</TableCell>
                                </TableRow>
                                <TableRow key='AircraftInfo'>
                                    <TableCell>Route: {row.route}</TableCell>
                                    <TableCell align="left">Aircraft Type: {row.aircraftType}</TableCell>
                                    <TableCell align="left">Aircraft Tail: {row.aircraftTail}</TableCell>
                                    <TableCell>ETE: {row.ete}</TableCell>
                                </TableRow>
                                {/* Missions */}
                                <TableRow key='mssionHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>
                                            Mission Tasks</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='exampleRow'>
                                    <TableCell sx={{ background: lowRisk, color: 'black', borderBottom: 'none' }} align='center'>Low Risk</TableCell>
                                    <TableCell sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Moderate Risk</TableCell>
                                    <TableCell sx={{ background: highRisk, color: 'black', borderBottom: 'none' }} align='center'>High Risk</TableCell>
                                    <TableCell sx={{ background: extremelyHighRisk, color: 'black', borderBottom: 'none' }} align='center'>Extremely High Risk</TableCell>
                                </TableRow>
                                <TableRow key='firstMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('airAssault', row.airAssault), color: 'black', borderBottom: 'none' }} align='center'>Air Assault <br></br>{row.airAssault && `(${row.airAssault})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('AH64AttackReconSecurity', row.AH64AttackReconSecurity), color: 'black', borderBottom: 'none' }} align='center'>AH64 Attack/Recon <br></br>{row.AH64AttackReconSecurity && `(${row.AH64AttackReconSecurity})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('medevacCasevac', row.medevacCasevac), color: 'black', borderBottom: 'none' }} align='center'>MEDEVAC/CASEVAC <br></br>{row.medevacCasevac && `(${row.medevacCasevac})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('multiship', row.multiship), color: 'black', borderBottom: 'none' }} align='center'>Multiship <br></br>{row.multiship && `(${row.multiship})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('mixedMultiShip', row.mixedMultiShip), color: 'black', borderBottom: 'none' }} align='center'>Mixed Multiship <br></br>{row.mixedMultiShip && `(${row.mixedMultiShip})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('dartOneTimeFlight', row.dartOneTimeFlight), color: 'black', borderBottom: 'none' }} align='center'>DART/One Time Flight <br></br>{row.dartOneTimeFlight && `(${row.dartOneTimeFlight})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('MTFGeneralTraining', row.MTFGeneralTraining), color: 'black', borderBottom: 'none' }} align='center'>MTF <br></br>{row.MTFGeneralTraining && `(${row.MTFGeneralTraining})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('blackout', row.blackout), color: 'black', borderBottom: 'none' }} align='center'>Blackout Operations <br></br>{row.blackout && `(${row.blackout})`}</TableCell>
                                </TableRow>
                                <TableRow key='thirdMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('waterBucket', row.waterBucket), color: 'black', borderBottom: 'none' }} align='center'>Water Bucket <br></br>{row.waterBucket && `(${row.waterBucket})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('paradrops', row.paradrops), color: 'black', borderBottom: 'none' }} align='center'>Paradrops <br></br>{row.paradrops && `(${row.paradrops})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('rappelSpiesFries', row.rappelSpiesFries), color: 'black', borderBottom: 'none' }} align='center'>SPIES/FRIES <br></br>{row.rappelSpiesFries && `(${row.rappelSpiesFries})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('externalLoads', row.externalLoads), color: 'black', borderBottom: 'none' }} align='center'>External Loads <br></br>{row.externalLoads && `(${row.externalLoads})`}</TableCell>
                                </TableRow>
                                <TableRow key='fourthMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('airmovementVIPContinuation', row.airmovementVIPContinuation), color: 'black', borderBottom: 'none' }} align='center'>Air Movement <br></br>{row.airmovementVIPContinuation && `(${row.airmovementVIPContinuation})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('airmovementVIPContinuation', row.airmovementVIPContinuation), color: 'black', borderBottom: 'none' }} align='center'>Continuation Training <br></br>{row.airmovementVIPContinuation && `(${row.airmovementVIPContinuation})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CEFS', row.CEFS), color: 'black', borderBottom: 'none' }} align='center'>CEFS <br></br>{row.CEFS && `(${row.CEFS})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('fatCow', row.fatCow), color: 'black', borderBottom: 'none' }} align='center'>Fat Cow <br></br>{row.fatCow && `(${row.fatCow})`}</TableCell>
                                </TableRow>
                                <TableRow key='firstTrainingRow'>
                                    <TableCell sx={{ background: determineHighestRisk('progessionEvaluationEPs', row.progessionEvaluationEPs), color: 'black', borderBottom: 'none' }} align='center'>Prog/Eval/EP <br></br>{row.progessionEvaluationEPs && `(${row.progessionEvaluationEPs})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IFRSimulatedIMC', row.IFRSimulatedIMC), color: 'black', borderBottom: 'none' }} align='center'>IFR/Simulated IMC <br></br>{row.IFRSimulatedIMC && `(${row.IFRSimulatedIMC})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CBRNE', row.CBRNE), color: 'black', borderBottom: 'none' }} align='center'>CBRNE <br></br>{row.CBRNE && `(${row.CBRNE})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('combatManueveringFlight', row.combatManueveringFlight), color: 'black', borderBottom: 'none' }} align='center'>Combat Man. Flight <br></br>{row.combatManueveringFlight && `(${row.combatManueveringFlight})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondTrainingRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nonLiveHoist', row.nonLiveHoist), color: 'black', borderBottom: 'none' }} align='center'>Non Live Hoist <br></br>{row.nonLiveHoist && `(${row.nonLiveHoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('liveHoist', row.liveHoist), color: 'black', borderBottom: 'none' }} align='center'>Live Hoist <br></br>{row.liveHoist && `(${row.liveHoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gunneryLiveFire', row.gunneryLiveFire), color: 'black', borderBottom: 'none' }} align='center'>Gunnery/Live Fire <br></br>{row.gunneryLiveFire && `(${row.gunneryLiveFire})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CALFEX', row.CALFEX), color: 'black', borderBottom: 'none' }} align='center'>CALFEX <br></br>{row.CALFEX && `(${row.CALFEX})`}</TableCell>
                                </TableRow>
                                <TableRow key='firstTerrainRow'>
                                    <TableCell sx={{ background: determineHighestRisk('terrainFlight', row.terrainFlight), color: 'black', borderBottom: 'none' }} align='center'>Terrain Flight <br></br>{row.terrainFlight && `(${row.terrainFlight})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('mountainOperations', row.mountainOperations), color: 'black', borderBottom: 'none' }} align='center'>Mountain Operations <br></br>{row.mountainOperations && `(${row.mountainOperations})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('overwaterOperations', row.overwaterOperations), color: 'black', borderBottom: 'none' }} align='center'>Overwater Operations <br></br>{row.overwaterOperations && `(${row.overwaterOperations})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('pinnacleOperations', row.pinnacleOperations), color: 'black', borderBottom: 'none' }} align='center'>Pinnacle Operations <br></br>{row.pinnacleOperations && `(${row.pinnacleOperations})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondTerrainRow'>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('urbanOperations', row.urbanOperations), color: 'black', borderBottom: 'none' }} align='center'>Urban Operations <br></br>{row.urbanOperations && `(${row.urbanOperations})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('confinedOperations', row.confinedOperations), color: 'black', borderBottom: 'none' }} align='center'>Confined Operations <br></br>{row.confinedOperations && `(${row.confinedOperations})`}</TableCell>
                                </TableRow>
                                {/* </Collapse> */}
                                <TableRow key='powerHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Power Considerations</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='powerConsiderationsRow'>
                                    <TableCell sx={{ background: determineHighestRisk('OGEwithin10', row.OGEwithin10), color: 'black', borderBottom: 'none' }} align='center'>OGE w/in 10% of MTA <br></br>{row.OGEwithin10 && `(${row.OGEwithin10})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IGEwithin10', row.IGEwithin10), color: 'black', borderBottom: 'none' }} align='center'>IGE w/in 10% of MTA <br></br>{row.IGEwithin10 && `(${row.IGEwithin10})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('OGEwithin5', row.OGEwithin5), color: 'black', borderBottom: 'none' }} align='center'>OGE w/in 5% of MTA <br></br>{row.OGEwithin5 && `(${row.OGEwithin5})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IGEwithin5', row.IGEwithin5), color: 'black', borderBottom: 'none' }} align='center'>IGE w/in 5% of MTA <br></br>{row.IGEwithin5 && `(${row.IGEwithin5})`}</TableCell>
                                </TableRow>
                                <TableRow key='recencyHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Task Recency</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='pcRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('pcGt30', row.pcGt30), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}30 Days <br></br>{row.pcGt30 && `(${row.pcGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('pcGt60', row.pcGt60), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}60 Days <br></br>{row.pcGt60 && `(${row.pcGt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('pcGt90', row.pcGt90), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}90 Days <br></br>{row.pcGt90 && `(${row.pcGt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='piRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('piGt30', row.piGt30), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}30 Days <br></br>{row.piGt30 && `(${row.piGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('piGt60', row.piGt60), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}60 Days <br></br>{row.piGt60 && `(${row.piGt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('piGt90', row.piGt90), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}90 Days <br></br>{row.piGt90 && `(${row.piGt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='nrcm1RecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm1Gt30', row.nrcm1Gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}30 Days <br></br>{row.nrcm1Gt30 && `(${row.nrcm1Gt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm1Gt60', row.nrcm1Gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}60 Days <br></br>{row.nrcm1Gt60 && `(${row.nrcm1Gt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm1Gt90', row.nrcm1Gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}90 Days <br></br>{row.nrcm1Gt90 && `(${row.nrcm1Gt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='nrcm2RecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm2Gt30', row.nrcm2Gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}30 Days <br></br>{row.nrcm2Gt30 && `(${row.nrcm2Gt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm2Gt60', row.nrcm2Gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}60 Days <br></br>{row.nrcm2Gt60 && `(${row.nrcm2Gt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm2Gt90', row.nrcm2Gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}90 Days <br></br>{row.nrcm2Gt90 && `(${row.nrcm2Gt90})`}</TableCell>
                                </TableRow>
                                {
                                    row.nrcm3 &&
                                    <TableRow key='nrcm3RecencyRow'>
                                        <TableCell sx={{ background: determineHighestRisk('nrcm3Gt30', row.nrcm3Gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}30 Days <br></br>{row.nrcm3Gt30 && `(${row.nrcm3Gt30})`}</TableCell>
                                        <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm3Gt60', row.nrcm3Gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}60 Days <br></br>{row.nrcm3Gt60 && `(${row.nrcm3Gt60})`}</TableCell>
                                        <TableCell sx={{ background: determineHighestRisk('nrcm3Gt90', row.nrcm3Gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}90 Days <br></br>{row.nrcm3Gt90 && `(${row.nrcm3Gt90})`}</TableCell>
                                    </TableRow>
                                }
                                <TableRow key='hoistRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt30', row.hoistGt30), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}30 Days</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('hoistGt60', row.hoistGt60), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}60 Days</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt90', row.hoistGt90), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}90 Days</TableCell>
                                </TableRow>
                                <TableRow key='planningHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Planning Timeline</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='specificPlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('specificGt12', row.specificGt12), color: 'black', borderBottom: 'none' }} align='center'>Specific {'>'}12 Hours</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('specific2to12', row.specific2to12), color: 'black', borderBottom: 'none' }} align='center'>Specific 2-12 Hours</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('specificLt2', row.specificLt2), color: 'black', borderBottom: 'none' }} align='center'>Specific {'<'}2 Hours</TableCell>
                                </TableRow>
                                <TableRow key='vaguePlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('vagueGt12', row.vagueGt12), color: 'black', borderBottom: 'none' }} align='center'>Vague {'>'}12 Hours</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('vague2to12', row.vague2to12), color: 'black', borderBottom: 'none' }} align='center'>Vague 2-12 Hours</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('vagueLt2', row.vagueLt2), color: 'black', borderBottom: 'none' }} align='center'>Vague {'<'}2 Hours</TableCell>
                                </TableRow>
                                <TableRow key='missionHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Mission Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='MissionRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.missionRiskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRisk'>
                                    <TableCell colSpan={2} align="left">Initial Risk: {row.missionInitialRisk}</TableCell>
                                    <TableCell colSpan={2} align="left">Mitigated Risk: {row.missionMitigatedRisk}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}