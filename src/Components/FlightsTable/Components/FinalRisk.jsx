import * as React from 'react';
import { Table, TableCell, TableHead, TableRow, Typography, IconButton, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import determineHighestRisk from '../../../utils/RiskLookupColor'
import '../FlightsList.css';



export default function FinalRisk({ row }) {
    const [finalRiskOpen, setFinalRiskOpen] = React.useState(false);

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
                        onClick={() => setFinalRiskOpen(!finalRiskOpen)}
                        sx={{ height: '100%' }}
                    >
                        {finalRiskOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ marginLeft: '8px' }}
                        >
                            Final: {row.finalmitigatedrisk}
                        </Typography>
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <Collapse in={finalRiskOpen} timeout="auto" unmountOnExit>
                        <Table size="small">
                            <TableHead>
                                <TableRow key='riskAssessmentHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Risk Assessment</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='greatestRisk'>
                                    <TableCell colSpan={5} component="th" scope="row">Greatest Risk: {row.greatestrisk}</TableCell>
                                </TableRow>
                                <TableRow key='MissionRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row">Risk Mitigation: {row.finalriskmitigation}</TableCell>
                                </TableRow>
                                <TableRow key='brieferHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Briefer</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='Briefer'>
                                    <TableCell component="th" scope="row">Briefer: {row.briefer}</TableCell>
                                    <TableCell>Comment Date: {row.briefercommentdate}</TableCell>
                                </TableRow>
                                <TableRow key='BrieferComment'>
                                    <TableCell colSpan={3} component="th" scope="row">Briefer Comments: {row.briefercomment}</TableCell>
                                </TableRow>
                                <TableRow key='approverHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center'>Approver</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='Approver'>
                                    <TableCell component="th" scope="row">Approver: {row.approver}</TableCell>
                                    <TableCell>Comment Date: {row.approvercommentdate}</TableCell>
                                </TableRow>
                                <TableRow key='ApproverComment'>
                                    <TableCell colSpan={4} component="th" scope="row">Approver Comments: {row.approvercomment}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}