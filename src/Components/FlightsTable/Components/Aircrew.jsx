import * as React from 'react';
import { Table, TableCell, TableHead, TableRow, Typography, IconButton, Collapse, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useAircrewRiskColor from '../../../hooks/useAircrewRiskColor';


export default function Aircrew({ row }) {
    const [crewOpen, setCrewOpen] = React.useState(false);

    return (
        <>
            <TableRow>
                <TableCell
                    sx={{
                        borderBottom: 'none',
                        padding: '5px 0px 0px 0px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setCrewOpen(!crewOpen)}
                        sx={{ height: '100%' }}
                    >
                        {crewOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ marginLeft: '8px' }}
                            color="text.customColor"
                        >
                            <Typography component={'span'} fontWeight={'bold'}>Aircrew: </Typography>
                            {row.aircrewmitigatedrisk}
                        </Typography>
                    </IconButton>
                </TableCell>
            </TableRow>

            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <Collapse in={crewOpen} timeout="auto" unmountOnExit>
                        <Paper sx={{ maxHeight: '500px', overflow: 'auto' }}>
                            <Table size="small" >
                                <TableHead>
                                    <TableRow key='AircrewNames'>
                                        <TableCell sx={{ borderBottom: 'none' }} component="th" scope="row" align="center"><Typography fontWeight={500}>PC </Typography> {row.pc}</TableCell>
                                        <TableCell sx={{ borderBottom: 'none' }} align="center"><Typography fontWeight={500}>PI </Typography> {row.pi}</TableCell>
                                        {row.nrcm1 && <TableCell sx={{ borderBottom: 'none' }} align="center"><Typography fontWeight={500}>NRCM </Typography>  {row.nrcm1}</TableCell>}
                                        {row.nrcm2 && <TableCell sx={{ borderBottom: 'none' }} align="center"><Typography fontWeight={500}>NRCM </Typography>  {row.nrcm2}</TableCell>}
                                        {row.nrcm3 && <TableCell sx={{ borderBottom: 'none' }} align="center"><Typography fontWeight={500}>NRCM </Typography>  {row.nrcm3}</TableCell>}
                                    </TableRow>
                                    <TableRow key='AircrewHours'>
                                        <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: useAircrewRiskColor(row.pcrisk) }} component="th" scope="row" align="center">({row.pchourstotal} All / {row.pchoursng} NG)</TableCell>
                                        <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: useAircrewRiskColor(row.pirisk) }} align="center">({row.pihourstotal} All / {row.pihoursng} NG)</TableCell>
                                        <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: useAircrewRiskColor(row.nrcm1risk) }} align="center">({row.nrcm1hourstotal} All / {row.nrcm1hoursng} NG)</TableCell>
                                        {row.nrcm2 && <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: useAircrewRiskColor(row.nrcm2risk) }} align="center">({row.nrcm2hourstotal} All / {row.nrcm2hoursng} NG)</TableCell>}
                                        {row.nrcm3 && <TableCell sx={{ borderBottom: 'none', color: 'black', bgcolor: useAircrewRiskColor(row.nrcm3risk) }} align="center">({row.nrcm3hourstotal} All / {row.nrcm3hoursng} NG)</TableCell>}
                                    </TableRow>

                                    <TableRow key='aircrewRiskHeader'>
                                        <TableCell colSpan={5} sx={{ borderBottom: 'none', padding: '6px 16px 0px 16px' }}>
                                            <Typography variant="h6" component="div" align='center' fontWeight={'bold'}>Aircrew Risk</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key='RiskMitigation'>
                                        <TableCell colSpan={5} component="th" scope="row"><Typography fontWeight={500}>Risk Mitigation </Typography>  {row.aircrewriskmitigation}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ borderBottom: 'none' }} key='FlightRisks'>
                                        <TableCell sx={{ borderBottom: 'none' }} colSpan={2} component="th" scope="row"><Typography fontWeight={500}>Initial Risk </Typography> {row.aircrewinitialrisk}</TableCell>
                                        <TableCell sx={{ borderBottom: 'none' }} colSpan={2} align="left"><Typography fontWeight={500}>Mitigated Risk </Typography> {row.aircrewmitigatedrisk}</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Paper>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}