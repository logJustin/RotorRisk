import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import ListIcon from '@mui/icons-material/List';
import FormModal from '../Modal/FormModal';
import PrivilegesModal from '../PrivilegesModal/PrivilegesModal';
import CrewmemberModal from '../CrewmemberModal/CrewmemberModal';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import { useClerk } from "@clerk/clerk-react";
import { useDrawer } from '../../contexts/DrawerContext'

export default function LeftNavigation({ drawerWidth, props, lightMode, handleLightModeToggle, open, handleClose, handleOpen, flightData, formMode, fetchFlightsData, aircrews, fetchAircrewsData, handleFlashClick, setFlashOrigin, setViewMode }) {

    const { signOut } = useClerk();
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const { mobileOpen, handleDrawerToggle } = useDrawer();

    const drawer = (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}>
            <Box>
                <List
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <ListItem key='View All' disablePadding onClick={() => { setViewMode('') }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary='View All' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Create' disablePadding>
                        <ListItemButton onClick={() => { handleOpen('', 'File') }}>
                            <ListItemIcon>
                                <AddCircleOutlineSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary='Create' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Brief' disablePadding onClick={() => { setViewMode('briefer') }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckCircleOutlineSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary='Brief' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Approve' disablePadding onClick={() => { setViewMode('approver') }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckCircleSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary='Approve' />
                        </ListItemButton>
                    </ListItem>




                </List >
            </Box >
            <Box sx={{ mt: 'auto' }}>
                <List>
                    <PrivilegesModal
                        aircrews={aircrews}
                        fetchAircrewsData={fetchAircrewsData}
                        setFlashOrigin={setFlashOrigin}
                        handleFlashClick={handleFlashClick}
                    />
                    <CrewmemberModal
                        aircrews={aircrews}
                        fetchAircrewsData={fetchAircrewsData}
                        setFlashOrigin={setFlashOrigin}
                        handleFlashClick={handleFlashClick}
                    />
                    {/* Dark Mode toggler */}
                    <ListItem key='Toggler' disablePadding>
                        <ListItemButton onClick={handleLightModeToggle}>
                            <ListItemIcon>
                                {lightMode ? <Brightness4Icon /> : <Brightness7Icon />}
                            </ListItemIcon>
                            <ListItemText primary={lightMode ? 'Dark Mode' : 'Light Mode'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='signout' disablePadding>
                        <ListItemButton onClick={() => signOut()}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Sign out'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );


    return (
        <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
        >
            <FormModal
                open={open}
                handleClose={handleClose}
                lightMode={props.lightMode}
                flightData={flightData}
                formMode={formMode}
                fetchFlightsData={fetchFlightsData}
                aircrews={aircrews}
                handleFlashClick={handleFlashClick}
                setFlashOrigin={setFlashOrigin}
            />

            {/* Tablet & Mobile Drawer */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    // display: { xs: 'none', sm: 'block' },
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box >
    )
}