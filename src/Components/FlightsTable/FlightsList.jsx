import React, { useState } from 'react';
import {
    Toolbar, Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import FlightSkeleton from './Components/FlightSkeleton'
import Aircrew from './Components/Aircrew'
import Mission from './Components/Mission'
import Weather from './Components/Weather'
import FinalRisk from './Components/FinalRisk'
import DeleteConfirmationModal from '../Modals/DeleteConfirmationModal'
import { useGlobalState } from '../../contexts/GlobalStateContext';
import { useFilter } from '../../contexts/FilterContext';

export default function Body() {

    const { handleModalOpen, flights, drawerWidth } = useGlobalState();
    const { viewMode } = useFilter();

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = useState(false);
        const handleEditRCOP = (flight) => { handleModalOpen(flight, 'Update') }

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
                    <TableCell sx={{ p: '6px 0' }} align="center" component="th" scope="row">{row.date}</TableCell>
                    <TableCell sx={{ p: '6px 0' }} align="center">{row.mission}</TableCell>
                    <TableCell sx={{ p: '6px 0' }} align="center">{row.finalmitigatedrisk}</TableCell>
                    <TableCell sx={{ p: '6px 0' }} align="center">{row.pc}</TableCell>
                    <TableCell sx={{ p: '6px 0' }} align="center">{row.briefer}</TableCell>
                    <TableCell sx={{ p: '6px 0' }} align="center">{row.approver}</TableCell>
                    <TableCell sx={{ p: '6px 0' }} align="center"> <EditIcon sx={{ verticalAlign: 'middle' }} onClick={() => { handleEditRCOP(row) }} /> </TableCell>
                    <TableCell sx={{ p: '6px 0' }} align="center">
                        <DeleteConfirmationModal flight={row} />
                    </TableCell>
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
            sx={{
                flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                // maxWidth: '1200px'
            }}
        >
            <Toolbar />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell sx={{ fontWeight: "bold" }} align="center" >Date</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center" width="15%">Mission</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Risk</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Pilot</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Briefer</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Approver</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Edit</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Render skeleton if flights hasn't fetched yet */}
                        {flights.length == 0 ? <FlightSkeleton /> : null}
                        {flights
                            .filter((flight) => {
                                switch (viewMode) {
                                    case '':
                                        return true; // Include all flights
                                    case 'briefer':
                                        return !flight.briefer; // Exclude flights with a briefer
                                    case 'approver':
                                        return flight.briefer && !flight.approver; // Exclude flights with an approver
                                    default:
                                        return true; // Exclude all other cases
                                }
                            })
                            .map((flight) => (
                                <Row key={`${flight.flightid}`} row={flight} />
                            ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}
