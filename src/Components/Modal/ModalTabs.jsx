import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Modal, InputLabel, MenuItem, FormControl, Select, TextField, Paper, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Unstable_Grid2';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useForm, Controller, FormProvider } from "react-hook-form"
import Input from "@material-ui/core/Input"
import { Today } from '@mui/icons-material';
import MissionTasksCheckbox from './MissionTasksCheckboxes'
import FlightConditionsCheckboxes from './FlightConditionsCheckboxes'
import Aircrew from './Tabs/Aircrew'
import Mission from './Tabs/Mission'


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'} variant={'body2'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            date: null,
            aircraftType: "HH60M",
            aircraftTail: '',
            mission: '',
            missionStatement: '',
            route: '',
            flightConditions: '',
            airAssault: ''
        },
    });

    const aircraftType = watch("aircraftType")

    const onSubmit = (data) => {
        console.log(data);
    };

    const [pc, setPC] = useState('');
    const [pcSeat, setPCSeat] = useState('L');
    const [pi, setPI] = useState('');
    const [piSeat, setPISeat] = useState('R');
    const [nrcm1, setNRCM1] = useState('');
    const [nrcm2, setNRCM2] = useState('');
    const [nrcm3, setNRCM3] = useState('');

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
        <Box height={'100%'} sx={{ display: 'flex', flexDirection: 'column' }}>
            <form style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Tabs */}
                <Box borderBottom={1} borderColor={'divider'}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Aircrew" {...a11yProps(0)} />
                        <Tab label="Mission" {...a11yProps(1)} />
                        <Tab label="Weather" {...a11yProps(2)} />
                        <Tab label="Final Risk" {...a11yProps(3)} />
                    </Tabs>
                </Box>

                {/* Tab Panels */}
                <CustomTabPanel value={value} index={0}>
                    <Aircrew control={control} aircraftInfo={aircraftInfo} aircraftType={aircraftType} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Mission control={control} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Grid container spacing={2} sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        marginTop: '24px',
                        padding: '5px'
                    }}>
                        Weather
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <Grid container spacing={2} sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        marginTop: '24px',
                        padding: '5px'
                    }}>
                        Final Risk
                    </Grid>
                </CustomTabPanel>

                {/* Submit Button */}
                <Button variant="contained" type="submit" fullWidth sx={{ marginTop: 'auto', marginBottom: '5px' }}>
                    File RCOP
                </Button>
            </form>
        </Box >


    );
}
