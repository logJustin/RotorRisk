import React, { useState, useEffect, forwardRef } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser, RedirectToSignIn, SignIn } from "@clerk/clerk-react";
import { dark } from '@clerk/themes';
import Header from './components/Layouts/Header';
import LeftNavigation from './components/Layouts/LeftNavigation';
import SuggestionsFloatingButton from './components/Layouts/SuggestionsFloatingButton';
import FlightsList from './Components/FlightsTable/FlightsList';
import './App.css';

const drawerWidth = 240;

function App(props) {
  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

  const [lightMode, setLightMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const existingPreference = localStorage.getItem('lightMode');
    if (existingPreference) {
      setLightMode(existingPreference === 'true');
    }
    setLoading(false);
  }, []);

  const lightPalette = {
    mode: 'light',
    primary: {
      main: '#435334',
    },
    secondary: {
      main: '#FAF1E4',
    },
    background: {
      default: '#FAF1E4',
      paper: '#fff'
    },
  };
  const darkPalette = {
    mode: 'dark',
    primary: {
      main: '#FAF1E4',
    },
    secondary: {
      main: '#435334',
    },
    divider: '#FAF1E4',
    text: {
      primary: '#fff',
    },
  };
  const theme = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
      ...(lightMode ? lightPalette : darkPalette),
    },
  });
  const handleLightModeToggle = () => {
    const newLightMode = !lightMode;
    setLightMode(newLightMode);
    localStorage.setItem('lightMode', newLightMode.toString());
  };

  // State for the navBar on a mobile format is saved here
  // so it can be passed as props both Header & LeftNavigation
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

  // State for filter
  const [viewMode, setViewMode] = useState('');

  return (
    <ClerkProvider publishableKey={clerkPubKey} appearance={{ baseTheme: lightMode ? '' : dark, elements: { footer: "hidden" } }}>
      <SignedIn>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex' }}>
            <Header
              drawerWidth={drawerWidth}
              handleDrawerToggle={handleDrawerToggle}
            />
            <LeftNavigation
              drawerWidth={drawerWidth}
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
              lightMode={lightMode}
              handleLightModeToggle={handleLightModeToggle}
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
              setViewMode={setViewMode}
              props={props}
            />
            <FlightsList
              drawerWidth={drawerWidth}
              handleOpen={handleOpen}
              flights={flights}
              fetchFlightsData={fetchFlightsData}
              handleFlashClick={handleFlashClick}
              setFlashOrigin={setFlashOrigin}
              viewMode={viewMode}
            />
            <SuggestionsFloatingButton
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
        </ThemeProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );

  //   return (
  //     <ClerkProvider publishableKey={clerkPubKey} appearance={{ baseTheme: lightMode ? '' : dark, elements: { footer: "hidden" } }}>
  //       <SignedIn>
  //         <ThemeProvider theme={theme}>
  //           <CssBaseline />
  //           <AppLayout lightMode={lightMode} handleLightModeToggle={handleLightModeToggle} />
  //         </ThemeProvider>
  //       </SignedIn>
  //       <SignedOut>
  //         <RedirectToSignIn />
  //       </SignedOut>
  //     </ClerkProvider>
  //   );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);