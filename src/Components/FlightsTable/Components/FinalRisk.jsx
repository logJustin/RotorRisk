import * as React from 'react';
import { Table, TableCell, TableHead, TableRow, Typography, IconButton, Collapse, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
                            sx={{ marginLeft: '8px' }} // Add some margin for spacing
                            color="text.customColor"
                        >
                            <Typography component={'span'} fontWeight={'bold'}>Final: </Typography>
                            {row.finalmitigatedrisk}
                        </Typography>
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow sx={{ padding: '0px' }} >
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <Collapse in={finalRiskOpen} timeout="auto" unmountOnExit>
                        <Paper sx={{ maxHeight: '300px', overflow: 'auto' }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow key='riskAssessmentHeader'>
                                        <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                            <Typography variant="h6" component="div" align='center' fontWeight={'bold'}>Risk Assessment</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key='greatestRisk'>
                                        <TableCell colSpan={5} component="th" scope="row"><Typography fontWeight={500}>Greatest Risk </Typography>{row.greatestrisk}</TableCell>
                                    </TableRow>
                                    <TableRow key='MissionRiskMitigation'>
                                        <TableCell colSpan={5} component="th" scope="row"><Typography fontWeight={500}>Risk Mitigation </Typography>{row.finalriskmitigation}</TableCell>
                                    </TableRow>

                                    {row.briefercomment &&
                                        <>
                                            <TableRow key='brieferHeader'>
                                                <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                                    <Typography variant="h6" component="div" align='center' fontWeight={'bold'}>Briefer</Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow key='Briefer'>
                                                <TableCell component="th" scope="row"><Typography fontWeight={500}>Briefer </Typography>{row.briefer}</TableCell>
                                                <TableCell><Typography fontWeight={500}>Comment Date </Typography> {row.briefercommentdate}</TableCell>
                                            </TableRow>
                                            <TableRow key='BrieferComment'>
                                                <TableCell colSpan={3} component="th" scope="row"><Typography fontWeight={500}>Briefer Comments </Typography> {row.briefercomment}</TableCell>
                                            </TableRow>
                                        </>
                                    }

                                    {row.approvercomment &&
                                        <>
                                            <TableRow key='approverHeader'>
                                                <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                                    <Typography variant="h6" component="div" align='center' fontWeight={'bold'}>Approver</Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow key='Approver'>
                                                <TableCell component="th" scope="row"><Typography fontWeight={500}>Approver </Typography> {row.approver}</TableCell>
                                                <TableCell><Typography fontWeight={500}>Comment Date </Typography> {row.approvercommentdate}</TableCell>
                                            </TableRow>
                                            <TableRow key='ApproverComment'>
                                                <TableCell colSpan={4} component="th" scope="row"><Typography fontWeight={500}>Approver Comments </Typography> {row.approvercomment}</TableCell>
                                            </TableRow>
                                        </>
                                    }
                                </TableHead>
                            </Table>
                        </Paper>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}