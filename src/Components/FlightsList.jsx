
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
import flights from '../seederData';
import risks from '../seederRisk';
import './FlightsList.css';


export default function Body({ drawerWidth }) {

    const [lowRisk, moderateRisk, highRisk] = ['#8CD47E', '#F8D66D', '#FF6961']
    const [day, night, ng] = ['rgba(201, 235, 255, 1)', 'rgba(163, 124, 64, 1)', 'rgba(2, 0, 36, 1)'];
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
        const [open, setOpen] = React.useState(true);
        const [crewOpen, setCrewOpen] = React.useState(false);
        const [missionOpen, setMissionOpen] = React.useState(true);
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
                    <TableCell size="small" sx={{ padding: '0' }} component="th" scope="row" align="left">{row.flightInfo5484.date}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.flightInfo5484.mission}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.overallRisk.residualRisk}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.flightInfo5484.pc}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.approval.briefer}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }} align="left">{row.approval.approver}</TableCell>
                    <TableCell size="small" sx={{ padding: '0' }}> <Button sx={{ margin: '20px 0' }} variant="contained" color="inherit">Edit RCOP</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0, width: '100%' }} colSpan={12}>
                        <Collapse in={open} timeout="auto" unmountOnExit>

                            {/* AIRCREW */}
                            <Box sx={{ margin: 1 }}>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setCrewOpen(!crewOpen)}
                                    sx={{ display: 'inline' }}
                                >
                                    {crewOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Aircrew: {row.crewData.risk.mitigatedRisk}</Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
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
                                                <TableCell component="th" scope="row">Initial Risk: {row.crewData.risk.initialRisk}</TableCell>
                                                <TableCell align="left">Mitigated Risk: {row.crewData.risk.mitigatedRisk}</TableCell>
                                            </TableRow>
                                        </Collapse>
                                    </TableBody>
                                </Table>
                            </Box>

                            {/* MISSION */}
                            <Box sx={{ margin: 1 }}>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setMissionOpen(!missionOpen)}
                                    sx={{ display: 'inline' }}
                                >
                                    {missionOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Mission: {row.missionComplexity.risk.mitigatedRisk}</Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        <Collapse in={missionOpen} timeout="auto" unmountOnExit>
                                            <TableRow key='MissionStatement'>
                                                <TableCell colSpan={4} component="th" scope="row">Mission Statement: {row.flightInfo5484.missionStatement}</TableCell>
                                            </TableRow>
                                            <TableRow key='MissionInfo'>
                                                <TableCell component="th" scope="row">Mission: {row.flightInfo5484.mission}</TableCell>
                                                <TableCell>Flight Conditions: {row.flightInfo5484.flightConditions}</TableCell>
                                                <TableCell>ETD: {row.flightInfo5484.etd}</TableCell>
                                                <TableCell>ETE: {row.flightInfo5484.ete}</TableCell>
                                            </TableRow>
                                            <TableRow key='AircraftInfo'>
                                                <TableCell>Route: {row.flightInfo5484.route}</TableCell>
                                                <TableCell align="left">Aircraft Type: {row.flightInfo5484.aircraftType}</TableCell>
                                                <TableCell align="left">Aircraft Tail: {row.flightInfo5484.aircraftTail}</TableCell>
                                            </TableRow>
                                            <Table size="small">
                                                <TableBody>
                                                    <TableRow key='Header'>
                                                        <TableCell colSpan={3} sx={{ borderBottom: 'none' }}> <Typography variant="h6" component="div" align='center'>Mission Tasks</Typography></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                            {/* <TableRow key='space'>
                                                <TableCell sx={{ borderBottom: 'none' }}> </TableCell>
                                            </TableRow> */}
                                            <TableRow key='firstMissionRow'>
                                                <TableCell sx={{ background: determineHighestRisk('multiship', row.missionComplexity.missionConsiderations.multiship), color: 'black', borderBottom: 'none' }} align='center'>Multiship - ({row.missionComplexity.missionConsiderations.multiship})</TableCell>
                                                <TableCell sx={{ background: determineHighestRisk('terrainFlight', row.missionComplexity.terrainConsiderations.terrainFlight), color: 'black', borderBottom: 'none' }} align='center'>Terrain Flight - ({row.missionComplexity.terrainConsiderations.terrainFlight})</TableCell>
                                                <TableCell sx={{ background: determineHighestRisk('hoistLive', row.missionComplexity.trainingConsiderations.hoistLive), color: 'black', borderBottom: 'none' }} align='center'>Live Hoist - ({row.missionComplexity.trainingConsiderations.hoistLive})</TableCell>
                                                <TableCell sx={{ background: determineHighestRisk('confinedAreaOperations', row.missionComplexity.terrainConsiderations.confinedAreaOperations), color: 'black', borderBottom: 'none' }} align='center'>Confined Ops - ({row.missionComplexity.terrainConsiderations.confinedAreaOperations})</TableCell>
                                            </TableRow>
                                            <TableRow key='MissionRiskMitigation'>
                                                <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.missionComplexity.risk.riskMitigation}</TableCell>
                                            </TableRow>
                                            <TableRow key='MissionRisk'>
                                                <TableCell align="left">Initial Risk: {row.missionComplexity.risk.initialRisk}</TableCell>
                                                <TableCell align="left">Mitigated Risk: {row.missionComplexity.risk.mitigatedRisk}</TableCell>
                                            </TableRow>
                                        </Collapse>
                                    </TableBody>
                                </Table>
                            </Box>

                            {/* WEATHER */}
                            <Box sx={{ margin: 1 }}>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setWeatherOpen(!weatherOpen)}
                                    sx={{ display: 'inline' }}
                                >
                                    {weatherOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Weather: {row.weather.risk.mitigatedRisk}</Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
                                            <TableRow key='Ceilings'>
                                                {row.weather.visibilityCeilings.gt1000 && <TableCell component="th" scope="row">Ceilings: Greater than 1000'</TableCell>}
                                                {row.weather.visibilityCeilings.lt1000 && <TableCell component="th" scope="row">Ceilings: Less than 1000'</TableCell>}
                                                {row.weather.visibilityCeilings.lt700 && <TableCell component="th" scope="row">Ceilings: Less than 700'</TableCell>}
                                                {row.weather.visibilityCeilings.gt3 && <TableCell component="th" scope="row">Visibility: Greater than 3 SM</TableCell>}
                                                {row.weather.visibilityCeilings.gt2 && <TableCell component="th" scope="row">Visibility: Greater than 2 SM</TableCell>}
                                                {row.weather.visibilityCeilings.gt1 && <TableCell component="th" scope="row">Visibility: Greater than 1 SM</TableCell>}
                                                {row.weather.visibilityCeilings.lt1 && <TableCell component="th" scope="row">Visibility: Less than 1 SM</TableCell>}
                                            </TableRow>
                                            <TableRow key='Visibility'>
                                            </TableRow>
                                            <TableRow key='LunarData'>
                                                {row.weather.lunar.gt25IllumAndgt30degrees && <TableCell colSpan={4} component="th" scope="row">Lunar Data: Greater than 25% and 30°</TableCell>}
                                                {row.weather.lunar.lt25IllumAndlt30degrees && <TableCell colSpan={4} component="th" scope="row">Lunar Data: Less than 25% and 30°</TableCell>}
                                                {row.weather.lunar.gt25IllumAndgt30degreesLimitedLighting && <TableCell colSpan={4} component="th" scope="row">Lunar Data: Less than 25% and 30° (Limited Lighting)</TableCell>}
                                            </TableRow>
                                            <TableRow key='AltRequied'>
                                                {row.weather.IFR.altRequired && <TableCell component="th" scope="row">Alternate Required: Yes</TableCell>}
                                                {row.weather.IFR.altRequired && <TableCell component="th" scope="row">Alternate Required: Yes</TableCell>}
                                            </TableRow>
                                            <TableRow key='MissionRiskMitigation'>
                                                <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.weather.risk.riskMitigation}</TableCell>
                                            </TableRow>
                                            <TableRow key='MissionRisk'>
                                                <TableCell align="left">Initial Risk: {row.weather.risk.initialRisk}</TableCell>
                                                <TableCell align="left">Mitigated Risk: {row.weather.risk.mitigatedRisk}</TableCell>
                                            </TableRow>
                                        </Collapse>
                                    </TableBody>
                                </Table>
                            </Box>

                            {/* Final Risk */}
                            <Box sx={{ margin: 1 }}>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setFinalRiskOpen(!finalRiskOpen)}
                                    sx={{ display: 'inline' }}
                                >
                                    {finalRiskOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ display: 'inline' }}>Final: {row.overallRisk.residualRisk}</Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        <Collapse in={finalRiskOpen} timeout="auto" unmountOnExit>
                                            <TableRow key='greatestRisk'>
                                                <TableCell colSpan={5} component="th" scope="row">Greatest Risk: {row.overallRisk.greatestRisk}</TableCell>
                                            </TableRow>
                                            <TableRow key='MissionRiskMitigation'>
                                                <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.overallRisk.riskMitigation}</TableCell>
                                            </TableRow>
                                            <TableRow key='Briefer'>
                                                <TableCell component="th" scope="row">Briefer: {row.approval.briefer}</TableCell>
                                                <TableCell>Comment Date: {row.approval.brieferCommentDate}</TableCell>
                                            </TableRow>
                                            <TableRow key='BrieferComment'>
                                                <TableCell colSpan={3} component="th" scope="row">Briefer Comments: {row.approval.brieferComment}</TableCell>
                                            </TableRow>
                                            <TableRow key='Approver'>
                                                <TableCell component="th" scope="row">Approver: {row.approval.approver}</TableCell>
                                                <TableCell>Comment Date: {row.approval.approverCommentDate}</TableCell>
                                            </TableRow>
                                            <TableRow key='ApproverComment'>
                                                <TableCell colSpan={3} component="th" scope="row">Approver Comments: {row.approval.approverComment}</TableCell>
                                            </TableRow>
                                            <TableRow key='MissionRisk'>
                                                <TableCell align="left">Initial Risk: {row.overallRisk.initialRisk}</TableCell>
                                                <TableCell align="left">Residual Mission Risk: {row.overallRisk.residualRisk}</TableCell>
                                            </TableRow>
                                        </Collapse>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
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
                            <TableCell>Date</TableCell>
                            <TableCell align="left">Mission</TableCell>
                            <TableCell align="left">Risk</TableCell>
                            <TableCell align="left">Pilot</TableCell>
                            <TableCell align="left">Briefer</TableCell>
                            <TableCell align="left">Approver</TableCell>
                            <TableCell align="left">Edit</TableCell>
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
