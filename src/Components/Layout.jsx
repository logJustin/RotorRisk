import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './Header'
import LeftNavigation from './LeftNavigation'
import Body from './Body'
import './Layout.css'


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
            <LeftNavigation drawerWidth={drawerWidth} props={props} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Body drawerWidth={drawerWidth} />
        </Box>
    );
}


export default ResponsiveDrawer;