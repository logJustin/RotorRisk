
import * as React from 'react';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
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

import './FlightsList.css'

export default function Body({ drawerWidth }) {
    const flights = [
        {
            date: '13JUL23',
            pilot: 'Neo',
            risk: 'L',
            briefed: 'CW3 Trinity',
            approved: 'CPT Vega',
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Parzival',
            risk: 'M',
            briefed: 'CW4 Art3mis',
            approved: 'LTC Winnfield'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Luke Skywalker',
            risk: 'H',
            briefed: 'CW5 Organa',
            approved: 'COL Solo'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Harry Potter',
            risk: 'M',
            briefed: 'CW4 Granger',
            approved: 'LTC Dumbledore'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Indiana Jones',
            risk: 'H',
            briefed: 'CW5 Ravenwood',
            approved: 'COL Brody'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'James Bond',
            risk: 'M',
            briefed: 'CW4 Moneypenny',
            approved: 'LTC Trevelyan'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Iron Man',
            risk: 'H',
            briefed: 'CW5 Potts',
            approved: 'COL Rhodes'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Ellen Ripley',
            risk: 'M',
            briefed: 'CW4 Hicks',
            approved: 'LTC Bishop'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Frodo Baggins',
            risk: 'L',
            briefed: 'CW3 Gamgee',
            approved: 'CPT Aragorn'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'John Wick',
            risk: 'M',
            briefed: 'CW4 Winston',
            approved: 'LTC Charon'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Wonder Woman',
            risk: 'H',
            briefed: 'CW5 Trevor',
            approved: 'COL Hippolyta'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Captain Jack Sparrow',
            risk: 'M',
            briefed: 'CW4 Swann',
            approved: 'LTC Barbossa'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Ethan Hunt',
            risk: 'H',
            briefed: 'CW5 Dunn',
            approved: 'COL Stickell'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Thor',
            risk: 'M',
            briefed: 'CW4 Loki',
            approved: 'LTC Odin'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Marty McFly',
            risk: 'L',
            briefed: 'CW3 Brown',
            approved: 'CPT Tannen'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Katniss Everdeen',
            risk: 'M',
            briefed: 'CW4 Mellark',
            approved: 'LTC Abernathy'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Sherlock Holmes',
            risk: 'H',
            briefed: 'CW5 Watson',
            approved: 'COL Holmes'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Wolverine',
            risk: 'M',
            briefed: 'CW4 Grey',
            approved: 'LTC Xavier'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Dominic Toretto',
            risk: 'H',
            briefed: 'CW5 Ortiz',
            approved: 'COL Hobbs'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        },
        {
            date: '13JUL23',
            pilot: 'Katara',
            risk: 'M',
            briefed: 'CW4 Aang',
            approved: 'LTC Zuko'
            ,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        }
    ];

    const riskColor = (risk) => {
        switch (risk) {
            case "L":
                // return "#95E1D3";
                return "#e1ecf7";
            case "M":
                // return "#FCE38A";
                return "#aecbeb";
            case "H":
                // return "#F38181";
                return "#83b0e1";
        }
    }


    function createData(name, calories, fat, carbs, protein, price) {
        return {
            name,
            calories,
            fat,
            carbs,
            protein,
            price,
            history: [
                {
                    date: '2020-01-05',
                    customerId: '11091700',
                    amount: 3,
                },
                {
                    date: '2020-01-02',
                    customerId: 'Anonymous',
                    amount: 1,
                },
            ],
        };
    }

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

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
                    <TableCell component="th" scope="row">
                        {row.date}
                    </TableCell>
                    <TableCell align="right">{row.pilot}</TableCell>
                    <TableCell align="right">{row.risk}</TableCell>
                    <TableCell align="right">{row.briefed}</TableCell>
                    <TableCell align="right">{row.approved}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    INSERT EDIT BUTTON HERE
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total price ($)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.history.map((historyRow) => (
                                            <TableRow key={historyRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </TableCell>
                                                <TableCell>{historyRow.customerId}</TableCell>
                                                <TableCell align="right">{historyRow.amount}</TableCell>
                                                <TableCell align="right">
                                                    {Math.round(historyRow.amount * row.price * 100) / 100}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            {/* <Box >
                {flights.map((flight) => {
                    return <div className='flightStrip' style={{ backgroundColor: riskColor(flight.risk) }}>
                        <b key={flight.date}>Date: {flight.date}</b>
                        <b key={flight.pilot}>Pilot: {flight.pilot}</b>
                        <b key={flight.risk}>Risk: {flight.risk}</b>
                        <b key={flight.briefed}>Briefed: {flight.briefed}</b>
                        <b key={flight.approved}>Approved: {flight.approved}</b>
                    </div>
                })}
            </Box> */}
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Pilot</TableCell>
                            <TableCell align="right">Risk</TableCell>
                            <TableCell align="right">Briefer</TableCell>
                            <TableCell align="right">Approver</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))} */}
                        {flights.map((flight) => (
                            <Row key={flight.pilot} row={flight} />
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    )
}
