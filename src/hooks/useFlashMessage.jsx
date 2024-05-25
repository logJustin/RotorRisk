import { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from 'react';

export const useFlashMessage = () => {
    const [flashOrigin, setFlashOrigin] = useState('');
    const [openFlash, setFlashOpen] = useState(false);

    const handleFlashClick = () => {
        setFlashOpen(true);
    };

    const handleFlashClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFlashOpen(false);
    };

    const getSeverity = () => {
        if (flashOrigin === 'Flight added successfully' || flashOrigin === 'Crewmember added successfully') {
            return 'success';
        } else if (flashOrigin === 'Flight updated successfully' || flashOrigin === 'Crewmember updated successfully') {
            return 'info';
        } else if (flashOrigin === 'Flight Deleted Successfully') {
            return 'warning';
        } else {
            return 'info'; // Default value
        }
    };

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return { flashOrigin, setFlashOrigin, openFlash, handleFlashClick, handleFlashClose, getSeverity, Alert };
};
