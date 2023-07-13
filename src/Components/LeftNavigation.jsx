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
import NewFormModal from './NewFormModal'

const drawer = (
    <Box sx={{ justifyContent: 'space-evenly' }}>
        <List>
            <ListItem key='Create' disablePadding>
                <ListItemButton>
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
            <ListItem key='View All' disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary='View All' />
                </ListItemButton>
            </ListItem>

        </List>

    </Box>
);

export default function LeftNaviation({ drawerWidth, props, handleDrawerToggle, mobileOpen }) {

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* <NewFormModal open={open} handleOpen={handleOpen} handleClose={handleClose} /> */}
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}