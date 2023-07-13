
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import './FlightsList.css'

export default function Body({ drawerWidth }) {
    // const flights = [
    //     {
    //         date: '13JUL23',
    //         pilot: 'JNasty',
    //         risk: 'L',
    //         briefed: 'CW3 Sick',
    //         approved: 'CPT Nasty'
    //     },
    //     {
    //         date: '13JUL23',
    //         pilot: 'Parry',
    //         risk: 'M',
    //         briefed: 'CW3 Chungus',
    //         approved: 'MAJ Rad'
    //     },
    //     {
    //         date: '13JUL23',
    //         pilot: 'Jose',
    //         risk: 'H',
    //         briefed: 'CW3 Boiii',
    //         approved: 'CPT Nasty'
    //     },
    //     {
    //         date: '13JUL23',
    //         pilot: 'Parry',
    //         risk: 'M',
    //         briefed: 'CW3 Chungus',
    //         approved: 'MAJ Rad'
    //     },
    //     {
    //         date: '13JUL23',
    //         pilot: 'Jose',
    //         risk: 'H',
    //         briefed: 'CW3 Boiii',
    //         approved: 'CPT Nasty'
    //     },
    //     {
    //         date: '13JUL23',
    //         pilot: 'Parry',
    //         risk: 'M',
    //         briefed: 'CW3 Chungus',
    //         approved: 'MAJ Rad'
    //     },
    //     {
    //         date: '13JUL23',
    //         pilot: 'Jose',
    //         risk: 'H',
    //         briefed: 'CW3 Boiii',
    //         approved: 'CPT Nasty'
    //     },
    // ]
    const flights = [
        {
            date: '01AUG23',
            pilot: 'Parzival',
            risk: 'L',
            briefed: 'CW3 Beatrix Kiddo',
            approved: 'CPT Vincent Vega'
        },
        {
            date: '02AUG23',
            pilot: 'Art3mis',
            risk: 'M',
            briefed: 'CW4 Elle Driver',
            approved: 'LTC Winston Wolfe'
        },
        {
            date: '03AUG23',
            pilot: 'Aech',
            risk: 'H',
            briefed: 'CW5 O-Ren Ishii',
            approved: 'COL Mia Wallace'
        },
        {
            date: '04AUG23',
            pilot: 'Daito',
            risk: 'M',
            briefed: 'CW2 Gogo Yubari',
            approved: 'LTC Butch Coolidge'
        },
        {
            date: '05AUG23',
            pilot: 'Shoto',
            risk: 'H',
            briefed: 'CW3 Vernita Green',
            approved: 'COL Lance'
        },
        {
            date: '06AUG23',
            pilot: 'IOI-655321',
            risk: 'M',
            briefed: 'CW4 Pai Mei',
            approved: 'LTC Captain Koons'
        },
        {
            date: '07AUG23',
            pilot: 'Sorrento',
            risk: 'H',
            briefed: 'CW5 Bill',
            approved: 'COL Jody'
        },
        {
            date: '08AUG23',
            pilot: 'Neo',
            risk: 'L',
            briefed: 'CW3 Trinity',
            approved: 'CPT Morpheus'
        },
        {
            date: '09AUG23',
            pilot: 'Morpheus',
            risk: 'M',
            briefed: 'CW4 Agent Smith',
            approved: 'LTC Niobe'
        },
        {
            date: '10AUG23',
            pilot: 'Trinity',
            risk: 'H',
            briefed: 'CW5 Cypher',
            approved: 'COL Seraph'
        },
        {
            date: '11AUG23',
            pilot: 'Agent Smith',
            risk: 'M',
            briefed: 'CW2 Merovingian',
            approved: 'LTC Ghost'
        },
        {
            date: '12AUG23',
            pilot: 'Niobe',
            risk: 'H',
            briefed: 'CW3 Mouse',
            approved: 'COL Dozer'
        },
        {
            date: '13AUG23',
            pilot: 'Cypher',
            risk: 'M',
            briefed: 'CW4 Switch',
            approved: 'LTC Apoc'
        },
        {
            date: '14AUG23',
            pilot: 'Morpheus',
            risk: 'L',
            briefed: 'CW3 Tank',
            approved: 'CPT Trinity'
        },
        {
            date: '15AUG23',
            pilot: 'Neo',
            risk: 'M',
            briefed: 'CW4 Oracle',
            approved: 'LTC Keymaker'
        },
        {
            date: '16AUG23',
            pilot: 'Trinity',
            risk: 'H',
            briefed: 'CW5 Architect',
            approved: 'COL Persephone'
        },
        {
            date: '17AUG23',
            pilot: 'Agent Smith',
            risk: 'M',
            briefed: 'CW2 Twins',
            approved: 'LTC Seraph'
        },
        {
            date: '18AUG23',
            pilot: 'Niobe',
            risk: 'H',
            briefed: 'CW3 Sati',
            approved: 'COL The Merovingian'
        },
        {
            date: '19AUG23',
            pilot: 'Cypher',
            risk: 'M',
            briefed: 'CW4 Kid',
            approved: 'LTC Link'
        },
        {
            date: '20AUG23',
            pilot: 'NewPilot',
            risk: 'L',
            briefed: 'CW3 NewCharacter',
            approved: 'CPT NewApprover'
        },
    ];

    const riskColor = (risk) => {
        switch (risk) {
            case "L":
                // return "#95E1D3";
                return "#9AC2C5";
            case "M":
                // return "#FCE38A";
                return "#F4D35E";
            case "H":
                // return "#F38181";
                return "#820933";
        }
    }

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Box >
                {flights.map((flight) => {
                    return <div className='flightStrip' style={{ backgroundColor: riskColor(flight.risk) }}>
                        <h4 key={flight.date}>Date: {flight.date}</h4>
                        <h4 key={flight.pilot}>Pilot: {flight.pilot}</h4>
                        <h4 key={flight.risk}>Risk: {flight.risk}</h4>
                        <h4 key={flight.briefed}>Briefed: {flight.briefed}</h4>
                        <h4 key={flight.approved}>Approved: {flight.approved}</h4>
                    </div>
                })}
            </Box>
        </Box>
    )
}