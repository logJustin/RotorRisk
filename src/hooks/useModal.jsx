import { useState } from 'react';
import { useFetchAircrews } from './useFetchAircrews';

export const useModal = () => {
    const [flightData, setFlightData] = useState(null);
    const [formMode, setFormMode] = useState('File');
    const [open, setOpen] = useState(false);

    const handleOpen = async (flight, mode) => {
        const aircrews = await useFetchAircrews();
        setFlightData(flight);
        setFormMode(mode);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return { flightData, formMode, open, handleOpen, handleClose };
};
