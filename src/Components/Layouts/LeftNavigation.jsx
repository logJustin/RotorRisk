import * as React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import ListIcon from '@mui/icons-material/List';
import FlightModal from '../Modals/FlightModal/FlightModal';
import PrivilegesModal from '../Modals/PrivilegesModal';
import CrewmemberModal from '../Modals/CrewmemberModal';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import { useClerk } from "@clerk/clerk-react";
import { useDrawer } from '../../contexts/DrawerContext'
import { useGlobalState } from '../../contexts/GlobalStateContext';
import { useFlash } from '../../contexts/FlashContext';
import { useFilter } from '../../contexts/FilterContext';
import { useUser } from '@clerk/clerk-react';

export default function LeftNavigation({ lightMode, handleLightModeToggle }) {
    const userData = useUser();
    const userRole = userData.user.publicMetadata.role
    const isAdmin = userData.user.publicMetadata.admin

    const { signOut } = useClerk();
    const { mobileOpen, handleDrawerToggle } = useDrawer();
    const { modalOpen, handleModalOpen, drawerWidth } = useGlobalState();
    const { handleFlashClick, setFlashMessage } = useFlash();
    const { setViewMode } = useFilter();

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

                    <ListItem key='File' disablePadding>
                        <ListItemButton onClick={() => { handleModalOpen('', 'File') }}>
                            <ListItemIcon>
                                <AddCircleOutlineSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary='File' />
                        </ListItemButton>
                    </ListItem>

                    {(userRole === 'MBO' || userRole === 'FMAA') &&
                        <ListItem key='Brief' disablePadding onClick={() => { setViewMode('briefer') }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CheckCircleOutlineSharpIcon />
                                </ListItemIcon>
                                <ListItemText primary='Brief' />
                            </ListItemButton>
                        </ListItem>
                    }

                    {userRole === 'FMAA' &&
                        <ListItem key='Approve' disablePadding onClick={() => { setViewMode('approver') }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CheckCircleSharpIcon />
                                </ListItemIcon>
                                <ListItemText primary='Approve' />
                            </ListItemButton>
                        </ListItem>
                    }


                </List >
            </Box >
            <Box sx={{ mt: 'auto' }}>
                <List>
                    {isAdmin === true &&
                        <>
                            <CrewmemberModal
                                setFlashMessage={setFlashMessage}
                                handleFlashClick={handleFlashClick}
                            />
                            <PrivilegesModal
                                setFlashMessage={setFlashMessage}
                                handleFlashClick={handleFlashClick}
                            />
                        </>
                    }
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
            <FlightModal
                open={modalOpen}
                lightMode={lightMode}
            />

            {/* Tablet & Mobile Drawer */}
            <Drawer
                // container={container}
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