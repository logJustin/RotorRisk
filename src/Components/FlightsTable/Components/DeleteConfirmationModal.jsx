import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import { Box, Button, Dialog, IconButton, Table, TableHead, TableRow, TableCell, Snackbar, CircularProgress, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Unstable_Grid2';

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
                        p: 2,
                        filter: loading ? 'blur(1px)' : 'none',
                        transition: 'filter 0.3s ease',
                    }}
                    variant='h5'
                    textAlign={'center'}>
                    Delete this flight?
                </Typography>
                <Grid container
                    // justifyContent="center"
                    alignItems="center"
                    sx={{
                        p: 2,
                        filter: loading ? 'blur(1px)' : 'none',
                        transition: 'filter 0.3s ease',
                        borderBottom: '1px grey solid',
                        borderTop: '1px grey solid'
                    }}>
                    <Grid marginBottom={'12px'} xs={3} md={3}>Date: {flight.date}</Grid>
                    <Grid marginBottom={'12px'} xs={3} md={3}>PC: {flight.pc}</Grid>
                    <Grid marginBottom={'12px'} xs={3} md={3}>Residual Risk: {flight.finalmitigatedrisk}</Grid>
                    <Grid marginBottom={'12px'} xs={3} md={3}>ETD: {flight.etd}</Grid>
                    <Grid marginBottom={'12px'} xs={12} md={3}>Mission: {flight.mission}</Grid>
                    <Grid marginBottom={'12px'} xs={12} md={9}>Mission Statement: {flight.missionstatement}</Grid>
                    <Grid marginBottom={'12px'} xs={3} md={3}>Aircrew Risk: {flight.aircrewmitigatedrisk}</Grid>
                    <Grid marginBottom={'12px'} xs={3} md={3}>Mission Risk: {flight.missionmitigatedrisk}</Grid>
                    <Grid marginBottom={'12px'} xs={3} md={3}>Weather Risk: {flight.weathermitigatedrisk}</Grid>
                    <Grid marginBottom={'12px'} xs={3} md={3}>Final Risk: {flight.finalmitigatedrisk}</Grid>

                </Grid>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                    filter: loading ? 'blur(1px)' : 'none',
                    transition: 'filter 0.3s ease',
                }}>
                    <Button variant="text"
                        onClick={handleClose}
                        sx={{ marginRight: '12px' }}
                    >Cancel</Button>
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
