import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Box, Fab, Modal, CircularProgress, TextField, IconButton, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

export default function SuggestionsFloatingButton({ handleFlashClick, setFlashOrigin }) {

    // State for Modal Opening
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // state for loading indicator
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            suggestion: '',
            id: '',
            user_name: ''
        },
    });

    const resetForm = () => {
        setValue('suggestion', '');
    }

    // Submit Logic
    const onSubmit = async (data) => {
        setLoading(true)
        setFlashOrigin('Suggestion added successfully')
        data.id = uuid()
        data.user_name = '...pending'
        data.date = new Date();

        try {
            await axios.post('http://localhost:3001/api/add-suggesstion', data);
            await handleClose();
            await resetForm();
            handleFlashClick()
        } catch (error) {
            console.error('Error adding suggestion:', error);
        }
        setLoading(false)
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '16px',
                right: '16px',
                zIndex: 1000, // above other content,
            }}
        >
            <Fab size="small" variant="extended" onClick={handleOpen} sx={{ backgroundColor: '#fff' }}>
                <AddIcon sx={{ mr: 1 }} />
                <Typography sx={{
                    fontSize: '0.75rem',
                    padding: '8px',
                    maxWidth: '200px', // Set your maximum width here
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}>Suggestions</Typography>
            </Fab>


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
                    padding: '32px',
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


                    <form style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container justifyContent="space-evenly" spacing={2} sx={{ padding: '5px' }}>
                            <Grid xs={12}>
                                <Typography variant='h5' textAlign='center'>Submit a Suggestion</Typography>
                            </Grid>

                            {/* Suggestion */}
                            <Grid xs={12}>
                                <Controller
                                    name="suggestion"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField fullWidth required {...field} label="Suggestion" variant="outlined" multiline rows={3} />
                                    )}>
                                </Controller>
                            </Grid>
                        </Grid>

                        <Button color="inherit" variant="contained" type="submit" fullWidth sx={{ marginTop: '24px', marginBottom: '8px' }}>
                            Add Suggestion
                        </Button>

                    </form >
                </Box>
            </Modal >
        </Box>
    );
}