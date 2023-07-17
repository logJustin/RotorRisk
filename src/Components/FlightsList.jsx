
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
import flights from '../seederDataTemplate';
import './FlightsList.css';



export default function Body({ drawerWidth }) {

    const colorPicker = (hours, pilot) => {
        if (pilot && hours > 500) {
            return '#8CD47E'; // If hours is greater than 500, return green color
        } else if (pilot && hours > 100) {
            return '#F8D66D'; // If hours is greater than 100, return yellow color
        } else if (!pilot && hours > 150) {
            return '#8CD47E'; // If hours is greater than 500, return green color
        } else {
            return '#FF6961'; // Default case for hours less than or equal to 100, return red color
        }
    };


    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const [crewOpen, setCrewOpen] = React.useState(true);
        const [missionOpen, setMissionOpen] = React.useState(false);
        const [weatherOpen, setWeatherOpen] = React.useState(false);


        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                        {row.flightInfo5484.date}
                    </TableCell>
                    <TableCell align="left">{row.flightInfo5484.mission}</TableCell>
                    <TableCell align="left">{row.overallRisk.residual}</TableCell>
                    <TableCell align="left">{row.flightInfo5484.pc}</TableCell>
                    <TableCell align="left">{row.approval.briefer}</TableCell>
                    <TableCell align="left">{row.approval.approver}</TableCell>
                    <TableCell>                    <Button sx={{ margin: '20px 0' }} variant="contained" color="inherit">Edit RCOP</Button></TableCell>
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
                                <Typography variant="h6" gutterBottom component="div" sx={{ display: 'inline' }}>Aircrew: {row.crewData.risk.mitigatedRisk}</Typography>
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
                                                <TableCell sx={{ borderBottom: 'none', borderRadius: '10px 0 0 10px', color: 'black', bgcolor: colorPicker(row.crewData.experience.pcHoursTotal, true) }} component="th" scope="row" align="center">({row.crewData.experience.pcHoursTotal} All / {row.crewData.experience.pcHoursNG} NG)</TableCell>
                                                <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: colorPicker(row.crewData.experience.piHoursTotal, true) }} align="center">({row.crewData.experience.piHoursTotal} All / {row.crewData.experience.piHoursNG} NG)</TableCell>
                                                <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: colorPicker(row.crewData.experience.nrcm1HoursTotal, false) }} align="center">({row.crewData.experience.nrcm1HoursTotal} All / {row.crewData.experience.nrcm1HoursNG} NG)</TableCell>
                                                <TableCell sx={{ borderBottom: 'none', borderRadius: !row.flightInfo5484.nrcm3 && '0 10px 10px 0', color: 'black', bgcolor: colorPicker(row.crewData.experience.nrcm2HoursTotal, false) }} align="center">({row.crewData.experience.nrcm2HoursTotal} All / {row.crewData.experience.nrcm2HoursNG} NG)</TableCell>
                                                {row.flightInfo5484.nrcm3 && <TableCell sx={{ borderBottom: 'none', color: 'black', borderRadius: '0 10px 10px 0', bgcolor: colorPicker(row.crewData.experience.nrcm3HoursTotal, false) }} align="center">({row.crewData.experience.nrcm3HoursTotal} All / {row.crewData.experience.nrcm3HoursNG} NG)</TableCell>}
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
                                <Typography variant="h6" gutterBottom component="div" sx={{ display: 'inline' }}>Mission: {row.missionComplexity.risk.mitigatedRisk}</Typography>
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
                                <Typography variant="h6" gutterBottom component="div" sx={{ display: 'inline' }}>Weather: {row.weather.risk.mitigatedRisk}</Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
                                            {/* <TableRow key={row.flightInfo5484.mission}>
                                                <TableCell component="th" scope="row">Mission: {row.flightInfo5484.mission}</TableCell>
                                                <TableCell>Flight Conditions: {row.flightInfo5484.flightConditions}</TableCell>
                                                <TableCell>Mission Statement: {row.flightInfo5484.missionStatement}</TableCell>
                                                <TableCell>ETD: {row.flightInfo5484.etd}</TableCell>
                                                <TableCell>ETE: {row.flightInfo5484.ete}</TableCell>
                                            </TableRow>
                                            <TableRow key={row.flightInfo5484.aircraftType}>
                                                <TableCell>Route: {row.flightInfo5484.route}</TableCell>
                                                <TableCell align="left">Aircraft Type: {row.flightInfo5484.aircraftType}</TableCell>
                                                <TableCell align="left">Aircraft Tail: {row.flightInfo5484.aircraftTail}</TableCell>
                                            </TableRow> */}
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
                <Table aria-label="collapsible table">
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
