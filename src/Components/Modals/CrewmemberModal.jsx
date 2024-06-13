import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import {
    Box, IconButton, Button, Select, MenuItem, Modal, FormControl, InputLabel, TextField, Typography, CircularProgress, Autocomplete
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import { useGlobalState } from '../../contexts/GlobalStateContext';
import { useFlash } from '../../contexts/FlashContext';

const positions = ["Pilot", "NRCM"];
const nrcmRanks = ["PVT", "PV2", "PFC", "SPC", "CPL", "SGT", "SSG", "SFC", "MSG", "CSM"];
const pilotRanks = ["WO1", "CW2", "CW3", "CW4", "CW5", "2LT", "1LT", "CPT", "MAJ", "LTC", "COL"];
const airframes = ["AH64D", "CH47F", "HH60M", "UH60V"];

export default function CrewmemberModal() {
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    const { aircrews, setAircrews, fetchAircrewsData } = useGlobalState();
    const { setFlashMessage, handleFlashClick } = useFlash();

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            uuid: '',
            position: positions[0],
            rank: pilotRanks[1],
            last_name: '',
            airframe: airframes[2],
            aircraft: '',
            ng: '',
            atleast25inao: '',
            name: ''
        },
    });

    const resetForm = () => {
        setValue('name', '');
        setName('')
        setValue('last_name', '');
        setValue('rank', '');
        setValue('position', '');
        setValue('airframe', '');
        setValue('aircraft', '');
        setValue('ng', '');
        setValue('atleast25inao', '');
        setValue('uuid', '');
    }

    // State for rank array
    const [ranks, setRanks] = useState(pilotRanks)

    // State for Modal Opening
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // State for Add/Edit Toggle
    const [mode, setMode] = useState('Add');
    const handleChange = (event, newMode) => {
        setMode(newMode);
        resetForm();
    };

    // State for Helicopter to be edited
    const [selectedHelicopter, setSelectedHelicopter] = useState('HH60M')
    // State for Person to be edited
    const [selectedPosition, setSelectedPosition] = useState('')

    // State of Names avialable in Edit drop down
    const [names, setNames] = useState(aircrews.map((person) => {
        return person.name
    }))

    // state for loading indicator
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (mode === 'Edit' && selectedHelicopter === 'AH64D') {
            setValue('position', 'Pilot')
            setSelectedPosition('Pilot')
        }
        if (mode === 'Edit' && selectedHelicopter) {
            const filteredNames = aircrews
                .filter(person => person.airframe === selectedHelicopter)
                .filter(person => person.position === selectedPosition.toLowerCase())
                .map(person => person.name);
            setNames(filteredNames);
        }
    }, [mode, selectedHelicopter, selectedPosition]);

    // Handle selection of a person's name in Edit mode
    const handleHelicopterSelection = (helicopter) => {
        setSelectedHelicopter(helicopter);
    };
    // State for Person to be edited
    const [selectedPerson, setSelectedPerson] = useState(null)
    // Update the form default values based on selected person when in Edit mode
    useEffect(() => {
        if ((mode === 'Edit' || mode === 'Delete') && selectedPerson) {
            setValue('name', selectedPerson.name);
            setValue('position', selectedPerson.position === 'pilot' ? 'Pilot' : 'NRCM');
            setValue('airframe', selectedPerson.airframe);
            setValue('aircraft', selectedPerson.aircraft);
            setValue('ng', selectedPerson.ng);
            setValue('atleast25inao', selectedPerson.atleast25inao === true ? 'True' : 'False');
            setValue('uuid', selectedPerson.uuid);
        }
    }, [mode, selectedPerson]);

    // State for name, so it can updated in Autocomplete in edit
    const [name, setName] = useState('')

    // Handle selection of a person's name in Edit mode
    const handleNameSelection = (selectedName) => {
        const person = aircrews.find(person => person.name === selectedName);
        setSelectedPerson(person);
        setName(selectedName)
    };

    const handleNameInputChange = (event) => {
        const newValue = event.target.value;
        setName(newValue); // Update the selected name when the user types into the TextField
    };

    // update aircrews when Edit or Delete mode is clicked
    useEffect(() => {
        const fetchData = async () => {
            if (mode === 'Edit' || mode === 'Delete') {
                await fetchAircrewsData(setAircrews);
                setNames(aircrews.map((person) => person.name).sort((a, b) => a.localeCompare(b)));
                resetForm();
            }
        };

        fetchData();
    }, [mode]);

    // Submit Logic
    const onSubmit = async (data) => {
        console.log('data', data);
        setLoading(true);

        const isAddMode = mode === 'Add';
        let successMessage = isAddMode ? 'Crewmember added successfully' : 'Crewmember updated successfully';

        const revisedData = {
            uuid: isAddMode ? uuid() : data.uuid,
            name: isAddMode ? `${data.rank} ${data.last_name}` : data.name,
            position: data.position.toLowerCase(),
            airframe: data.airframe,
            aircraft: data.aircraft,
            ng: data.ng,
            atleast25inao: data.atleast25inao.toLowerCase(),
        };

        try {
            if (mode === "Delete") {
                await axios.delete(`${backend_url}/api/delete-crewmember`, { data: { uuid: revisedData.uuid } });
                successMessage = 'Crewmember deleted successfully';
            } else {
                await axios.post(`${backend_url}/api/add-crewmember`, revisedData);
            }

            setFlashMessage(successMessage);
            await fetchAircrewsData(setAircrews);
            await handleClose();
            await resetForm();
            handleFlashClick();
        } catch (error) {
            console.error(`Error ${isAddMode ? 'adding' : (mode === 'Delete' ? 'deleting' : 'editing')} crewmember:`, error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <ListItem key="AddCrew" disablePadding>
                <ListItemButton onClick={handleOpen}>
                    <ListItemIcon>
                        <SupervisedUserCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage ACMs" />
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
                                    <ToggleButton value="Delete">Delete Mode</ToggleButton>
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
                                                    disabled={selectedHelicopter === 'AH64D'}
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
                                                    onChange={(selectedValue) => {
                                                        field.onChange(selectedValue)
                                                        setSelectedHelicopter(selectedValue.target.value)
                                                        if (selectedValue.target.value === 'AH64D') {
                                                            setValue('position', 'Pilot')
                                                            setValue('rank', '')
                                                            setRanks(pilotRanks)
                                                        }
                                                    }}
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
                                                    onChange={(selectedValue) => {
                                                        field.onChange(selectedValue);
                                                        handleHelicopterSelection(selectedValue.target.value)
                                                        setValue('name', '')
                                                    }}
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
                                                    disabled={selectedHelicopter === 'AH64D'}
                                                    onChange={(selectedValue) => {
                                                        field.onChange(selectedValue);
                                                        setValue('rank', '');
                                                        selectedValue.target.value === 'NRCM' ? setRanks(nrcmRanks) : setRanks(pilotRanks);
                                                        setSelectedPosition(selectedValue.target.value)
                                                        setSelectedPerson('')
                                                        setValue('name', '')
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
                                        <Controller
                                            name="name"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <Autocomplete
                                                    {...field}
                                                    freeSolo
                                                    fullWidth
                                                    required
                                                    options={names}
                                                    onChange={(event, newValue) => {
                                                        field.onChange(newValue);
                                                        handleNameSelection(newValue);
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Name"
                                                            onChange={handleNameInputChange}
                                                        />
                                                    )}
                                                />
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
                                            <TextField fullWidth
                                                disabled={selectedPerson === null}
                                                required {...field} label="Total Aircraft Hours" placeholder='420.0' type='number' />
                                        )}
                                    />
                                </Grid>

                                {/* NG Hours */}
                                <Grid xs={12} sm={6} md={4}>
                                    <Controller
                                        name="ng"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField fullWidth
                                                disabled={selectedPerson === null}
                                                required {...field} label="NG Flight Hours" placeholder='100.1' type='number' />
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
                                                    disabled={selectedPerson === null}
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

                        {/* Container for Delete */}
                        {mode === 'Delete' && (
                            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                                padding: '5px',
                                margin: ' 24px 0px 0px 0px'
                            }}>

                                {/* Name */}
                                <Grid xs={12}>
                                    <FormControl fullWidth component="fieldset">
                                        <Controller
                                            name="deleteNames"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <Autocomplete
                                                    {...field}
                                                    freeSolo
                                                    fullWidth
                                                    required
                                                    options={names}
                                                    onChange={(event, newValue) => {
                                                        field.onChange(newValue);
                                                        handleNameSelection(newValue);
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Delete Name"
                                                            onChange={handleNameInputChange}
                                                        />
                                                    )}
                                                />
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