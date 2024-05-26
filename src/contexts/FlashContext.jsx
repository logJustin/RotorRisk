import React, { createContext, useState, forwardRef } from 'react';
import MuiAlert from '@mui/material/Alert';

const FlashContext = createContext();

export const FlashContextProvider = ({ children }) => {
    // State for Flash messages
    const [flashMessage, setFlashMessage] = useState('');
    const [openFlash, setFlashOpen] = useState(false);

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleFlashClick = () => { setFlashOpen(true); };

    const handleFlashClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFlashOpen(false);
    };

    const getSeverity = () => {
        const severityMap = {
            'Flight added successfully': 'success',
            'Crewmember added successfully': 'success',
            'Flight updated successfully': 'info',
            'Crewmember updated successfully': 'info',
            'Flight Deleted Successfully': 'warning'
        };

        return severityMap[flashMessage] || 'info';
    };

    return (
        <FlashContext.Provider
            value={{ Alert, openFlash, flashMessage, setFlashMessage, handleFlashClick, handleFlashClose, getSeverity }}
        >
            {children}
        </FlashContext.Provider>
    );
};

export const useFlash = () => React.useContext(FlashContext);
