
import * as React from 'react';
import { Button, Toolbar, Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import flights from '../../data/seederFlightData';
import Aircrew from './Components/Aircrew'
import Mission from './Components/Mission'
import Weather from './Components/Weather'
import FinalRisk from './Components/FinalRisk'
import './FlightsList.css';


export default function Body({ drawerWidth, open, handleClose, handleOpen, flights }) {




    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        const handleEditRCOP = (flight) => {
            handleOpen(flight, 'Update')
        }


        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell sx={{ padding: '0px 0px 0px 5px' }}>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell sx={{ padding: '0' }} component="th" scope="row" align="left">{row.date}</TableCell>
                    <TableCell sx={{ padding: '0' }} align="left">{row.mission}</TableCell>
                    <TableCell sx={{ padding: '0' }} align="left">{row.finalmitigatedrisk}</TableCell>
                    <TableCell sx={{ padding: '0' }} align="left">{row.pc}</TableCell>
                    <TableCell sx={{ padding: '0' }} align="left">{row.briefer}</TableCell>
                    <TableCell sx={{ padding: '0' }} align="left">{row.approver}</TableCell>
                    <TableCell sx={{ padding: '0' }}> <Button sx={{ margin: '20px 0' }} variant="contained" color="inherit" onClick={() => { handleEditRCOP(row) }}>Edit RCOP</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size="small" >
                                <TableBody>
                                    <Aircrew row={row} />
                                    <Mission row={row} />
                                    <Weather row={row} />
                                    <FinalRisk row={row} />
                                </TableBody>
                            </Table>
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
                            <Row key={`${flight.flightID}`} row={flight} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}
