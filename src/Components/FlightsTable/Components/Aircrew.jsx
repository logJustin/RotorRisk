import * as React from 'react';
import { Table, TableCell, TableHead, TableRow, Typography, IconButton, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import aircrewMemberRiskColor from '../../../utils/AircrewRiskLookupColor'
import '../FlightsList.css';


export default function Aircrew({ row }) {
    const [crewOpen, setCrewOpen] = React.useState(false);

    return (
        <>
            <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '5px 0px 0px 0px' }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setCrewOpen(!crewOpen)}
                        sx={{ display: 'inline' }}
                    >
                        {crewOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        <Typography variant="h6" component="div" sx={{ display: 'inline' }}> Aircrew: {row.aircrewMitigatedRisk}</Typography>
                    </IconButton>
                </TableCell>
            </TableRow >
            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <Collapse in={crewOpen} timeout="auto" unmountOnExit>
                        <Table size="small" >
                            <TableHead>
                                <TableRow key='AircrewNames'>
                                    <TableCell sx={{ borderBottom: 'none' }} component="th" scope="row" align="center">PC: {row.pc}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">PI: {row.pi}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.nrcm1}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.nrcm2}</TableCell>
                                    {row.nrcm3 && <TableCell sx={{ borderBottom: 'none' }} align="center">NRCM: {row.nrcm3}</TableCell>}
                                </TableRow>
                                <TableRow key='AircrewHours'>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.pcRisk) }} component="th" scope="row" align="center">({row.pcHoursTotal} All / {row.pcHoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.piRisk) }} align="center">({row.piHoursTotal} All / {row.piHoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.nrcm1Risk) }} align="center">({row.nrcm1HoursTotal} All / {row.nrcm1HoursNG} NG)</TableCell>
                                    <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.nrcm2Risk) }} align="center">({row.nrcm2HoursTotal} All / {row.nrcm2HoursNG} NG)</TableCell>
                                    {row.nrcm3 && <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: aircrewMemberRiskColor(row.nrcm3Risk) }} align="center">({row.nrcm3HoursTotal} All / {row.nrcm3HoursNG} NG)</TableCell>}
                                </TableRow>

                                <TableRow key='aircrewRiskHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none', padding: '6px 16px 0px 16px' }}>
                                        <Typography variant="h6" component="div" align='center'>Aircrew Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='RiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.aircrewRiskMitigation}</TableCell>
                                </TableRow>
                                <TableRow sx={{ borderBottom: 'none' }} key='FlightRisks'>
                                    <TableCell sx={{ borderBottom: 'none' }} colSpan={2} component="th" scope="row">Initial Risk: {row.aircrewInitialRisk}</TableCell>
                                    <TableCell sx={{ borderBottom: 'none' }} colSpan={2} align="left">Mitigated Risk: {row.aircrewMitigatedRisk}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}