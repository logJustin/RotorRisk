import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import {
    Box, IconButton, Button, Select, MenuItem, Modal, FormControl, InputLabel, TextField, Typography, CircularProgress, Autocomplete
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButtonGroup, ToggleButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import { useOrganization } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useGlobalState } from '../../contexts/GlobalStateContext';

const positions = ["Pilot", "NRCM"];
const nrcmRanks = ["PVT", "PV2", "PFC", "SPC", "CPL", "SGT", "SSG", "SFC", "MSG", "CSM"];
const pilotRanks = ["WO1", "CW2", "CW3", "CW4", "CW5", "2LT", "1LT", "CPT", "MAJ", "LTC", "COL"];
const airframes = ["AH64D", "CH47F", "HH60M", "UH60V"];

export default function PrivilegesModal({ setFlashOrigin, handleFlashClick }) {
    const { aircrews, setAircrews, fetchAircrewsData } = useGlobalState();
    const { user } = useUser();
    // console.log(user)
    // State of Names avialable in Edit drop down
    const [names, setNames] = useState(aircrews.map((person) => {
        return person.name
    }))

    // State for Modal Opening
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            uuid: '',
            position: 'Pilot',
            rank: 'CW2',
            last_name: '',
            airframe: 'HH60M',
            aircraft: '',
            ng: '',
            atleast25inao: '',
            name: ''
        },
    });


    return (
        <>
            <ListItem key="AddCrew" disablePadding>
                <ListItemButton onClick={handleOpen}>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Admins" />
                </ListItemButton>
            </ListItem>
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
                    // filter: loading ? 'blur(0.3px)' : 'none',
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
                    {/* {loading && <CircularProgress color='inherit'
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />} */}
                    <form style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    // onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container justifyContent="space-evenly" spacing={2} sx={{
                            // boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            padding: '5px'
                        }}>
                            <Grid xs={12}>
                                <Typography variant='h5' textAlign='center'>Manage Admins</Typography>
                            </Grid>

                        </Grid>


                        <Grid container justifyContent="space-evenly" spacing={2} sx={{
                            padding: '5px',
                            margin: ' 24px 0px 0px 0px'
                        }}>
                            {/* Position */}
                            <Grid xs={12}>
                                <FormControl fullWidth component="fieldset">
                                    <InputLabel>Position</InputLabel>
                                    <Controller
                                        name="position"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                label="Position"
                                            >
                                                {positions.map((position) => (
                                                    <MenuItem key={position} value={position}>
                                                        {position}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>


                        <Button color="inherit" variant="contained" type="submit" fullWidth sx={{ marginTop: '24px', marginBottom: '8px' }}>
                            Submit Crewmember
                        </Button>

                    </form >
                </Box>
            </Modal >
        </ >
    );
}