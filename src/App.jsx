import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser, RedirectToSignIn, SignIn, } from "@clerk/clerk-react";
import AppLayout from './Components/Layout/Layout';
import './App.css'

function App() {

  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={clerkPubKey}
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}>
      <SignedIn>
        <RotorRisk />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
        {/* <SignIn /> */}
      </SignedOut>
    </ClerkProvider>
  );
}
function RotorRisk() {

  const [lightMode, setLightMode] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const existingPreference = localStorage.getItem('lightMode');
    if (existingPreference) {
      setLightMode(existingPreference === 'true');
    }
    setLoading(false); // Mark loading as false when the effect completes
  }, []);

  // Wait until loading is false to render the content
  if (loading) {
    return null; // Or a loading indicator
  }

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
  }
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
  }
  const theme = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
      ... (lightMode ? lightPalette : darkPalette),
    },
  });

  const handleLightModeToggle = () => {
    const newLightMode = !lightMode;
    setLightMode(newLightMode);
    localStorage.setItem('lightMode', newLightMode.toString());
  };
  return (
    < ThemeProvider theme={theme} >
      <CssBaseline />
      <AppLayout lightMode={lightMode} handleLightModeToggle={handleLightModeToggle} />
    </ThemeProvider >
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <App />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  </React.StrictMode>
);
