import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './Header'
import LeftNavigation from './LeftNavigation'
import Body from './Body'
import './Layout.css'


const drawerWidth = 240;

function ResponsiveDrawer(props, lightMode, handleLightModeToggle) {

    // state for the navBar on a mobile format is saved here
    // so it can be passed as props both Header & LeftNavigation

    // Left Nav because that is the physical components
    // Header because that's where the hamburger toggler is
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
            <LeftNavigation drawerWidth={drawerWidth} props={props} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} lightMode={props.lightMode} handleLightModeToggle={props.handleLightModeToggle} />
            <Body drawerWidth={drawerWidth} />
        </Box>
    );
}


export default ResponsiveDrawer;