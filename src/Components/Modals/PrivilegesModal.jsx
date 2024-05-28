import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box, IconButton, Button, Select, MenuItem, Modal, FormControl, InputLabel, TextField, Typography, CircularProgress, Autocomplete
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButtonGroup, ToggleButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import { useUser } from "@clerk/clerk-react";
import { useFlash } from '../../contexts/FlashContext';

export default function PrivilegesModal({ }) {
    const [selectedPerson, setSelectedPerson] = useState(null)
    const { setFlashMessage, handleFlashClick } = useFlash()
    const [users, setUsers] = useState('');
    const userData = useUser();

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            role: 'pilot',
            userId: '',
            rank: '',
            admin: false,
            name: ''
        },
    });

    const resetForm = () => {
        setValue('name', '');
        setValue('role', '');
        setValue('userId', '');
        setValue('rank', '');
        setValue('admin', '');
    }

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3001/api/userList');
                const usersResponse = response.data.data;
                const formattedUsers = usersResponse.map(user => ({
                    name: `${user.publicMetadata.rank} ${user.lastName}`,
                    userId: user.id,
                    role: user.publicMetadata.role,
                    rank: user.publicMetadata.rank,
                    admin: user.publicMetadata.admin
                }));
                setUsers(formattedUsers);
            } catch (error) {
                console.error('Error fetching user list:', error);
                // Handle error state or notify the user
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handlePersonSelection = (person) => {
        console.log(person)
    }


    // State for Modal Opening
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // state for loading indicator
    const [loading, setLoading] = useState(false);

    // Submit Logic
    const onSubmit = async (data) => {
        setLoading(true)
        setFlashMessage('User permission update successfully')

        data.role = 'MBO'
        data.userId = userData.user.id
        data.rank = 'LTC';
        data.admin = false

        try {
            await axios.post('http://localhost:3001/api/updateRole', data);
            await handleClose();
            await resetForm();
            handleFlashClick()
        } catch (error) {
            console.error('Error adding suggestion:', error);
        }
        setLoading(false)
    }



    return (
        <>
            <ListItem key="AdminUpdate" disablePadding>
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
                            padding: '5px',
                            margin: ' 24px 0px 0px 0px'
                        }}>

                            {/* User */}
                            {/* <Grid xs={12} sm={6} md={4}>
                                <FormControl fullWidth component="fieldset">
                                    <InputLabel>User</InputLabel>
                                    <Controller
                                        name="user"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                required
                                                label="User"
                                                value={selectedPerson || ''} // Ensure the value is controlled
                                                onChange={(selectedValue) => {
                                                    field.onChange(selectedValue);
                                                    handlePersonSelection(selectedValue.target.value);
                                                }}
                                            >
                                                {users.map((user) => (
                                                    <MenuItem key={user.name} value={user.name}>
                                                        {user.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid> */}
                            <Grid xs={12} sm={6} md={3}>
                                <FormControl fullWidth component="fieldset">
                                    <InputLabel>User</InputLabel>
                                    <Controller
                                        name="user"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                label="User"
                                                onChange={(selectedValue) => {
                                                    field.onChange(selectedValue);
                                                    setValue('user', users[0].name);
                                                }}
                                            >
                                                {users.map((user) => (
                                                    <MenuItem key={user.name} value={user.name}>
                                                        {user.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>

                            {/* Position */}
                            {/* <Grid xs={12} sm={6} md={4}>
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
                            </Grid> */}

                            {/* Name */}
                            {/* <Grid xs={12} sm={6} md={4}>
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
                            </Grid> */}

                            {/* Aircraft Hours */}
                            {/* <Grid xs={12} sm={6} md={4}>
                                <Controller
                                    name="aircraft"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField fullWidth
                                            disabled={selectedPerson === null}
                                            required {...field} label="Total Aircraft Hours" placeholder='420.0' type='number' />
                                    )}
                                />
                            </Grid> */}

                            {/* NG Hours */}
                            {/* <Grid xs={12} sm={6} md={4}>
                                <Controller
                                    name="ng"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField fullWidth
                                            disabled={selectedPerson === null}
                                            required {...field} label="NG Flight Hours" placeholder='100.1' type='number' />
                                    )}
                                />
                            </Grid> */}

                            {/* 25 in ao */}
                            {/* <Grid xs={12} sm={6} md={4}>
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
                            </Grid> */}
                        </Grid>


                        <Button color="inherit" variant="contained" type="submit" fullWidth sx={{ marginTop: '24px', marginBottom: '8px' }}>
                            Update User
                        </Button>

                    </form >
                </Box>
            </Modal >
        </ >
    );
}