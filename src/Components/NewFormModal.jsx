import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

export default function NewFormModal({ open, handleClose }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        bgcolor: '#272727',
        border: '2px solid #090909',
        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        height: '85%'
    };

    const [aircraft, setAircraft] = useState('HH60M');
    const [tailNumber, setTailNumber] = useState('20-20128');

    const handleAircraftChange = (event) => {
        setAircraft(event.target.value);
    };

    const handleTailNumberChange = (event) => {
        setTailNumber(event.target.value);
    };

    const airframes = [
        'AH64E',
        'CH47F',
        'HH60M',
        'UH60V'
    ];

    const tailNumbers = {
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

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

                <FormControl sx={{ margin: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {/* <DemoContainer components={['DateField']}> */}
                        {/* <DateField label="Basic date field" /> */}
                        <DateField
                            label="Flight Date"
                            // value={value}
                            // onChange={(newValue) => setValue(newValue)}
                            format="MM-DD-YYYY"
                        />
                        {/* </DemoContainer> */}
                    </LocalizationProvider>
                </FormControl>
                <FormControl sx={{ margin: 1, minWidth: '110px' }}>
                    <InputLabel id="aircraftSelect">Aircraft</InputLabel>
                    <Select
                        labelId="aircraftSelect"
                        value={aircraft}
                        label="aircraft"
                        onChange={handleAircraftChange}
                    >
                        {airframes.map((helicopter) => (
                            <MenuItem key={helicopter} value={helicopter}>{helicopter}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ margin: 1, minWidth: '140px' }}>
                    <InputLabel id="tailNumberSelect">Tail Number</InputLabel>
                    <Select
                        labelId="tailNumberSelect"
                        value={tailNumber}
                        label="tailNumber"
                        onChange={handleTailNumberChange}
                    >
                        {Object.entries(tailNumbers[aircraft]).map(([key, value]) => (
                            <MenuItem key={key} value={value}>{value}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Modal>
    );
}
