import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box, IconButton, Button, Select, MenuItem, Modal, FormControl, InputLabel, TextField, Typography, CircularProgress, Autocomplete
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import { useFlash } from '../../contexts/FlashContext';

export default function PrivilegesModal({ }) {
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    const [loading, setLoading] = useState(false);
    const [clerkUsers, setClerkUsers] = useState('');
    const [selectedPerson, setSelectedPerson] = useState()
    const { setFlashMessage, handleFlashClick } = useFlash()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ranks = ["PVT", "PV2", "PFC", "SPC", "CPL", "SGT", "SSG", "SFC", "MSG", "1SG", "CSM", "WO1", "CW2", "CW3", "CW4", "CW5", "2LT", "1LT", "CPT", "MAJ", "LTC", "COL"];

    // set state for the clerk users
    useEffect(() => {
        const fetchClerkUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${backend_url}/api/userList`)
                const formattedUsers = response.data.data.map(user => ({
                    name: `${user.publicMetadata.rank} ${user.lastName}`,
                    rank: user.publicMetadata.rank,
                    userId: user.id,
                    role: user.publicMetadata.role,
                    admin: user.publicMetadata.admin === true ? 'Yes' : 'No'
                }));
                setClerkUsers(formattedUsers);
            } catch (error) {
                console.error('Error fetching user list:', error);
                // Handle error state or notify the user
            } finally {
                setLoading(false);
            }
        };

        fetchClerkUsers();
    }, [open]);

    useEffect(() => {
        if (selectedPerson) {
            setValue('role', selectedPerson.role);
            setValue('userId', selectedPerson.userId);
            setValue('rank', selectedPerson.rank);
            setValue('admin', selectedPerson.admin);
        }
    }, [selectedPerson]);

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            role: '',
            userId: '',
            rank: '',
            admin: '',
        },
    });

    const handlePersonSelection = (personName) => {
        const selectedUser = clerkUsers.find(user => user.name === personName);
        if (selectedUser) {
            setSelectedPerson(selectedUser);
        }
    }

    const resetForm = () => {
        setValue('role', '');
        setValue('user', '');
        setValue('rank', '');
        setValue('admin', '');
    }

    // Submit Logic
    const onSubmit = async (data) => {
        setLoading(true)
        setFlashMessage('User permission update successfully')

        if (data.admin === "Yes") {
            data.admin = true
        } else if (data.admin === "No") {
            data.admin = false
        }

        try {
            await axios.post(`${backend_url}/api/updateRole`, data);
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
                        <SupervisedUserCircleIcon />
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

                    <Typography variant='h5' textAlign={'center'}>Admin Dashboard</Typography>
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
                            <Grid xs={12}>
                                <FormControl fullWidth component="fieldset">
                                    <InputLabel>Select User</InputLabel>
                                    <Controller
                                        name="user"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                label="Select User"
                                                onChange={(selectedValue) => {
                                                    field.onChange(selectedValue);
                                                    handlePersonSelection(selectedValue.target.value)
                                                }}
                                            >
                                                {clerkUsers.map((user) => (
                                                    <MenuItem key={user.name} value={user.name}>
                                                        {user.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>

                            {/* update rank */}
                            <Grid xs={12}>
                                <FormControl fullWidth component="fieldset">
                                    <InputLabel>Update Rank</InputLabel>
                                    <Controller
                                        name="rank"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                label="Update Rank"
                                                disabled={!selectedPerson}
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

                            {/* make admin */}
                            <Grid xs={12}>
                                <FormControl fullWidth component="fieldset">
                                    <InputLabel>Make Admin</InputLabel>
                                    <Controller
                                        name="admin"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                label="Make Admin"
                                                disabled={!selectedPerson}
                                            >
                                                {['Yes', 'No'].map((item) => (
                                                    <MenuItem key={item} value={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>

                            {/* update role */}
                            <Grid xs={12}>
                                <FormControl fullWidth component="fieldset">
                                    <InputLabel>Update Role</InputLabel>
                                    <Controller
                                        name="role"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                fullWidth
                                                label="Update Role"
                                                disabled={!selectedPerson}
                                            >
                                                {['Pilot', 'MBO', 'FMAA'].map((item) => (
                                                    <MenuItem key={item} value={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>

                            <Button color="inherit" variant="contained" type="submit" fullWidth sx={{ marginTop: '24px', marginBottom: '8px' }}>
                                Update User
                            </Button>

                        </Grid>
                    </form >
                </Box>
            </Modal >
        </ >
    );
}