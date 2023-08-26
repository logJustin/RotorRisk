import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
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
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // used for Editing an RCOP, then passing it into FormModal
    const [flightData, setFlightData] = React.useState(null);
    const [formMode, setFormMode] = React.useState('File')

    // State for Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = async (flight, mode) => {
        const aircrews = await fetchAircrewsData();
        setFlightData(flight)
        setOpen(true)
        setFormMode(mode)
    };
    const handleClose = () => setOpen(false);


    const [flights, setFlights] = React.useState([])
    const [aircrews, setAircrews] = React.useState([]);
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
            setFlights(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Header
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />
            <LeftNavigation
                drawerWidth={drawerWidth}
                props={props} mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                lightMode={props.lightMode}
                handleLightModeToggle={props.handleLightModeToggle}
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
                flightData={flightData}
                formMode={formMode}
                fetchFlightsData={fetchFlightsData}
                aircrews={aircrews}
            />
            <FlightsList
                drawerWidth={drawerWidth}
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
                flights={flights} />
        </Box>
    );
}


export default Layout;