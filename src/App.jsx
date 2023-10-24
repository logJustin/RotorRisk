import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppLayout from './Components/Layout/Layout';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
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

  const theme = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
    },
  });

  const handleLightModeToggle = () => {
    const newLightMode = !lightMode;
    setLightMode(newLightMode);
    localStorage.setItem('lightMode', newLightMode.toString());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout lightMode={lightMode} handleLightModeToggle={handleLightModeToggle} />
    </ThemeProvider>
  );
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
