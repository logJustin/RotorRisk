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
            <TableRow>
                <TableCell sx={{
                    borderBottom: 'none',
                    padding: '5px 0px 0px 0px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setMissionOpen(!missionOpen)}
                        sx={{ height: '100%' }}
                    >
                        {missionOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ marginLeft: '8px' }} // Add some margin for spacing
                        > Mission: {row.missionmitigatedrisk}</Typography>
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <Collapse in={missionOpen} timeout="auto" unmountOnExit>
                        <Table size="small" >
                            <TableHead>
                                <TableRow key='MissionStatement'>
                                    <TableCell colSpan={4} component="th" scope="row">Mission Statement: {row.missionstatement}</TableCell>
                                </TableRow>
                                <TableRow key='MissionInfo'>
                                    <TableCell component="th" scope="row">Mission: {row.mission}</TableCell>
                                    <TableCell colSpan={2}>Flight Conditions: {row.flightconditions}</TableCell>
                                    <TableCell>ETD: {row.etd}</TableCell>
                                </TableRow>
                                <TableRow key='AircraftInfo'>
                                    <TableCell>Route: {row.route}</TableCell>
                                    <TableCell align="left">Aircraft Type: {row.aircrafttype}</TableCell>
                                    <TableCell align="left">Aircraft Tail: {row.aircrafttail}</TableCell>
                                    <TableCell>ETE: {row.ete}</TableCell>
                                </TableRow>
                                {/* Missions */}
                                <TableRow key='missionConsiderationsHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>
                                            Mission Considerations</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='exampleRow'>
                                    <TableCell sx={{ background: lowRisk, color: 'black', borderBottom: 'none' }} align='center'>Low Risk</TableCell>
                                    <TableCell sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Moderate Risk</TableCell>
                                    <TableCell sx={{ background: highRisk, color: 'black', borderBottom: 'none' }} align='center'>High Risk</TableCell>
                                    <TableCell sx={{ background: extremelyHighRisk, color: 'black', borderBottom: 'none' }} align='center'>Extremely High Risk</TableCell>
                                </TableRow>
                                <TableRow key='firstMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('airAssault', row.airassault), color: 'black', borderBottom: 'none' }} align='center'>Air Assault <br></br>{row.airassault && `(${row.airassault})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('AH64AttackReconSecurity', row.AH64attackreconsecurity), color: 'black', borderBottom: 'none' }} align='center'>AH64 Attack/Recon <br></br>{row.AH64attackreconsecurity && `(${row.AH64attackreconsecurity})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('MEDEVAC', row.medevac), color: 'black', borderBottom: 'none' }} align='center'>MEDEVAC <br></br>{row.medevac && `(${row.medevac})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('multiship', row.multiship), color: 'black', borderBottom: 'none' }} align='center'>Multiship <br></br>{row.multiship && `(${row.multiship})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('mixedMultiShip', row.mixedmultiship), color: 'black', borderBottom: 'none' }} align='center'>Mixed Multiship <br></br>{row.mixedmultiship && `(${row.mixedmultiship})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('dartOneTimeFlight', row.dartonetimeflight), color: 'black', borderBottom: 'none' }} align='center'>DART/One Time Flight <br></br>{row.dartonetimeflight && `(${row.dartonetimeflight})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('MTFGeneralTraining', row.mtfgeneraltraining), color: 'black', borderBottom: 'none' }} align='center'>MTF <br></br>{row.mtfgeneraltraining && `(${row.mtfgeneraltraining})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('blackout', row.blackout), color: 'black', borderBottom: 'none' }} align='center'>Blackout Operations <br></br>{row.blackout && `(${row.blackout})`}</TableCell>
                                </TableRow>
                                <TableRow key='thirdMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('waterBucket', row.waterbucket), color: 'black', borderBottom: 'none' }} align='center'>Water Bucket <br></br>{row.waterbucket && `(${row.waterbucket})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('paradrops', row.paradrops), color: 'black', borderBottom: 'none' }} align='center'>Paradrops <br></br>{row.paradrops && `(${row.paradrops})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('rappelSpiesFries', row.rappelspiesfries), color: 'black', borderBottom: 'none' }} align='center'>SPIES/FRIES <br></br>{row.rappelspiesfries && `(${row.rappelspiesfries})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('externalLoads', row.externalloads), color: 'black', borderBottom: 'none' }} align='center'>External Loads <br></br>{row.externalloads && `(${row.externalloads})`}</TableCell>
                                </TableRow>
                                <TableRow key='fourthMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('airmovementVIP', row.airmovementvip), color: 'black', borderBottom: 'none' }} align='center'>Air Movement <br></br>{row.airmovementvip && `(${row.airmovementvip})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('continuation', row.continuation), color: 'black', borderBottom: 'none' }} align='center'>Continuation Training <br></br>{row.continuation && `(${row.continuation})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CEFS', row.cefs), color: 'black', borderBottom: 'none' }} align='center'>CEFS <br></br>{row.cefs && `(${row.cefs})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('fatCow', row.fatcow), color: 'black', borderBottom: 'none' }} align='center'>Fat Cow <br></br>{row.fatcow && `(${row.fatcow})`}</TableCell>
                                </TableRow>
                                <TableRow key='fifthMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('crossCountryBorder', row.crosscountryborder), color: 'black', borderBottom: 'none' }} align='center'>Cross Country/Border <br></br>{row.crosscountryborder && `(${row.crosscountryborder})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('FARP', row.farp), color: 'black', borderBottom: 'none' }} align='center'>FARP <br></br>{row.farp && `(${row.farp})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CASEVAC', row.casevac), color: 'black', borderBottom: 'none' }} align='center'>CASEVAC <br></br>{row.casevac && `(${row.casevac})`}</TableCell>
                                    {/* <TableCell sx={{ background: determineHighestRisk('fatCow', row.fatCow), color: 'black', borderBottom: 'none' }} align='center'>Fat Cow <br></br>{row.fatCow && `(${row.fatCow})`}</TableCell> */}
                                </TableRow>
                                <TableRow key='trainingConsiderationsHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>
                                            Training Considerations</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='firstTrainingRow'>
                                    <TableCell sx={{ background: determineHighestRisk('progessionEvaluationEPs', row.progessionevaluationeps), color: 'black', borderBottom: 'none' }} align='center'>Prog/Eval/EP <br></br>{row.progessionevaluationeps && `(${row.progessionevaluationeps})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IFRSimulatedIMC', row.ifrsimulatedimc), color: 'black', borderBottom: 'none' }} align='center'>IFR/Simulated IMC <br></br>{row.ifrsimulatedimc && `(${row.ifrsimulatedimc})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CBRNE', row.cbrne), color: 'black', borderBottom: 'none' }} align='center'>CBRNE <br></br>{row.cbrne && `(${row.cbrne})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('combatManueveringFlight', row.combatmanueveringflight), color: 'black', borderBottom: 'none' }} align='center'>Combat Man. Flight <br></br>{row.combatmanueveringflight && `(${row.combatmanueveringflight})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondTrainingRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nonLiveHoist', row.nonlivehoist), color: 'black', borderBottom: 'none' }} align='center'>Non Live Hoist <br></br>{row.nonlivehoist && `(${row.nonlivehoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('liveHoist', row.livehoist), color: 'black', borderBottom: 'none' }} align='center'>Live Hoist <br></br>{row.livehoist && `(${row.livehoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gunneryLiveFire', row.gunnerylivefire), color: 'black', borderBottom: 'none' }} align='center'>Gunnery/Live Fire <br></br>{row.gunnerylivefire && `(${row.gunnerylivefire})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CALFEX', row.calfex), color: 'black', borderBottom: 'none' }} align='center'>CALFEX <br></br>{row.calfex && `(${row.calfex})`}</TableCell>
                                </TableRow>
                                <TableRow key='thirdTrainingRow'>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('blackoutCurtain', row.blackoutcurtain), color: 'black', borderBottom: 'none' }} align='center'>Blackout Curtain (AH) <br></br>{row.blackoutcurtain && `(${row.blackoutcurtain})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('AMS', row.ams), color: 'black', borderBottom: 'none' }} align='center'>AMS <br></br>{row.ams && `(${row.ams})`}</TableCell>
                                    {/* <TableCell sx={{ background: determineHighestRisk('gunneryLiveFire', row.gunneryLiveFire), color: 'black', borderBottom: 'none' }} align='center'>Gunnery/Live Fire <br></br>{row.gunneryLiveFire && `(${row.gunneryLiveFire})`}</TableCell> */}
                                    {/* <TableCell sx={{ background: determineHighestRisk('CALFEX', row.CALFEX), color: 'black', borderBottom: 'none' }} align='center'>CALFEX <br></br>{row.CALFEX && `(${row.CALFEX})`}</TableCell> */}
                                </TableRow>
                                <TableRow key='terrainConsiderationsHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>
                                            Terrain Considerations</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='firstTerrainRow'>
                                    <TableCell sx={{ background: determineHighestRisk('terrainFlight', row.terrainflight), color: 'black', borderBottom: 'none' }} align='center'>Terrain Flight <br></br>{row.terrainflight && `(${row.terrainflight})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('mountainOperations', row.mountainoperations), color: 'black', borderBottom: 'none' }} align='center'>Mountain Operations <br></br>{row.mountainoperations && `(${row.mountainoperations})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('overwaterOperations', row.overwateroperations), color: 'black', borderBottom: 'none' }} align='center'>Overwater Operations <br></br>{row.overwateroperations && `(${row.overwateroperations})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('pinnacleOperations', row.pinnacleoperations), color: 'black', borderBottom: 'none' }} align='center'>Pinnacle Operations <br></br>{row.pinnacleoperations && `(${row.pinnacleoperations})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondTerrainRow'>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('urbanOperations', row.urbanoperations), color: 'black', borderBottom: 'none' }} align='center'>Urban Operations <br></br>{row.urbanoperations && `(${row.urbanoperations})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('confinedOperations', row.confinedoperations), color: 'black', borderBottom: 'none' }} align='center'>Confined Operations <br></br>{row.confinedoperations && `(${row.confinedoperations})`}</TableCell>
                                </TableRow>
                                {/* </Collapse> */}
                                <TableRow key='powerHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Power Considerations</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='powerConsiderationsRow'>
                                    <TableCell sx={{ background: determineHighestRisk('OGEwithin10', row.ogewithin10), color: 'black', borderBottom: 'none' }} align='center'>OGE w/in 10% of MTA <br></br>{row.ogewithin10 && `(${row.ogewithin10})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IGEwithin10', row.igewithin10), color: 'black', borderBottom: 'none' }} align='center'>IGE w/in 10% of MTA <br></br>{row.igewithin10 && `(${row.igewithin10})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('OGEwithin5', row.ogewithin5), color: 'black', borderBottom: 'none' }} align='center'>OGE w/in 5% of MTA <br></br>{row.ogewithin5 && `(${row.ogewithin5})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IGEwithin5', row.igewithin5), color: 'black', borderBottom: 'none' }} align='center'>IGE w/in 5% of MTA <br></br>{row.igewithin5 && `(${row.igewithin5})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondPowerConsiderationsRow'>
                                    <TableCell colSpan={4} sx={{ background: determineHighestRisk('Cruisewithin10', row.cruisewithin10), color: 'black', borderBottom: 'none' }} align='center'>Cruise Power w/in 10% of MTA <br></br>{row.cruisewithin10 && `(${row.cruisewithin10})`}</TableCell>
                                </TableRow>
                                <TableRow key='unitTasksHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>
                                            Unit Specific Tasks</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='firstUnitTasksRow'>
                                    <TableCell sx={{ background: determineHighestRisk('OWUntrained', row.owuntrained), color: 'black', borderBottom: 'none' }} align='center'>OW, Untrained ACMs <br></br>{row.owuntrained && `(${row.owuntrained})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('famFlight', row.famflight), color: 'black', borderBottom: 'none' }} align='center'>Familiarization Flight <br></br>{row.famflight && `(${row.famflight})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('hoverWXRlt500', row.hoverwxrlt500), color: 'black', borderBottom: 'none' }} align='center'>Hover Wxr {'<'}500' / 1SM <br></br>{row.hoverwxrlt500 && `(${row.hoverwxrlt500})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('UH60DoorsOff', row.uh60doorsoff), color: 'black', borderBottom: 'none' }} align='center'>UH60 Doors Off <br></br>{row.uh60doorsoff && `(${row.uh60doorsoff})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondUnitTasksRow'>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('OWSea4to5', row.owsea4to5), color: 'black', borderBottom: 'none' }} align='center'>OW Sea State 4-5 <br></br>{row.owsea4to5 && `(${row.owsea4to5})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('OWSeaGt6', row.owseagt6), color: 'black', borderBottom: 'none' }} align='center'>OW Sea State {'≥'} 6 <br></br>{row.owseagt6 && `(${row.owseagt6})`}</TableCell>
                                </TableRow>
                                <TableRow key='recencyHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Task Recency</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='pcRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('pcGt30', row.pcgt30), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}30 Days <br></br>{row.pcgt30 && `(${row.pcgt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('pcGt60', row.pcgt60), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}60 Days <br></br>{row.pcgt60 && `(${row.pcgt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('pcGt90', row.pcgt90), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}90 Days <br></br>{row.pcgt90 && `(${row.pcgt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='piRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('piGt30', row.pigt30), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}30 Days <br></br>{row.pigt30 && `(${row.pigt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('piGt60', row.pigt60), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}60 Days <br></br>{row.pigt60 && `(${row.pigt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('piGt90', row.pigt90), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}90 Days <br></br>{row.pigt90 && `(${row.pigt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='nrcm1RecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm1Gt30', row.nrcm1gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}30 Days</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm1Gt60', row.nrcm1gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}60 Days</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm1Gt90', row.nrcm1gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}90 Days</TableCell>
                                </TableRow>
                                <TableRow key='nrcm2RecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm2Gt30', row.nrcm2gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}30 Days</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm2Gt60', row.nrcm2gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}60 Days</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm2Gt90', row.nrcm2gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}90 Days</TableCell>
                                </TableRow>
                                {
                                    row.nrcm3 &&
                                    <TableRow key='nrcm3RecencyRow'>
                                        <TableCell sx={{ background: determineHighestRisk('nrcm3Gt30', row.nrcm3gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}30 Days</TableCell>
                                        <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm3Gt60', row.nrcm3gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}60 Days</TableCell>
                                        <TableCell sx={{ background: determineHighestRisk('nrcm3Gt90', row.nrcm3gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}90 Days</TableCell>
                                    </TableRow>
                                }
                                <TableRow key='hoistRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt30', row.hoistgt30), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}30 Days</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('hoistGt60', row.hoistgt60), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}60 Days</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt90', row.hoistgt90), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}90 Days</TableCell>
                                </TableRow>
                                <TableRow key='planningHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Planning Timeline</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='specificPlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('specificGt12', row.specificgt12), color: 'black', borderBottom: 'none' }} align='center'>Specific {'>'}12 Hours</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('specific2to12', row.specific2to12), color: 'black', borderBottom: 'none' }} align='center'>Specific 2-12 Hours</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('specificLt2', row.specificlt2), color: 'black', borderBottom: 'none' }} align='center'>Specific {'<'}2 Hours</TableCell>
                                </TableRow>
                                <TableRow key='vaguePlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('vagueGt12', row.vaguegt12), color: 'black', borderBottom: 'none' }} align='center'>Vague {'>'}12 Hours</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('vague2to12', row.vague2to12), color: 'black', borderBottom: 'none' }} align='center'>Vague 2-12 Hours</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('vagueLt2', row.vaguelt2), color: 'black', borderBottom: 'none' }} align='center'>Vague {'<'}2 Hours</TableCell>
                                </TableRow>
                                <TableRow key='missionRiskHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Mission Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='MissionRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.missionriskmitigation}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRisk'>
                                    <TableCell colSpan={2} align="left">Initial Risk: {row.missioninitialrisk}</TableCell>
                                    <TableCell colSpan={2} align="left">Mitigated Risk: {row.missionmitigatedrisk}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}