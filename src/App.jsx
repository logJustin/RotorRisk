import React, { useState, useEffect, forwardRef } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser, RedirectToSignIn, SignIn } from "@clerk/clerk-react";
import { dark } from '@clerk/themes';
import SuggestionsFloatingButton from './Components/Layouts/SuggestionsFloatingButton';
import LeftNavigation from './Components/Layouts/LeftNavigation';
import FlightsList from './Components/FlightsTable/FlightsList';
import { DrawerProvider } from './contexts/DrawerContext';
import { GlobalStateProvider } from './contexts/GlobalStateContext';
import Header from './Components/Layouts/Header';
import './App.css';

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
    const severityMap = {
      'Flight added successfully': 'success',
      'Crewmember added successfully': 'success',
      'Flight updated successfully': 'info',
      'Crewmember updated successfully': 'info',
      'Flight Deleted Successfully': 'warning'
    };

    return severityMap[flashOrigin] || 'info';
  };


  // State for filter
  const [viewMode, setViewMode] = useState('');

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{ baseTheme: lightMode ? '' : dark, elements: { footer: "hidden" } }}
    >
      <SignedIn>
        <ThemeProvider theme={theme}>
          <DrawerProvider>
            <GlobalStateProvider>
              <CssBaseline />
              <Box sx={{ display: 'flex' }}>
                <Header />
                <LeftNavigation
                  lightMode={lightMode}
                  handleLightModeToggle={handleLightModeToggle}
                  handleFlashClick={handleFlashClick}
                  setFlashOrigin={setFlashOrigin}
                  setViewMode={setViewMode}
                  props={props}
                />
                <FlightsList
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
            </GlobalStateProvider>
          </DrawerProvider>
        </ThemeProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);