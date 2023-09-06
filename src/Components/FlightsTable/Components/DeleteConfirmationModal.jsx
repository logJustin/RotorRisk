import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Modal, Dialog, IconButton, CircularProgress, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Unstable_Grid2';

export default function DeleteConfirmationModal({ flight, fetchFlightsData, openFlash, setFlashOpen, handleFlashClick, setFlashOrigin }) {

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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    maxWidth: '900px',
                    maxHeight: '85%',
                    bgcolor: 'background.paper',
                    boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    padding: '16px',
                    marginbottom: '16px',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    filter: loading ? 'blur(0.3px)' : 'none',
                    transition: 'filter 0.3s ease',
                }}>
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
                        alignItems="center"
                        sx={{
                            p: 2,
                            filter: loading ? 'blur(1px)' : 'none',
                            transition: 'filter 0.3s ease',
                            borderBottom: '1px grey solid',
                            borderTop: '1px grey solid',
                            boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
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
                </Box>
            </Modal>
        </Box >
    );
}
