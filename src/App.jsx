import React, { useState, useEffect, forwardRef } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Snackbar } from '@mui/material';
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser, RedirectToSignIn, SignIn } from "@clerk/clerk-react";
import { dark } from '@clerk/themes';
import SuggestionsFloatingButton from './Components/Layouts/SuggestionsFloatingButton';
import LeftNavigation from './Components/Layouts/LeftNavigation';
import FlightsList from './Components/FlightsTable/FlightsList';
import { lightPalette, darkPalette } from './ThemePalletes'
import { FlashContextProvider, useFlash } from './contexts/FlashContext';
import { GlobalStateProvider } from './contexts/GlobalStateContext';
import { DrawerProvider } from './contexts/DrawerContext';
import { FilterProvider } from './contexts/FilterContext';
import Header from './Components/Layouts/Header';

const AppComponents = ({ lightMode, handleLightModeToggle }) => {
  const { getSeverity, Alert, flashMessage, openFlash, handleFlashClose } = useFlash();

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <FilterProvider>
        <LeftNavigation
          lightMode={lightMode}
          handleLightModeToggle={handleLightModeToggle}
        />
        <FlightsList />
      </FilterProvider>
      <SuggestionsFloatingButton />
      <Snackbar
        open={openFlash}
        onClose={handleFlashClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{ width: '50%' }}
      >
        <Alert
          onClose={handleFlashClose}
          severity={getSeverity()}
          sx={{ mb: 5 }}
        >
          {flashMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

function App() {
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY || (() => { throw new Error("Missing Publishable Key"); })();

  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const existingPreference = localStorage.getItem('lightMode');
    if (existingPreference) {
      setLightMode(existingPreference === 'true');
    }
  }, []);

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

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{ baseTheme: lightMode ? '' : dark, elements: { footer: "hidden" } }}
    >
      <SignedIn>
        <ThemeProvider theme={theme}>
          <DrawerProvider>
            <GlobalStateProvider>
              <FlashContextProvider>
                <CssBaseline />
                <AppComponents lightMode={lightMode} handleLightModeToggle={handleLightModeToggle} />
              </FlashContextProvider>
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