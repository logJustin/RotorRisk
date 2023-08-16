
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import determineHighestRisk from '../../utils/RiskLookupColor'
import aircrewMemberRiskColor from '../../utils/AircrewRiskLookupColor'
import flights from '../../data/seederFlightData';
import risks from '../../data/riskMatrix';
import './FlightsList.css';


export default function Body({ drawerWidth }) {


    const [lowRisk, moderateRisk, highRisk] = ['#8CD47E', '#F8D66D', '#FF6961']


    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const [crewOpen, setCrewOpen] = React.useState(false);
        const [missionOpen, setMissionOpen] = React.useState(false);
        const [weatherOpen, setWeatherOpen] = React.useState(false);
        const [finalRiskOpen, setFinalRiskOpen] = React.useState(false);


        return (
            <React.Fragment>
                <TableRow size="small" sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell size="small" sx={{ padding: '0' }}>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} component="th" scope="row" align="left">{row.date}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.mission}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.finalMitigatedRisk}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.pc}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.briefer}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.approver}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }}> <Button sx={{ margin: '20px 0' }} variant="contained" color="inherit">Edit RCOP</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                        <Collapse in={open} timeout="auto" unmountOnExit>

                            {/* AIRCREW */}
                            <TableRow sx={{ margin: 1 }}>
                                <TableCell sx={{ borderBottom: 'none' }}>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => setCrewOpen(!crewOpen)}
                                        sx={{ display: 'inline' }}
                                    >
                                        {crewOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Aircrew: {row.aircrewMitigatedRisk}</Typography>
                                </TableCell>

                            </TableRow>
                            <Collapse in={crewOpen} timeout="auto" unmountOnExit>
                                <TableRow key='AircrewNames'>
                                    <TableCell sx={{ borderBottom: 'none' }} component="th" scope="row" align="center">PC: {row.pc}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">PI: {row.pi}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.nrcm1}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.nrcm2}</TableCell>
                                    {row.nrcm3 && <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.nrcm3}</TableCell>}
                                </TableRow>
                                <TableRow key='AircrewHours'>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.pcHoursTotal, true) }} component="th" scope="row" align="center">({row.pcHoursTotal} All / {row.pcHoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.piHoursTotal, true) }} align="center">({row.piHoursTotal} All / {row.piHoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.nrcm1HoursTotal, false) }} align="center">({row.nrcm1HoursTotal} All / {row.nrcm1HoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.nrcm2HoursTotal, false) }} align="center">({row.nrcm2HoursTotal} All / {row.nrcm2HoursNG} NG)</TableCell>
                                    {row.nrcm3 && <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.nrcm3HoursTotal, false) }} align="center">({row.nrcm3HoursTotal} All / {row.nrcm3HoursNG} NG)</TableCell>}
                                </TableRow>

                                <TableRow key='aircrewRiskHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Aircrew Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='RiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.aircrewRiskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='FlightRisks'>
                                    <TableCell colSpan={2} component="th" scope="row">Initial Risk: {row.initialRisk}</TableCell>
                                    <TableCell colSpan={2} align="left">Mitigated Risk: {row.aircrewMitigatedRisk}</TableCell>
                                </TableRow>
                            </Collapse>

                            {/* MISSION */}
                            <TableRow sx={{ margin: 1 }}>
                                <TableCell sx={{ borderBottom: 'none' }}>
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
                            <Collapse in={missionOpen} timeout="auto" unmountOnExit>
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
                                    <TableCell colSpan={2} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Moderate Risk</TableCell>
                                    <TableCell sx={{ background: highRisk, color: 'black', borderBottom: 'none' }} align='center'>High Risk</TableCell>
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
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt30', row.hoistGt30), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}30 Days <br></br>{row.hoistGt30 && `(${row.hoistGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('hoistGt60', row.hoistGt60), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}60 Days <br></br>{row.hoistGt60 && `(${row.hoistGt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt90', row.hoistGt90), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}90 Days <br></br>{row.hoistGt90 && `(${row.hoistGt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='planningHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Planning Timeline</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='specificPlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('specificGt12', row.specificGt12), color: 'black', borderBottom: 'none' }} align='center'>Specific {'>'}12 Hours <br></br>{row.specificGt12 && `(${row.specificGt12})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('specific2to12', row.specific2to12), color: 'black', borderBottom: 'none' }} align='center'>Specific 2-12 Hours <br></br>{row.specific2to12 && `(${row.specific2to12})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('specificLt2', row.specificLt2), color: 'black', borderBottom: 'none' }} align='center'>Specific {'<'}2 Hours <br></br>{row.specificLt2 && `(${row.specificLt2})`}</TableCell>
                                </TableRow>
                                <TableRow key='vaguePlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('vagueGt12', row.vagueGt12), color: 'black', borderBottom: 'none' }} align='center'>Vague {'>'}12 Hours <br></br>{row.vagueGt12 && `(${row.vagueGt12})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('vague2to12', row.vague2to12), color: 'black', borderBottom: 'none' }} align='center'>Vague 2-12 Hours <br></br>{row.vague2to12 && `(${row.vague2to12})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('vagueLt2', row.vagueLt2), color: 'black', borderBottom: 'none' }} align='center'>Vague {'<'}2 Hours <br></br>{row.vagueLt2 && `(${row.vagueLt2})`}</TableCell>
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
                            </Collapse>

                            {/* WEATHER */}
                            <TableRow sx={{ margin: 1 }}>
                                <TableCell sx={{ borderBottom: 'none' }}>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => setWeatherOpen(!weatherOpen)}
                                        sx={{ display: 'inline' }}
                                    >
                                        {weatherOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Weather: {row.weatherMitigatedRisk}</Typography>
                                </TableCell>
                            </TableRow>
                            <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
                                <TableRow key='ceilingsHeader' >
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Ceilings, Visibility, & Lunar</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='ceilingsRow' style={{ width: '100%' }}>
                                    <TableCell sx={{ background: determineHighestRisk('gt1000', row.gt1000), color: 'black', borderBottom: 'none' }} align='center'>Greater than 1000'<br></br>{row.gt1000 && `(${row.gt1000})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt1000', row.lt1000), color: 'black', borderBottom: 'none' }} align='center'>Less than 1000' <br></br>{row.lt1000 && `(${row.lt1000})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt700', row.lt700), color: 'black', borderBottom: 'none' }} align='center'>Less than 700' <br></br>{row.lt700 && `(${row.lt700})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt500', row.lt500), color: 'black', borderBottom: 'none' }} align='center'>Less than 500' <br></br>{row.lt500 && `(${row.lt500})`}</TableCell>
                                </TableRow>
                                <TableRow key='visibilityRow' style={{ width: '100%' }}>
                                    <TableCell sx={{ background: determineHighestRisk('gt3', row.gt3), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 3 SM <br></br>{row.gt3 && `(${row.gt3})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gt2', row.gt2), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 2 SM <br></br>{row.gt2 && `(${row.gt2})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gt1', row.gt1), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 1 SM <br></br>{row.gt1 && `(${row.gt1})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt1', row.lt1), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Less than 1 SM <br></br>{row.lt1 && `(${row.lt1})`}</TableCell>
                                </TableRow>
                                <TableRow key='LunarData' style={{ width: '100%' }}>
                                    {row.gt25IllumAndgt30degrees && <TableCell colSpan={4} sx={{ background: lowRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'>'} 25% and 30°</TableCell>}
                                    {row.lt25IllumAndlt30degrees && <TableCell colSpan={4} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'<'} 25% and 30°</TableCell>}
                                    {row.gt25IllumAndgt30degreesLimitedLighting && <TableCell colSpan={4} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'<'} 25% and 30° (Limited Lighting)</TableCell>}
                                </TableRow>
                                <TableRow key='hazardsHeader'>
                                    <TableCell colSpan={10} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Weather Hazards</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='firstHazardRow'>
                                    <TableCell sx={{ background: determineHighestRisk('windGt30', row.windGt30), color: 'black', borderBottom: 'none' }} align='center'>Wind {'>'} 30 Knots<br></br>{row.windGt30 && `(${row.windGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('windGt30Hoist', row.windGt30Hoist), color: 'black', borderBottom: 'none' }} align='center'>Wind {'>'} 30 Knots {'(Sling/Hoist)'}<br></br>{row.windGt30Hoist && `(${row.windGt30Hoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gustSpreadGt20', row.gustSpreadGt20), color: 'black', borderBottom: 'none' }} align='center'>Gusts {'>'} 20 Knots <br></br>{row.gustSpreadGt20 && `(${row.gustSpreadGt20})`}</TableCell>
                                </TableRow>
                                <TableRow colSpan={100} key='secondHazardRow'>
                                    <TableCell sx={{ background: determineHighestRisk('forecastThunderstorms', row.forecastThunderstorms), color: 'black', borderBottom: 'none' }} align='center'>Forecast Thunderstorms<br></br>{row.forecastThunderstorms && `(${row.forecastThunderstorms})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('modTurbulenceIcing', row.modTurbulenceIcing), color: 'black', borderBottom: 'none' }} align='center'>Forecast Moderate Turbulence or Icing <br></br>{row.modTurbulenceIcing && `(${row.modTurbulenceIcing})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('oatNegative10Positive30', row.oatNegative10Positive30), color: 'black', borderBottom: 'none' }} align='center'>OAT {'<'}-10°C or {'>'}35°C <br></br>{row.oatNegative10Positive30 && `(${row.oatNegative10Positive30})`}</TableCell>
                                </TableRow>

                                {row.altRequired &&
                                    <TableRow key='AltRequied'>
                                        <TableCell sx={{ background: moderateRisk }} align='center'>Alternate Required: Yes</TableCell>
                                    </TableRow>
                                }
                                <TableRow key='WeatherHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Weather Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='WeatherRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.weatherRiskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='WeatherRisk'>
                                    <TableCell colSpan={2} align="left">Initial Risk: {row.weatherInitialRisk}</TableCell>
                                    <TableCell colSpan={2} align="left">Mitigated Risk: {row.weatherMitigatedRisk}</TableCell>
                                </TableRow>
                            </Collapse>

                            {/* Final Risk */}
                            <TableRow sx={{ margin: 1 }}>
                                <TableCell sx={{ borderBottom: 'none' }}>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => setFinalRiskOpen(!finalRiskOpen)}
                                        sx={{ display: 'inline' }}
                                    >
                                        {finalRiskOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Final: {row.finalMitigatedRisk}</Typography>
                                </TableCell>

                            </TableRow>
                            <Collapse in={finalRiskOpen} timeout="auto" unmountOnExit>
                                <TableRow key='riskAssessmentHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Risk Assessment</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='greatestRisk'>
                                    <TableCell colSpan={5} component="th" scope="row">Greatest Risk: {row.greatestRisk}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.finalRiskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='brieferHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Briefer</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='Briefer'>
                                    <TableCell component="th" scope="row">Briefer: {row.briefer}</TableCell>
                                    <TableCell>Comment Date: {row.brieferCommentDate}</TableCell>
                                </TableRow>
                                <TableRow key='BrieferComment'>
                                    <TableCell colSpan={3} component="th" scope="row">Briefer Comments: {row.brieferComment}</TableCell>
                                </TableRow>
                                <TableRow key='approverHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Approver</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='Approver'>
                                    <TableCell component="th" scope="row">Approver: {row.approver}</TableCell>
                                    <TableCell>Comment Date: {row.approverCommentDate}</TableCell>
                                </TableRow>
                                <TableRow key='ApproverComment'>
                                    <TableCell colSpan={3} component="th" scope="row">Approver Comments: {row.approverComment}</TableCell>
                                </TableRow>
                                <TableRow key='finalHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Final Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='MissionRisk'>
                                    <TableCell sx={{ borderBottom: 'none' }} align="left">Initial Risk: {row.initialRisk}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="left">Residual Mission Risk: {row.finalMitigatedRisk}</TableCell>
                                </TableRow>
                            </Collapse>
                        </Collapse>
                    </TableCell >
                </TableRow >
            </React.Fragment >
        );
    }

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell sx={{ paddingLeft: '0' }} >Date</TableCell>
                            <TableCell sx={{ paddingLeft: '0' }} align="left">Mission</TableCell>
                            <TableCell sx={{ paddingLeft: '0' }} align="left">Risk</TableCell>
                            <TableCell sx={{ paddingLeft: '0' }} align="left">Pilot</TableCell>
                            <TableCell sx={{ paddingLeft: '0' }} align="left">Briefer</TableCell>
                            <TableCell sx={{ paddingLeft: '0' }} align="left">Approver</TableCell>
                            <TableCell sx={{ paddingLeft: '0' }} align="left">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flights.map((flight) => (
                            <Row key={`${flight.pc} - ${flight.date}`} row={flight} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}
