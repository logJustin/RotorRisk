import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './Components/Layout'


function App() {
  const [lightMode, setLightMode] = useState(false);
  const handleLightModeToggle = () => {
    setLightMode(!lightMode)
  }
  const darkTheme = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout lightMode={lightMode} handleLightModeToggle={handleLightModeToggle} />
      </ThemeProvider>
    </>
  );
}

export default App;

