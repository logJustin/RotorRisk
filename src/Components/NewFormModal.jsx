import React, { useState } from 'react';
import { Box, Modal, InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Unstable_Grid2';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


export default function NewFormModal({ open, handleClose, lightMode, handleLightModeToggle }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        bgcolor: 'background.paper',
        border: '2px solid #090909',
        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        height: '85%',
        flexGrow: 1
    };

    const [aircraft, setAircraft] = useState('HH60M');
    const [tailNumber, setTailNumber] = useState('20-20128');
    const [pc, setPC] = useState('');
    const [pcSeat, setPCSeat] = useState('L');
    const [pi, setPI] = useState('');
    const [piSeat, setPISeat] = useState('R');
    const [nrcm1, setNRCM1] = useState('');
    const [nrcm2, setNRCM2] = useState('');
    const [nrcm3, setNRCM3] = useState('');

    const handleAircraftChange = (event) => {
        setAircraft(event.target.value);
    };

    const handleTailNumberChange = (event) => {
        setTailNumber(event.target.value);
    };
    const handlePCChange = (event) => {
        setPC(event.target.value);
    };
    const handlePCSeatChange = (event) => {
        setPCSeat(event.target.value);
    };
    const handlePIChange = (event) => {
        setPI(event.target.value);
    };
    const handlePISeatChange = (event) => {
        setPISeat(event.target.value);
    };
    const handleNRCM1Change = (event) => {
        setNRCM1(event.target.value);
    };
    const handleNRCM2Change = (event) => {
        setNRCM2(event.target.value);
    };
    const handleNRCM3Change = (event) => {
        setNRCM3(event.target.value);
    };

    const aircraftInfo = {
        HH60M: [
            '20-20128',
            '20-20129',
            '20-20130',
            '20-20131',
            '20-20132',
            '20-20133'
        ],
        AH64E: [
            '19-20134',
            '19-20135',
            '19-20136',
            '19-20137',
            '19-20138',
            '19-20139',
        ],
        CH47F: [
            '18-20134',
            '18-20135',
            '18-20136',
            '18-20137',
            '18-20138',
            '18-20139',
        ],
        UH60V: [
            '17-20134',
            '17-20135',
            '17-20136',
            '17-20137',
            '17-20138',
            '17-20139',
        ],

    };

    const aircrews = {
        'CPT Reynolds': {
            position: 'pilot',
            aircraft: 500,
            NG: 115
        },
        'CPT Smith': {
            position: 'pilot',
            aircraft: 310,
            NG: 115
        },
        'SGT Daniels': {
            position: 'nrcm',
            aircraft: 2050,
            NG: 800
        },
        'CPT Johnson': {
            position: 'pilot',
            aircraft: 1520,
            NG: 620
        },
        'CPT Williams': {
            position: 'pilot',
            aircraft: 920,
            NG: 260
        },
        '1LT Davis': {
            position: 'pilot',
            aircraft: 1830,
            NG: 470
        },
        '1LT Anderson': {
            position: 'pilot',
            aircraft: 1150,
            NG: 540
        },
        'SGT Martinez': {
            position: 'nrcm',
            aircraft: 630,
            NG: 310
        },
        'SGT Walker': {
            position: 'nrcm',
            aircraft: 1240,
            NG: 870
        },
        'CPL Lopez': {
            position: 'nrcm',
            aircraft: 1480,
            NG: 720
        },
        'CPL Scott': {
            position: 'nrcm',
            aircraft: 860,
            NG: 420
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Flight Date" />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="aircraftSelect">Aircraft</InputLabel>
                            <Select
                                labelId="aircraftSelect"
                                value={aircraft}
                                label="aircraft"
                                onChange={handleAircraftChange}
                            >
                                {Object.entries(aircraftInfo).map(([helicopter]) => (
                                    <MenuItem key={helicopter} value={helicopter}>{helicopter}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="tailNumberSelect">Tail Number</InputLabel>
                            <Select
                                labelId="tailNumberSelect"
                                value={tailNumber}
                                label="Tail Number"
                                onChange={handleTailNumberChange}
                            >
                                {Object.entries(aircraftInfo[aircraft]).map(([key, value]) => (
                                    <MenuItem key={key} value={value}>{value}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={3}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Mission" variant="outlined" />
                    </Grid>
                    <Grid xs={9}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Mission Statement" variant="outlined" />
                    </Grid>
                    <Grid xs={12}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Route" variant="outlined" />
                    </Grid>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="pcSelect">Pilot in Command</InputLabel>
                            <Select
                                labelId="pcSelect"
                                value={pc}
                                label="Pilot in Command"
                                onChange={handlePCChange}
                            >
                                {Object.entries(aircrews)
                                    .filter(([crewmember, info]) => info.position === 'pilot')
                                    .map(([crewmember, info]) => (
                                        <MenuItem key={crewmember} value={crewmember}>
                                            {crewmember}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>


                    </Grid>
                    <Grid xs={2}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="pcSeatSelect">PC Seat</InputLabel>
                            <Select
                                labelId="pcSeatSelect"
                                value={pcSeat}
                                label="PC Seat"
                                onChange={handlePCSeatChange}
                            >
                                {["L", "R"].map((seat) => (
                                    <MenuItem key={seat} value={seat}>{seat}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                    </Grid>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="piSelect">Pilot</InputLabel>
                            <Select
                                labelId="piSelect"
                                value={pi}
                                label="Pilot"
                                onChange={handlePIChange}
                            >
                                {Object.entries(aircrews)
                                    .filter(([crewmember, info]) => info.position === 'pilot')
                                    .map(([crewmember, info]) => (
                                        <MenuItem key={crewmember} value={crewmember}>
                                            {crewmember}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={2}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="piSeatSelect">PI Seat</InputLabel>
                            <Select
                                labelId="piSeatSelect"
                                value={piSeat}
                                label="PI Seat"
                                onChange={handlePISeatChange}
                            >
                                {["L", "R"].map((seat) => (
                                    <MenuItem key={seat} value={seat}>{seat}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="nrcm1Select">NRCM 1</InputLabel>
                            <Select
                                labelId="nrcm1Select"
                                value={nrcm1}
                                label="NRCM 1"
                                onChange={handleNRCM1Change}
                            >
                                {Object.entries(aircrews)
                                    .filter(([crewmember, info]) => info.position === 'nrcm')
                                    .map(([crewmember, info]) => (
                                        <MenuItem key={crewmember} value={crewmember}>
                                            {crewmember}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="nrcm2Select">NRCM 2</InputLabel>
                            <Select
                                labelId="nrcm2Select"
                                value={nrcm2}
                                label="NRCM 2"
                                onChange={handleNRCM2Change}
                            >
                                {Object.entries(aircrews)
                                    .filter(([crewmember, info]) => info.position === 'nrcm')
                                    .map(([crewmember, info]) => (
                                        <MenuItem key={crewmember} value={crewmember}>
                                            {crewmember}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={4}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="nrcm3Select">NRCM 3</InputLabel>
                            <Select
                                labelId="nrcm3Select"
                                value={nrcm3}
                                label="NRCM 3"
                                onChange={handleNRCM3Change}
                            >
                                {Object.entries(aircrews)
                                    .filter(([crewmember, info]) => info.position === 'nrcm')
                                    .map(([crewmember, info]) => (
                                        <MenuItem key={crewmember} value={crewmember}>
                                            {crewmember}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={12}>
                        <FormControl sx={{ width: '100%' }} component="fieldset">
                            <FormLabel sx={{ textAlign: 'center' }} component="legend">Flight Conditions</FormLabel>
                            <FormGroup sx={{ justifyContent: 'space-evenly' }} aria-label="position" row>
                                <FormControlLabel
                                    value="1"
                                    control={<Checkbox />}
                                    label="1 - Day"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Checkbox />}
                                    label="2 - Night"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="3"
                                    control={<Checkbox />}
                                    label="3 - NG"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="4"
                                    control={<Checkbox />}
                                    label="4 - IMC/SIM IMC"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="5"
                                    control={<Checkbox />}
                                    label="5 - Multi Aircraft"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="6"
                                    control={<Checkbox />}
                                    label="6 - Terrain Flight"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Modal >
    );
}
