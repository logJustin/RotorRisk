
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
import flights from '../seederDataTemplate';
import './FlightsList.css';



export default function Body({ drawerWidth }) {

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
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {/* <button style={{ margin: '20px 0' }}>EDIT BUTTON PLACEHOLDER</button> */}
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
                                            <TableRow key={row.flightInfo5484.pc}>
                                                <TableCell component="th" scope="row">PC: {row.flightInfo5484.pc}</TableCell>
                                                <TableCell>PI: {row.flightInfo5484.pi}</TableCell>
                                                <TableCell align="left">NRCM: {row.flightInfo5484.nrcm1}</TableCell>
                                                <TableCell align="left">NRCM: {row.flightInfo5484.nrcm2}</TableCell>
                                                {row.flightInfo5484.nrcm3 && <TableCell align="left">NRCM: {row.flightInfo5484.nrcm3}</TableCell>}
                                            </TableRow>
                                            <TableRow key={row.crewData.experience.pcHoursTotal}>
                                                <TableCell component="th" scope="row">({row.crewData.experience.pcHoursTotal} All / {row.crewData.experience.pcHoursNG} NG)</TableCell>
                                                <TableCell>({row.crewData.experience.piHoursTotal} All / {row.crewData.experience.piHoursNG} NG)</TableCell>
                                                <TableCell align="left">({row.crewData.experience.nrcm1HoursTotal} All / {row.crewData.experience.nrcm1HoursNG} NG)</TableCell>
                                                <TableCell align="left">({row.crewData.experience.nrcm2HoursTotal} All / {row.crewData.experience.nrcm2HoursNG} NG)</TableCell>
                                                {row.flightInfo5484.nrcm3 && <TableCell align="left">({row.crewData.experience.nrcm3HoursTotal} All / {row.crewData.experience.nrcm3HoursNG} NG)</TableCell>}
                                            </TableRow>
                                        </Collapse>
                                    </TableBody>
                                </Table>
                            </Box>
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
                                            <TableRow key={row.flightInfo5484.mission}>
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
                                            </TableRow>
                                        </Collapse>
                                    </TableBody>
                                </Table>
                            </Box>
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
                                            <TableRow key={row.flightInfo5484.mission}>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flights.map((flight) => (
                            <Row key='{flight.pilot}' row={flight} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}
