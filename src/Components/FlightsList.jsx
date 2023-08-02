
import * as React from 'react';
// import { useEffect } from 'react';
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
import flights from '../seederData';
import risks from '../seederRisk';
import './FlightsList.css';


export default function Body({ drawerWidth }) {

    const [lowRisk, moderateRisk, highRisk] = ['#8CD47E', '#F8D66D', '#FF6961']
    const aircrewMemberRiskColor = (hours, pilot) => {
        if (pilot && hours > 500) {
            return lowRisk; // If hours is greater than 500, return green color
        } else if (pilot && hours > 100) {
            return moderateRisk; // If hours is greater than 100, return yellow color
        } else if (!pilot && hours > 150) {
            return lowRisk; // If hours is greater than 500, return green color
        } else {
            return highRisk; // Default case for hours less than or equal to 100, return red color
        }
    };

    const determineHighestRisk = (task, flightModes) => {
        if (!flightModes) {
            return '#424242'
        }
        // Initialize the highestRisk variable with the value of lowRisk
        let highestRisk = lowRisk;
        // Iterate over each riskLevel in the risks object
        for (const riskLevel in risks) {
            // Iterate over each mode in the risks[riskLevel] object
            for (const mode in risks[riskLevel]) {
                // Check if the flightModes array includes the current mode and if the nested risks[riskLevel][mode] array includes the task
                if (flightModes.includes(mode) && risks[riskLevel][mode].includes(task)) {
                    // Update the highestRisk variable with the current riskLevel
                    highestRisk = riskLevel;
                    break;
                }
            }
        }

        // Check the value of highestRisk using a switch statement and return the corresponding risk level
        switch (highestRisk) {
            case 'lowRisk':
                return lowRisk;
            case 'moderateRisk':
                return moderateRisk;
            case 'highRisk':
                return highRisk;
        }
    };


    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const [crewOpen, setCrewOpen] = React.useState(false);
        const [missionOpen, setMissionOpen] = React.useState(false);
        const [missionTaskGroupOpen, setMissionTaskGroupOpen] = React.useState(false);
        const [weatherOpen, setWeatherOpen] = React.useState(false);
        const [finalRiskOpen, setFinalRiskOpen] = React.useState(false);

        const { missionConsiderations, terrainConsiderations, powerConsiderations, trainingConsiderations, recencyOfMission, missionPlanningTime } = row.missionComplexity
        const { lunar, weatherHazards, IFR, visibilityCeilings, risk } = row.weather
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
                    <TableCell size="small" sx={{ padding: '0' }} component="th" scope="row" align="left">{row.flightInfo5484.date}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.flightInfo5484.mission}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.overallRisk.residualRisk}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.flightInfo5484.pc}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.approval.briefer}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.approval.approver}</TableCell>
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
                                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Aircrew: {row.crewData.risk.mitigatedRisk}</Typography>
                                </TableCell>

                            </TableRow>
                            <Collapse in={crewOpen} timeout="auto" unmountOnExit>
                                <TableRow key='AircrewNames'>
                                    <TableCell sx={{ borderBottom: 'none' }} component="th" scope="row" align="center">PC: {row.flightInfo5484.pc}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">PI: {row.flightInfo5484.pi}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.flightInfo5484.nrcm1}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.flightInfo5484.nrcm2}</TableCell>
                                    {row.flightInfo5484.nrcm3 && <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.flightInfo5484.nrcm3}</TableCell>}
                                </TableRow>
                                <TableRow key='AircrewHours'>
                                    <TableCell sx={{ borderBottom: 'none', borderRadius: '10px 0 0 10px', color: 'black', bgcolor: aircrewMemberRiskColor(row.crewData.experience.pcHoursTotal, true) }} component="th" scope="row" align="center">({row.crewData.experience.pcHoursTotal} All / {row.crewData.experience.pcHoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.crewData.experience.piHoursTotal, true) }} align="center">({row.crewData.experience.piHoursTotal} All / {row.crewData.experience.piHoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.crewData.experience.nrcm1HoursTotal, false) }} align="center">({row.crewData.experience.nrcm1HoursTotal} All / {row.crewData.experience.nrcm1HoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', borderRadius: !row.flightInfo5484.nrcm3 && '0 10px 10px 0', color: 'black', bgcolor: aircrewMemberRiskColor(row.crewData.experience.nrcm2HoursTotal, false) }} align="center">({row.crewData.experience.nrcm2HoursTotal} All / {row.crewData.experience.nrcm2HoursNG} NG)</TableCell>
                                    {row.flightInfo5484.nrcm3 && <TableCell sx={{ borderBottom: 'none', color: 'black', borderRadius: '0 10px 10px 0', bgcolor: aircrewMemberRiskColor(row.crewData.experience.nrcm3HoursTotal, false) }} align="center">({row.crewData.experience.nrcm3HoursTotal} All / {row.crewData.experience.nrcm3HoursNG} NG)</TableCell>}
                                </TableRow>
                                <TableRow key='spacer'>
                                    <TableCell colSpan={5} component="th" scope="row"> </TableCell>
                                </TableRow>
                                <TableRow key='RiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.crewData.risk.riskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='FlightRisks'>
                                    <TableCell colSpan={2} component="th" scope="row">Initial Risk: {row.crewData.risk.initialRisk}</TableCell>
                                    <TableCell colSpan={2} align="left">Mitigated Risk: {row.crewData.risk.mitigatedRisk}</TableCell>
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
                                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Mission: {row.missionComplexity.risk.mitigatedRisk}</Typography>
                                </TableCell>

                            </TableRow>
                            <Collapse in={missionOpen} timeout="auto" unmountOnExit>
                                <TableRow key='MissionStatement'>
                                    <TableCell colSpan={4} component="th" scope="row">Mission Statement: {row.flightInfo5484.missionStatement}</TableCell>
                                </TableRow>
                                <TableRow key='MissionInfo'>
                                    <TableCell component="th" scope="row">Mission: {row.flightInfo5484.mission}</TableCell>
                                    <TableCell colSpan={2}>Flight Conditions: {row.flightInfo5484.flightConditions}</TableCell>
                                    <TableCell>ETD: {row.flightInfo5484.etd}</TableCell>
                                </TableRow>
                                <TableRow key='AircraftInfo'>
                                    <TableCell>Route: {row.flightInfo5484.route}</TableCell>
                                    <TableCell align="left">Aircraft Type: {row.flightInfo5484.aircraftType}</TableCell>
                                    <TableCell align="left">Aircraft Tail: {row.flightInfo5484.aircraftTail}</TableCell>
                                    <TableCell>ETE: {row.flightInfo5484.ete}</TableCell>
                                </TableRow>
                                {/* Missions */}
                                <TableRow key='mssionHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>
                                            {/* <IconButton
                                                aria-label="expand row"
                                                size="small"
                                                onClick={() => setMissionTaskGroupOpen(!missionTaskGroupOpen)}
                                                sx={{ display: 'inline' }}
                                            >
                                                {missionTaskGroupOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton> */}
                                            Mission Tasks</Typography>
                                    </TableCell>
                                </TableRow>
                                {/* <Collapse sx={ }} in={missionTaskGroupOpen} timeout="auto" unmountOnExit> */}
                                <TableRow key='exampleRow'>
                                    <TableCell sx={{ background: lowRisk, color: 'black', borderBottom: 'none' }} align='center'>Low Risk</TableCell>
                                    <TableCell colSpan={2} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Moderate Risk</TableCell>
                                    <TableCell sx={{ background: highRisk, color: 'black', borderBottom: 'none' }} align='center'>High Risk</TableCell>
                                </TableRow>
                                <TableRow key='firstMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('airAssault', missionConsiderations.airAssault), color: 'black', borderBottom: 'none' }} align='center'>Air Assault <br></br>{missionConsiderations.airAssault && `(${missionConsiderations.airAssault})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('AH64AttackReconSecurity', missionConsiderations.AH64AttackReconSecurity), color: 'black', borderBottom: 'none' }} align='center'>AH64 Attack/Recon <br></br>{missionConsiderations.AH64AttackReconSecurity && `(${missionConsiderations.AH64AttackReconSecurity})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('medevacCasevac', missionConsiderations.medevacCasevac), color: 'black', borderBottom: 'none' }} align='center'>MEDEVAC/CASEVAC <br></br>{missionConsiderations.medevacCasevac && `(${missionConsiderations.medevacCasevac})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('multiship', missionConsiderations.multiship), color: 'black', borderBottom: 'none' }} align='center'>Multiship <br></br>{missionConsiderations.multiship && `(${missionConsiderations.multiship})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('mixedMultiShip', missionConsiderations.mixedMultiShip), color: 'black', borderBottom: 'none' }} align='center'>Mixed Multiship <br></br>{missionConsiderations.mixedMultiShip && `(${missionConsiderations.mixedMultiShip})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('dartOneTimeFlight', missionConsiderations.dartOneTimeFlight), color: 'black', borderBottom: 'none' }} align='center'>DART/One Time Flight <br></br>{missionConsiderations.dartOneTimeFlight && `(${missionConsiderations.dartOneTimeFlight})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('MTFGeneralTraining', missionConsiderations.MTFGeneralTraining), color: 'black', borderBottom: 'none' }} align='center'>MTF <br></br>{missionConsiderations.MTFGeneralTraining && `(${missionConsiderations.MTFGeneralTraining})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('blackout', missionConsiderations.blackout), color: 'black', borderBottom: 'none' }} align='center'>Blackout Operations <br></br>{missionConsiderations.blackout && `(${missionConsiderations.blackout})`}</TableCell>
                                </TableRow>
                                <TableRow key='thirdMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('waterBucket', missionConsiderations.waterBucket), color: 'black', borderBottom: 'none' }} align='center'>Water Bucket <br></br>{missionConsiderations.waterBucket && `(${missionConsiderations.waterBucket})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('paradrops', missionConsiderations.paradrops), color: 'black', borderBottom: 'none' }} align='center'>Paradrops <br></br>{missionConsiderations.paradrops && `(${missionConsiderations.paradrops})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('rappelSpiesFries', missionConsiderations.rappelSpiesFries), color: 'black', borderBottom: 'none' }} align='center'>SPIES/FRIES <br></br>{missionConsiderations.rappelSpiesFries && `(${missionConsiderations.rappelSpiesFries})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('externalLoads', missionConsiderations.externalLoads), color: 'black', borderBottom: 'none' }} align='center'>External Loads <br></br>{missionConsiderations.externalLoads && `(${missionConsiderations.externalLoads})`}</TableCell>
                                </TableRow>
                                <TableRow key='fourthMissionRow'>
                                    <TableCell sx={{ background: determineHighestRisk('airmovementVIPContinuation', missionConsiderations.airmovementVIPContinuation), color: 'black', borderBottom: 'none' }} align='center'>Air Movement <br></br>{missionConsiderations.airmovementVIPContinuation && `(${missionConsiderations.airmovementVIPContinuation})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('airmovementVIPContinuation', missionConsiderations.airmovementVIPContinuation), color: 'black', borderBottom: 'none' }} align='center'>Continuation Training <br></br>{missionConsiderations.airmovementVIPContinuation && `(${missionConsiderations.airmovementVIPContinuation})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CEFS', missionConsiderations.CEFS), color: 'black', borderBottom: 'none' }} align='center'>CEFS <br></br>{missionConsiderations.CEFS && `(${missionConsiderations.CEFS})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('fatCow', missionConsiderations.fatCow), color: 'black', borderBottom: 'none' }} align='center'>Fat Cow <br></br>{missionConsiderations.fatCow && `(${missionConsiderations.fatCow})`}</TableCell>
                                </TableRow>
                                <TableRow key='firstTrainingRow'>
                                    <TableCell sx={{ background: determineHighestRisk('progessionEvaluationEPs', trainingConsiderations.progessionEvaluationEPs), color: 'black', borderBottom: 'none' }} align='center'>Prog/Eval/EP <br></br>{trainingConsiderations.progessionEvaluationEPs && `(${trainingConsiderations.progessionEvaluationEPs})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IFRSimulatedIMC', trainingConsiderations.IFRSimulatedIMC), color: 'black', borderBottom: 'none' }} align='center'>IFR/Simulated IMC <br></br>{trainingConsiderations.IFRSimulatedIMC && `(${trainingConsiderations.IFRSimulatedIMC})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CBRNE', trainingConsiderations.CBRNE), color: 'black', borderBottom: 'none' }} align='center'>CBRNE <br></br>{trainingConsiderations.CBRNE && `(${trainingConsiderations.CBRNE})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('combatManueveringFlight', trainingConsiderations.combatManueveringFlight), color: 'black', borderBottom: 'none' }} align='center'>Combat Man. Flight <br></br>{trainingConsiderations.combatManueveringFlight && `(${trainingConsiderations.combatManueveringFlight})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondTrainingRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nonLiveHoist', trainingConsiderations.nonLiveHoist), color: 'black', borderBottom: 'none' }} align='center'>Non Live Hoist <br></br>{trainingConsiderations.nonLiveHoist && `(${trainingConsiderations.nonLiveHoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('liveHoist', trainingConsiderations.liveHoist), color: 'black', borderBottom: 'none' }} align='center'>Live Hoist <br></br>{trainingConsiderations.liveHoist && `(${trainingConsiderations.liveHoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gunneryLiveFire', trainingConsiderations.gunneryLiveFire), color: 'black', borderBottom: 'none' }} align='center'>Gunnery/Live Fire <br></br>{trainingConsiderations.gunneryLiveFire && `(${trainingConsiderations.gunneryLiveFire})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('CALFEX', trainingConsiderations.CALFEX), color: 'black', borderBottom: 'none' }} align='center'>CALFEX <br></br>{trainingConsiderations.CALFEX && `(${trainingConsiderations.CALFEX})`}</TableCell>
                                </TableRow>
                                <TableRow key='firstTerrainRow'>
                                    <TableCell sx={{ background: determineHighestRisk('terrainFlight', terrainConsiderations.terrainFlight), color: 'black', borderBottom: 'none' }} align='center'>Terrain Flight <br></br>{terrainConsiderations.terrainFlight && `(${terrainConsiderations.terrainFlight})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('mountainOperations', terrainConsiderations.mountainOperations), color: 'black', borderBottom: 'none' }} align='center'>Mountain Operations <br></br>{terrainConsiderations.mountainOperations && `(${terrainConsiderations.mountainOperations})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('overwaterOperations', terrainConsiderations.overwaterOperations), color: 'black', borderBottom: 'none' }} align='center'>Overwater Operations <br></br>{terrainConsiderations.overwaterOperations && `(${terrainConsiderations.overwaterOperations})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('pinnacleOperations', terrainConsiderations.pinnacleOperations), color: 'black', borderBottom: 'none' }} align='center'>Pinnacle Operations <br></br>{terrainConsiderations.pinnacleOperations && `(${terrainConsiderations.pinnacleOperations})`}</TableCell>
                                </TableRow>
                                <TableRow key='secondTerrainRow'>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('urbanOperations', terrainConsiderations.urbanOperations), color: 'black', borderBottom: 'none' }} align='center'>Urban Operations <br></br>{terrainConsiderations.urbanOperations && `(${terrainConsiderations.urbanOperations})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('confinedOperations', terrainConsiderations.confinedOperations), color: 'black', borderBottom: 'none' }} align='center'>Confined Operations <br></br>{terrainConsiderations.confinedOperations && `(${terrainConsiderations.confinedOperations})`}</TableCell>
                                </TableRow>
                                {/* </Collapse> */}
                                <TableRow key='powerHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Power Considerations</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='powerConsiderationsRow'>
                                    <TableCell sx={{ background: determineHighestRisk('OGEwithin10', powerConsiderations.OGEwithin10), color: 'black', borderBottom: 'none' }} align='center'>OGE w/in 10% of MTA <br></br>{powerConsiderations.OGEwithin10 && `(${powerConsiderations.OGEwithin10})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IGEwithin10', powerConsiderations.IGEwithin10), color: 'black', borderBottom: 'none' }} align='center'>IGE w/in 10% of MTA <br></br>{powerConsiderations.IGEwithin10 && `(${powerConsiderations.IGEwithin10})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('OGEwithin5', powerConsiderations.OGEwithin5), color: 'black', borderBottom: 'none' }} align='center'>OGE w/in 5% of MTA <br></br>{powerConsiderations.OGEwithin5 && `(${powerConsiderations.OGEwithin5})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('IGEwithin5', powerConsiderations.IGEwithin5), color: 'black', borderBottom: 'none' }} align='center'>IGE w/in 5% of MTA <br></br>{powerConsiderations.IGEwithin5 && `(${powerConsiderations.IGEwithin5})`}</TableCell>
                                </TableRow>
                                <TableRow key='recencyHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Task Recency</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='pcRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('pcGt30', recencyOfMission.pcGt30), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}30 Days <br></br>{recencyOfMission.pcGt30 && `(${recencyOfMission.pcGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('pcGt60', recencyOfMission.pcGt60), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}60 Days <br></br>{recencyOfMission.pcGt60 && `(${recencyOfMission.pcGt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('pcGt90', recencyOfMission.pcGt90), color: 'black', borderBottom: 'none' }} align='center'>PC {'>'}90 Days <br></br>{recencyOfMission.pcGt90 && `(${recencyOfMission.pcGt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='piRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('piGt30', recencyOfMission.piGt30), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}30 Days <br></br>{recencyOfMission.piGt30 && `(${recencyOfMission.piGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('piGt60', recencyOfMission.piGt60), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}60 Days <br></br>{recencyOfMission.piGt60 && `(${recencyOfMission.piGt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('piGt90', recencyOfMission.piGt90), color: 'black', borderBottom: 'none' }} align='center'>PI {'>'}90 Days <br></br>{recencyOfMission.piGt90 && `(${recencyOfMission.piGt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='nrcm1RecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm1Gt30', recencyOfMission.nrcm1Gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}30 Days <br></br>{recencyOfMission.nrcm1Gt30 && `(${recencyOfMission.nrcm1Gt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm1Gt60', recencyOfMission.nrcm1Gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}60 Days <br></br>{recencyOfMission.nrcm1Gt60 && `(${recencyOfMission.nrcm1Gt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm1Gt90', recencyOfMission.nrcm1Gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 1 {'>'}90 Days <br></br>{recencyOfMission.nrcm1Gt90 && `(${recencyOfMission.nrcm1Gt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='nrcm2RecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm2Gt30', recencyOfMission.nrcm2Gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}30 Days <br></br>{recencyOfMission.nrcm2Gt30 && `(${recencyOfMission.nrcm2Gt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm2Gt60', recencyOfMission.nrcm2Gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}60 Days <br></br>{recencyOfMission.nrcm2Gt60 && `(${recencyOfMission.nrcm2Gt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('nrcm2Gt90', recencyOfMission.nrcm2Gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 2 {'>'}90 Days <br></br>{recencyOfMission.nrcm2Gt90 && `(${recencyOfMission.nrcm2Gt90})`}</TableCell>
                                </TableRow>
                                {
                                    row.flightInfo5484.nrcm3 &&
                                    <TableRow key='nrcm3RecencyRow'>
                                        <TableCell sx={{ background: determineHighestRisk('nrcm3Gt30', recencyOfMission.nrcm3Gt30), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}30 Days <br></br>{recencyOfMission.nrcm3Gt30 && `(${recencyOfMission.nrcm3Gt30})`}</TableCell>
                                        <TableCell colSpan={2} sx={{ background: determineHighestRisk('nrcm3Gt60', recencyOfMission.nrcm3Gt60), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}60 Days <br></br>{recencyOfMission.nrcm3Gt60 && `(${recencyOfMission.nrcm3Gt60})`}</TableCell>
                                        <TableCell sx={{ background: determineHighestRisk('nrcm3Gt90', recencyOfMission.nrcm3Gt90), color: 'black', borderBottom: 'none' }} align='center'>NRCM 3 {'>'}90 Days <br></br>{recencyOfMission.nrcm3Gt90 && `(${recencyOfMission.nrcm3Gt90})`}</TableCell>
                                    </TableRow>
                                }
                                <TableRow key='hoistRecencyRow'>
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt30', recencyOfMission.hoistGt30), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}30 Days <br></br>{recencyOfMission.hoistGt30 && `(${recencyOfMission.hoistGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('hoistGt60', recencyOfMission.hoistGt60), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}60 Days <br></br>{recencyOfMission.hoistGt60 && `(${recencyOfMission.hoistGt60})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('hoistGt90', recencyOfMission.hoistGt90), color: 'black', borderBottom: 'none' }} align='center'>Hoist {'>'}90 Days <br></br>{recencyOfMission.hoistGt90 && `(${recencyOfMission.hoistGt90})`}</TableCell>
                                </TableRow>
                                <TableRow key='planningHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Planning Timeline</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='specificPlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('specificGt12', missionPlanningTime.specificGt12), color: 'black', borderBottom: 'none' }} align='center'>Specific {'>'}12 Hours <br></br>{missionPlanningTime.specificGt12 && `(${missionPlanningTime.specificGt12})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('specific2to12', missionPlanningTime.specific2to12), color: 'black', borderBottom: 'none' }} align='center'>Specific 2-12 Hours <br></br>{missionPlanningTime.specific2to12 && `(${missionPlanningTime.specific2to12})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('specificLt2', missionPlanningTime.specificLt2), color: 'black', borderBottom: 'none' }} align='center'>Specific {'<'}2 Hours <br></br>{missionPlanningTime.specificLt2 && `(${missionPlanningTime.specificLt2})`}</TableCell>
                                </TableRow>
                                <TableRow key='vaguePlanningRow'>
                                    <TableCell sx={{ background: determineHighestRisk('vagueGt12', missionPlanningTime.vagueGt12), color: 'black', borderBottom: 'none' }} align='center'>Vague {'>'}12 Hours <br></br>{missionPlanningTime.vagueGt12 && `(${missionPlanningTime.vagueGt12})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('vague2to12', missionPlanningTime.vague2to12), color: 'black', borderBottom: 'none' }} align='center'>Vague 2-12 Hours <br></br>{missionPlanningTime.vague2to12 && `(${missionPlanningTime.vague2to12})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('vagueLt2', missionPlanningTime.vagueLt2), color: 'black', borderBottom: 'none' }} align='center'>Vague {'<'}2 Hours <br></br>{missionPlanningTime.vagueLt2 && `(${missionPlanningTime.vagueLt2})`}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.missionComplexity.risk.riskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRisk'>
                                    <TableCell colSpan={2} align="left">Initial Risk: {row.missionComplexity.risk.initialRisk}</TableCell>
                                    <TableCell colSpan={2} align="left">Mitigated Risk: {row.missionComplexity.risk.mitigatedRisk}</TableCell>
                                </TableRow>
                            </Collapse>

                            {/* try to fix the width of the Weather header to increase   */}
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
                                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Weather: {risk.mitigatedRisk}</Typography>
                                </TableCell>
                            </TableRow>
                            <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
                                <TableRow key='ceilingsHeader' >
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Ceilings, Visibility, & Lunar</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='ceilingsRow' style={{ width: '100%' }}>
                                    <TableCell sx={{ background: determineHighestRisk('gt1000', visibilityCeilings.gt1000), color: 'black', borderBottom: 'none' }} align='center'>Greater than 1000'<br></br>{visibilityCeilings.gt1000 && `(${visibilityCeilings.gt1000})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt1000', visibilityCeilings.lt1000), color: 'black', borderBottom: 'none' }} align='center'>Less than 1000' <br></br>{visibilityCeilings.lt1000 && `(${visibilityCeilings.lt1000})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt700', visibilityCeilings.lt700), color: 'black', borderBottom: 'none' }} align='center'>Less than 700' <br></br>{visibilityCeilings.lt700 && `(${visibilityCeilings.lt700})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt500', visibilityCeilings.lt500), color: 'black', borderBottom: 'none' }} align='center'>Less than 500' <br></br>{visibilityCeilings.lt500 && `(${visibilityCeilings.lt500})`}</TableCell>
                                </TableRow>
                                <TableRow key='visibilityRow' style={{ width: '100%' }}>
                                    <TableCell sx={{ background: determineHighestRisk('gt3', visibilityCeilings.gt3), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 3 SM <br></br>{visibilityCeilings.gt3 && `(${visibilityCeilings.gt3})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gt2', visibilityCeilings.gt2), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 2 SM <br></br>{visibilityCeilings.gt2 && `(${visibilityCeilings.gt2})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gt1', visibilityCeilings.gt1), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 1 SM <br></br>{visibilityCeilings.gt1 && `(${visibilityCeilings.gt1})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('lt1', visibilityCeilings.lt1), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Less than 1 SM <br></br>{visibilityCeilings.lt1 && `(${visibilityCeilings.lt1})`}</TableCell>
                                </TableRow>
                                <TableRow key='LunarData' style={{ width: '100%' }}>
                                    {lunar.gt25IllumAndgt30degrees && <TableCell colSpan={4} sx={{ background: lowRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'>'} 25% and 30°</TableCell>}
                                    {lunar.lt25IllumAndlt30degrees && <TableCell colSpan={4} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'<'} 25% and 30°</TableCell>}
                                    {lunar.gt25IllumAndgt30degreesLimitedLighting && <TableCell colSpan={4} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'<'} 25% and 30° (Limited Lighting)</TableCell>}
                                </TableRow>
                                <TableRow key='hazardsHeader'>
                                    <TableCell colSpan={10} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Weather Hazards</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='firstHazardRow'>
                                    <TableCell sx={{ background: determineHighestRisk('windGt30', weatherHazards.windGt30), color: 'black', borderBottom: 'none' }} align='center'>Wind {'>'} 30 Knots<br></br>{weatherHazards.windGt30 && `(${weatherHazards.windGt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('windGt30Hoist', weatherHazards.windGt30Hoist), color: 'black', borderBottom: 'none' }} align='center'>Wind {'>'} 30 Knots {'(Sling/Hoist)'}<br></br>{weatherHazards.windGt30Hoist && `(${weatherHazards.windGt30Hoist})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('gustSpreadGt20', weatherHazards.gustSpreadGt20), color: 'black', borderBottom: 'none' }} align='center'>Gusts {'>'} 20 Knots <br></br>{weatherHazards.gustSpreadGt20 && `(${weatherHazards.gustSpreadGt20})`}</TableCell>
                                </TableRow>
                                <TableRow colSpan={100} key='secondHazardRow'>
                                    <TableCell sx={{ background: determineHighestRisk('forecastThunderstorms', weatherHazards.forecastThunderstorms), color: 'black', borderBottom: 'none' }} align='center'>Forecast Thunderstorms<br></br>{weatherHazards.forecastThunderstorms && `(${weatherHazards.forecastThunderstorms})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: determineHighestRisk('modTurbulenceIcing', weatherHazards.modTurbulenceIcing), color: 'black', borderBottom: 'none' }} align='center'>Forecast Moderate Turbulence or Icing <br></br>{weatherHazards.modTurbulenceIcing && `(${weatherHazards.modTurbulenceIcing})`}</TableCell>
                                    <TableCell sx={{ background: determineHighestRisk('oatNegative10Positive30', weatherHazards.oatNegative10Positive30), color: 'black', borderBottom: 'none' }} align='center'>OAT {'<'}-10°C or {'>'}35°C <br></br>{weatherHazards.oatNegative10Positive30 && `(${weatherHazards.oatNegative10Positive30})`}</TableCell>
                                </TableRow>

                                {IFR.altRequired &&
                                    <TableRow key='AltRequied'>
                                        <TableCell sx={{ background: moderateRisk }} align='center'>Alternate Required: Yes</TableCell>
                                    </TableRow>
                                }
                                <TableRow key='MissionRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {risk.riskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRisk'>
                                    <TableCell colSpan={2} align="left">Initial Risk: {risk.initialRisk}</TableCell>
                                    <TableCell colSpan={2} align="left">Mitigated Risk: {risk.mitigatedRisk}</TableCell>
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
                                    <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Final: {row.overallRisk.residualRisk}</Typography>
                                </TableCell>

                            </TableRow>
                            <Collapse in={finalRiskOpen} timeout="auto" unmountOnExit>
                                <TableRow key='riskAssessmentHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Risk Assessment</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='greatestRisk'>
                                    <TableCell colSpan={5} component="th" scope="row">Greatest Risk: {row.overallRisk.greatestRisk}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.overallRisk.riskMitigation}</TableCell>
                                </TableRow>
                                <TableRow key='brieferHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Briefer</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='Briefer'>
                                    <TableCell component="th" scope="row">Briefer: {row.approval.briefer}</TableCell>
                                    <TableCell>Comment Date: {row.approval.brieferCommentDate}</TableCell>
                                </TableRow>
                                <TableRow key='BrieferComment'>
                                    <TableCell colSpan={3} component="th" scope="row">Briefer Comments: {row.approval.brieferComment}</TableCell>
                                </TableRow>
                                <TableRow key='approverHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Approver</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='Approver'>
                                    <TableCell component="th" scope="row">Approver: {row.approval.approver}</TableCell>
                                    <TableCell>Comment Date: {row.approval.approverCommentDate}</TableCell>
                                </TableRow>
                                <TableRow key='ApproverComment'>
                                    <TableCell colSpan={3} component="th" scope="row">Approver Comments: {row.approval.approverComment}</TableCell>
                                </TableRow>
                                <TableRow key='finalHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Final Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='MissionRisk'>
                                    <TableCell sx={{ borderBottom: 'none' }} align="left">Initial Risk: {row.overallRisk.initialRisk}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="left">Residual Mission Risk: {row.overallRisk.residualRisk}</TableCell>
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
                            <Row key={flight.flightInfo5484.pc} row={flight} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}
