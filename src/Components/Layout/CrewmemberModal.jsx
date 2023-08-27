import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import {
    Box, IconButton, Snackbar, Button, Select, MenuItem, Modal, FormControl, InputLabel, TextField, Typography
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButtonGroup, ToggleButton } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';

import { useForm, Controller } from 'react-hook-form';

const positions = ["Pilot", "NRCM"];
const nrcmRanks = ["PVT", "PV2", "PFC", "SPC", "CPL", "SGT", "SSG", "SFC", "MSG", "CSM"];
const pilotRanks = ["WO1", "CW2", "CW3", "CW4", "CW5", "2LT", "1LT", "CPT", "MAJ", "LTC", "COL"];
const airframes = ["AH64E", "CH47F", "HH60M", "UH60V"];

export default function CrewmemberModal({ aircrews, fetchAircrewsData, setAircrews }) {


    const { control, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            uuid: uuid(),
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

    // State for rank array
    const [ranks, setRanks] = useState(pilotRanks)

    // State for Modal Opening
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // State for Add/Edit Toggle
    const [mode, setMode] = useState('Add');
    const handleChange = (event, newMode) => { setMode(newMode); };

    // State of Names avialable in Edit drop down
    const [names, setNames] = useState(aircrews.map((person) => {
        return person.name
    }))

    // State for Person to be edited
    const [selectedPerson, setSelectedPerson] = useState(null)
    // Update the form default values based on selected person when in Edit mode
    useEffect(() => {
        if (mode === 'Edit' && selectedPerson) {
            console.log(selectedPerson)
            setValue('name', selectedPerson.name);
            setValue('position', selectedPerson.position === 'pilot' ? 'Pilot' : 'NRCM');
            setValue('airframe', selectedPerson.airframe);
            setValue('aircraft', selectedPerson.aircraft);
            setValue('ng', selectedPerson.ng);
            setValue('atleast25inao', selectedPerson.atleast25inao === true ? 'True' : 'False');
        }
    }, [mode, selectedPerson]);
    // Handle selection of a person's name in Edit mode
    const handleNameSelection = (selectedName) => {
        const person = aircrews.find(person => person.name === selectedName);
        setSelectedPerson(person);
    };

    // update aircrews when Edit mode is clicked
    useEffect(() => {
        if (mode === 'Edit') {
            fetchAircrewsData()
            setNames(aircrews.map((person) => {
                return person.name
            }))
        }
    }, [mode])

    const lastName = watch('last_name')
    // update the form default values if a person is selected
    useEffect((name) => {
        if (mode === 'Edit') {
            console.log(name)
        }
    }, [lastName])

    // Submit Logic
    const onSubmit = (data) => {

        if (mode === 'Add') {
            const revisedData = {
                uuid: data.uuid,
                name: `${data.rank} ${data.last_name}`,
                position: data.position,
                airframe: data.airframe,
                aircraft: data.aircraft,
                ng: data.ng,
                atleast25inao: data.atleast25inao,
            };
            try {
                // Input logic for a post request
                console.log('Add', revisedData)
            } catch (error) {
                console.error('Error adding crewmember:', error);
            }
        } else if (mode === 'Edit') {
            const revisedData = {
                uuid: data.uuid,
                name: data.name,
                position: data.position,
                airframe: data.airframe,
                aircraft: data.aircraft,
                ng: data.ng,
                atleast25inao: data.atleast25inao,
            };
            try {
                // Input logic for a put request
                console.log('Edit', revisedData)
            } catch (error) {
                console.error('Error editing crewmember:', error);
            }
        }
    }


    return (
        <>
            <ListItem key="AddCrew" disablePadding>
                <ListItemButton onClick={handleOpen}>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Crewmembers" />
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
                    bgcolor: 'background.paper',
                    boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    padding: '32px',
                    marginbottom: '16px',
                    overflow: 'auto',
                    // height: '85%',
                    display: 'flex',
                    flexDirection: 'column'
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
                    <form style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container justifyContent="space-evenly" spacing={2} sx={{
                            // boxshadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            padding: '5px'
                        }}>
                            <Grid xs={12}>
                                <Typography variant='h5' textAlign='center'>Manage Crewmembers</Typography>
                            </Grid>
                            <Grid xs={12} sm={12} display="flex" justifyContent="center">
                                <ToggleButtonGroup
                                    value={mode}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Platform"
                                    size='medium'
                                >
                                    <ToggleButton value="Add">Add Mode</ToggleButton>
                                    <ToggleButton value="Edit">Edit Mode</ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>

                        {/* Container for Add */}
                        {mode === 'Add' && (
                            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                                padding: '5px',
                                margin: ' 24px 0px 0px 0px'
                            }}>
                                {/* Position */}
                                <Grid xs={12} sm={6} md={3}>
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
                                                    onChange={(selectedValue) => {
                                                        field.onChange(selectedValue);
                                                        setValue('rank', '');
                                                        selectedValue.target.value === 'NRCM' ? setRanks(nrcmRanks) : setRanks(pilotRanks);
                                                    }}
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

                                {/* Rank */}
                                <Grid xs={12} sm={6} md={3}>
                                    <FormControl fullWidth component="fieldset">
                                        <InputLabel>Rank</InputLabel>
                                        <Controller
                                            name="rank"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    fullWidth
                                                    required
                                                    label="Rank"
                                                >
                                                    {ranks.map((rank) => (
                                                        <MenuItem key={rank} value={rank}>
                                                            {rank}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        />
                                    </FormControl>
                                </Grid>

                                {/* Name */}
                                <Grid xs={12} sm={6} md={6}>
                                    <Controller
                                        name="last_name"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField fullWidth required {...field} label="Last Name" variant="outlined" inputProps={{ maxLength: 30 }} />
                                        )}>
                                    </Controller>
                                </Grid>

                                {/* Airframe */}
                                <Grid xs={12} sm={6} md={4}>
                                    <FormControl fullWidth component="fieldset">
                                        <InputLabel>Airframe</InputLabel>
                                        <Controller
                                            name="airframe"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    fullWidth
                                                    required
                                                    label="Airframe"
                                                >
                                                    {airframes.map((aircraft) => (
                                                        <MenuItem key={aircraft} value={aircraft}>
                                                            {aircraft}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        />
                                    </FormControl>
                                </Grid>

                                {/* Aircraft Hours */}
                                <Grid xs={12} sm={6} md={4}>
                                    <Controller
                                        name="aircraft"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField fullWidth required {...field} label="Total Aircraft Hours" placeholder='420.0' type='number' />
                                        )}
                                    />
                                </Grid>

                                {/* NG Hours */}
                                <Grid xs={12} sm={6} md={4}>
                                    <Controller
                                        name="ng"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField fullWidth required {...field} label="NG Flight Hours" placeholder='100.1' type='number' />
                                        )}
                                    />
                                </Grid>

                                {/* 25 in ao */}
                                <Grid xs={12}>
                                    <FormControl fullWidth component="fieldset">
                                        <InputLabel>Greater than 25 Hours in AO</InputLabel>
                                        <Controller
                                            name="atleast25inao"
                                            required
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    fullWidth
                                                    required
                                                    label="Greater than 25 Hours in AO"
                                                >
                                                    {['True', 'False'].map((boolean) => (
                                                        <MenuItem key={boolean} value={boolean}>
                                                            {boolean}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        )}
                        {/* Container for Edit */}

                        {/* Insert a simple textfield to mimic the above container */}
                        {mode === 'Edit' && (
                            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                                padding: '5px',
                                margin: ' 24px 0px 0px 0px'
                            }}>

                                {/* Airframe */}
                                <Grid xs={12} sm={6} md={4}>
                                    <FormControl fullWidth component="fieldset">
                                        <InputLabel>Airframe</InputLabel>
                                        <Controller
                                            name="airframe"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    fullWidth
                                                    required
                                                    label="Airframe"
                                                >
                                                    {airframes.map((aircraft) => (
                                                        <MenuItem key={aircraft} value={aircraft}>
                                                            {aircraft}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        />
                                    </FormControl>
                                </Grid>

                                {/* Position */}
                                <Grid xs={12} sm={6} md={4}>
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
                                                    onChange={(selectedValue) => {
                                                        field.onChange(selectedValue);
                                                        setValue('rank', '');
                                                        selectedValue.target.value === 'NRCM' ? setRanks(nrcmRanks) : setRanks(pilotRanks);
                                                    }}
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

                                {/* Name */}
                                <Grid xs={12} sm={6} md={4}>
                                    <FormControl fullWidth component="fieldset">
                                        <InputLabel>Name</InputLabel>
                                        <Controller
                                            name="name"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    fullWidth
                                                    required
                                                    label="Name"
                                                    onChange={e => {
                                                        field.onChange(e);
                                                        handleNameSelection(e.target.value);
                                                    }}
                                                >
                                                    {names.map((name) => (
                                                        <MenuItem key={name} value={name}>
                                                            {name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        />
                                    </FormControl>
                                </Grid>

                                {/* Aircraft Hours */}
                                <Grid xs={12} sm={6} md={4}>
                                    <Controller
                                        name="aircraft"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField fullWidth required {...field} label="Total Aircraft Hours" placeholder='420.0' type='number' />
                                        )}
                                    />
                                </Grid>

                                {/* NG Hours */}
                                <Grid xs={12} sm={6} md={4}>
                                    <Controller
                                        name="ng"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField fullWidth required {...field} label="NG Flight Hours" placeholder='100.1' type='number' />
                                        )}
                                    />
                                </Grid>

                                {/* 25 in ao */}
                                <Grid xs={12} sm={6} md={4}>
                                    <FormControl fullWidth component="fieldset">
                                        <InputLabel>Greater than 25 Hours in AO</InputLabel>
                                        <Controller
                                            name="atleast25inao"
                                            required
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    fullWidth
                                                    required
                                                    label="Greater than 25 Hours in AO"
                                                >
                                                    {['True', 'False'].map((boolean) => (
                                                        <MenuItem key={boolean} value={boolean}>
                                                            {boolean}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        )}
                        <Button color="inherit" variant="contained" type="submit" fullWidth sx={{ marginTop: '24px', marginBottom: '8px' }}>
                            {mode} Crewmember
                        </Button>

                    </form >
                </Box>
            </Modal >
        </ >
    );
}