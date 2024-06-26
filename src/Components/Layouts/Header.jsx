import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserButton } from "@clerk/clerk-react";
import { useDrawer } from '../../contexts/DrawerContext'
import { useGlobalState } from '../../contexts/GlobalStateContext';

export default function Header() {

    const { drawerWidth } = useGlobalState();
    const { handleDrawerToggle } = useDrawer();

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
            }}
        >

            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" width="25" height="25" viewBox="0 0 30 30">
                    <path d="M17.984375 3.9863281 A 1.0001 1.0001 0 0 0 17 5L7 5 A 1.0001 1.0001 0 1 0 7 7L17 7L17 10L2.5996094 10L2.1777344 7.8828125C2.0747344 7.3698125 1.6236094 7 1.0996094 7C0.49260938 7 -1.4802974e-16 7.4926094 0 8.0996094L0 11.611328C0 12.447328 0.51678125 13.193375 1.3007812 13.484375C3.0507812 14.133375 6.065375 15.243406 7.109375 15.566406C8.614375 16.032406 10.644531 19.707031 10.644531 19.707031L10.648438 19.701172C11.637325 21.656206 13.659112 23 16 23L24 23C25.862 23 27.412375 21.722 27.859375 20L25.472656 20C23.957656 20 22.572531 19.144062 21.894531 17.789062L20.722656 15.447266C20.390656 14.782266 20.874188 14 21.617188 14L26.921875 14C25.537875 11.611 22.959 10 20 10L19 10L19 7L29 7 A 1.0001 1.0001 0 1 0 29 5L19 5 A 1.0001 1.0001 0 0 0 17.984375 3.9863281 z M 28.955078 22.988281 A 1.0001 1.0001 0 0 0 28.105469 23.552734C28.105469 23.552734 27.332093 25 25.996094 25L10 25 A 1.0001 1.0001 0 1 0 10 27L25.996094 27C28.664094 27 29.894531 24.447266 29.894531 24.447266 A 1.0001 1.0001 0 0 0 28.955078 22.988281 z" />
                </svg>
                <Typography variant="h6" noWrap component="div" sx={{ ml: 2.5, fontWeight: "bold" }}>
                    Rotor Risk
                </Typography>
                <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'block' } }}>
                    : Managing Flight Risk Assessments
                </Typography>

                <Box style={{ marginLeft: 'auto' }}>
                    <UserButton />
                </Box>
            </Toolbar>
        </AppBar>
    )
}