import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import { Box, Button, Dialog, IconButton, Table, TableHead, TableRow, TableCell, Snackbar, CircularProgress, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

export default function DeleteConfirmationModal({ flight, fetchFlightsData, openFlash, setFlashOpen, setFlashOrigin }) {
    // Flash State & Functions
    const handleFlashClick = () => { setFlashOpen(true); };
    const handleFlashClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFlashOpen(false);
    };
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // Modal State & Functions
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    // state for loading indicator
    const [loading, setLoading] = useState(false);

    const handleDeleteRCOP = async (flight) => {
        setLoading(true);
        try {
            await axios.delete('http://localhost:3001/api/delete-flight', { data: flight });
            await fetchFlightsData();
            handleClose();
            setFlashOrigin('Flight Deleted Successfully');
            handleFlashClick();
        } catch (error) {
            console.error('Error deleting data from the front end:', error);
        }
        setLoading(false);
    };

    return (
        <Box>
            <DeleteIcon onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {loading && <CircularProgress color='inherit'
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />}
                <Typography
                    sx={{
                        p: 3,
                        filter: loading ? 'blur(1px)' : 'none',
                        transition: 'filter 0.3s ease',
                    }}
                    variant='h5'
                    textAlign={'center'}>
                    Delete this flight?
                </Typography>
                <Table size="small" sx={{
                    filter: loading ? 'blur(1px)' : 'none',
                    transition: 'filter 0.3s ease',
                }}>
                    <TableHead>
                        <TableRow key='firstRow'>
                            <TableCell>Date: {flight.date}</TableCell>
                            <TableCell>PC: {flight.pc}</TableCell>
                            <TableCell>Risk: {flight.finalmitigatedrisk}</TableCell>
                            <TableCell>ETD: {flight.etd}</TableCell>
                        </TableRow>
                        <TableRow key='secondRow'>
                            <TableCell colSpan={1}>Mission: {flight.mission}</TableCell>
                            <TableCell colSpan={3}>Mission Statement: {flight.missionstatement}</TableCell>
                        </TableRow>
                        <TableRow key='lastRow'>
                            <TableCell sx={{ borderBottom: 'none' }}>Aircrew Risk: {flight.aircrewmitigatedrisk}</TableCell>
                            <TableCell sx={{ borderBottom: 'none' }}>Mission Risk: {flight.missionmitigatedrisk}</TableCell>
                            <TableCell sx={{ borderBottom: 'none' }}>Weather Risk: {flight.weathermitigatedrisk}</TableCell>
                            <TableCell sx={{ borderBottom: 'none' }}>Final Risk: {flight.finalmitigatedrisk}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <Box sx={{
                    display: 'flex', justifyContent: 'flex-end', p: 2,
                    filter: loading ? 'blur(1px)' : 'none',
                    transition: 'filter 0.3s ease',
                }}>
                    <Button variant="text" onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        onClick={async () => {
                            handleDeleteRCOP(flight);
                        }}>
                        Delete
                    </Button>
                </Box>
            </Dialog>
            <Snackbar
                open={openFlash}
                autoHideDuration={3000}
                onClose={handleFlashClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{ width: '50%' }}
            >
                <Alert
                    onClose={handleFlashClose}
                    severity="warning"
                    sx={{ width: '100%' }}
                >
                    Flight Deleted Successfully
                </Alert>
            </Snackbar>
        </Box >
    );
}
