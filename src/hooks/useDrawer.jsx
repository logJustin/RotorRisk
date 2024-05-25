import { useState } from 'react';

export const useDrawer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    console.log('state', mobileOpen)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return { mobileOpen, handleDrawerToggle };
};
