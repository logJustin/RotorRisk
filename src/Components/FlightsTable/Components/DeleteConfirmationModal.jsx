import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Table, TableHead, TableRow, TableCell, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function DeleteConfirmationModal({ flight, fetchFlightsData, openFlash, setFlashOpen, }) {

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
    const handleDeleteRCOP = async (flight) => {
        try {
            await axios.delete('http://localhost:3001/api/delete-flight', { data: flight });
            await fetchFlightsData();
            handleClose()
            handleFlashClick()
        } catch (error) {
            console.error('Error deleting data from the front end:', error);
        }
    };

    return (
        <Box>
            <DeleteIcon onClick={() => {
                handleClickOpen();
            }} />
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                // Adjust the maxWidth and width properties to make the modal larger
                maxWidth="md"
                fullWidth
            >
                <DialogTitle sx={{ m: 0, p: 2, }} id="customized-dialog-title" align='center'>
                    Are you sure you want to delete this flight?
                </DialogTitle>
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
                <DialogContent dividers padding={'8px 16px'}
                    sx={{}}>
                    <Table size="small" >
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
                </DialogContent>
                <DialogActions
                    sx={{}}>
                    <Button variant="text"
                        onClick={() => {
                            handleClose();
                        }}
                    >Cancel</Button>
                    <Button
                        variant="contained"
                        onClick={async () => {
                            handleDeleteRCOP(flight);
                        }}>
                        Delete
                    </Button>
                </DialogActions>
            </BootstrapDialog>
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
