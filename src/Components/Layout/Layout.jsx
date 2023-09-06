import * as React from 'react';
import { useEffect, useState, forwardRef } from 'react';
import { Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Header from './Header'
import LeftNavigation from './LeftNavigation'
import FlightsList from '../FlightsTable/FlightsList'
import '../FlightsTable/FlightsList.css'


const drawerWidth = 240;

function Layout(props, lightMode, handleLightModeToggle) {

    // state for the navBar on a mobile format is saved here
    // so it can be passed as props both Header & LeftNavigation

    // Left Nav because that is the physical components
    // Header because that's where the hamburger toggler is
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // used for Editing an RCOP, then passing it into FormModal
    const [flightData, setFlightData] = useState(null);
    const [formMode, setFormMode] = useState('File')

    // State for Modal
    const [open, setOpen] = useState(false);
    const handleOpen = async (flight, mode) => {
        const aircrews = await fetchAircrewsData()
        await setFlightData(flight);
        setFormMode(mode);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    // State for flights and aircrews
    const [flights, setFlights] = useState([])
    const [aircrews, setAircrews] = useState([]);
    useEffect(() => {
        // Fetch data when the component mounts
        fetchFlightsData();
        fetchAircrewsData();
    }, []); // The empty dependency array ensures this runs once on mount

    const fetchAircrewsData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/aircrews');
            const jsonData = await response.json();
            setAircrews(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchFlightsData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/flights');
            const jsonData = await response.json();
            jsonData.sort((a, b) => {
                const dateA = new Date(a.date.replace(/(\d{2})([A-Za-z]{3})(\d{2})/, "$2 $1, $3"));
                const dateB = new Date(b.date.replace(/(\d{2})([A-Za-z]{3})(\d{2})/, "$2 $1, $3"));
                return dateA - dateB;
            });
            setFlights(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // State for Flash messages
    // flash origin says where it came from: the RCOP or Crewmember form
    const [flashOrigin, setFlashOrigin] = useState()
    const [openFlash, setFlashOpen] = useState(false);
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleFlashClick = () => {
        setFlashOpen(true);
    };
    const handleFlashClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFlashOpen(false);
    };
    const getSeverity = () => {
        if (flashOrigin === 'Flight added successfully' || flashOrigin === 'Crewmember added successfully') {
            return 'success';
        } else if (flashOrigin === 'Flight updated successfully' || flashOrigin === 'Crewmember updated successfully') {
            return 'info';
        } else if (flashOrigin === 'Flight Deleted Successfully') {
            return 'warning';
        } else {
            return 'info'; // Default value
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Header
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />
            <LeftNavigation
                drawerWidth={drawerWidth}
                props={props}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                lightMode={props.lightMode}
                handleLightModeToggle={props.handleLightModeToggle}
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
                formMode={formMode}
                flightData={flightData}
                fetchFlightsData={fetchFlightsData}
                aircrews={aircrews}
                fetchAircrewsData={fetchAircrewsData}
                handleFlashClick={handleFlashClick}
                setFlashOrigin={setFlashOrigin}
            />
            <FlightsList
                drawerWidth={drawerWidth}
                handleOpen={handleOpen}
                flights={flights}
                fetchFlightsData={fetchFlightsData}
                handleFlashClick={handleFlashClick}
                setFlashOrigin={setFlashOrigin}
            />
            <Snackbar
                open={openFlash}
                autoHideDuration={3000}
                onClose={handleFlashClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{ width: '50%' }}
            >
                <Alert
                    onClose={handleFlashClose}
                    severity={getSeverity()}
                    sx={{ width: '100%' }}
                >
                    {flashOrigin}
                </Alert>
            </Snackbar>
        </Box>
    );
}


export default Layout;