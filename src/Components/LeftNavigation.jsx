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
import NewFormModal from './NewFormModal';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';



export default function LeftNaviation({ drawerWidth, props, handleDrawerToggle, mobileOpen, lightMode, handleLightModeToggle }) {
    // State for Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;


    const drawer = (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}>
            <Box
            // sx={{ height: '100%' }}
            >
                <List
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <ListItem key='View All' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary='View All' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Create' disablePadding>
                        <ListItemButton onClick={handleOpen}>
                            <ListItemIcon>
                                <AddCircleOutlineSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary='Create' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Brief' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckCircleOutlineSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary='Brief' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key='Approve' disablePadding>
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
                    {/* Dark Mode toggler */}
                    <ListItem key='Toggler' disablePadding>
                        <ListItemButton onClick={handleLightModeToggle}>
                            <ListItemIcon>
                                {lightMode ? <Brightness4Icon /> : <Brightness7Icon />}
                            </ListItemIcon>
                            <ListItemText primary={lightMode ? 'Dark Mode' : 'Light Mode'} />
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
            <NewFormModal open={open} handleClose={handleClose} />
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
                    // display: { xs: 'block', sm: 'none' },
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