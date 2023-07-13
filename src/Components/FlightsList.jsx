
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import './FlightsList.css'

export default function Body({ drawerWidth }) {
    const flights = [
        {
            date: '13JUL23',
            pilot: 'JNasty',
            risk: 'L',
            briefed: 'CW3 Sick',
            approved: 'CPT Nasty'
        },
        {
            date: '13JUL23',
            pilot: 'Parry',
            risk: 'M',
            briefed: 'CW3 Chungus',
            approved: 'MAJ Rad'
        },
        {
            date: '13JUL23',
            pilot: 'Jose',
            risk: 'H',
            briefed: 'CW3 Boiii',
            approved: 'CPT Nasty'
        },
    ]
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Box >
                {flights.map((flight) => {
                    return <div className='flightStrip'>
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