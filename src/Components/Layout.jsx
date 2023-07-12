import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './Header'
import LeftNavigation from './LeftNavigation'
import Body from './Body'
import './Layout.css'


const drawerWidth = 240;

function ResponsiveDrawer(props) {

    return (
        <Box sx={{ display: 'flex' }}>
            <Header drawerWidth={drawerWidth} />
            <LeftNavigation drawerWidth={drawerWidth} props={props} />
            <Body drawerWidth={drawerWidth} />
        </Box>
    );
}


export default ResponsiveDrawer;