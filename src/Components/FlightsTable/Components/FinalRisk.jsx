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
            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
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
                                    <TableCell colSpan={4} component="th" scope="row">Approver Comments: {row.approverComment}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}