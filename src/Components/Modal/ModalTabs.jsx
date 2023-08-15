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
            aircraftType: 'HH60M',
            aircraftTail: '',
            mission: '',
            missionStatement: '',
            route: '',
            flightConditions: '',
            pc: '',
            pcSeat: '',
            pi: '',
            piSeat: '',
            nrcm1: '',
            nrcm2: '',
            nrcm3: '',
            riskMitigation: '',
            airAssault: '',
            AH64AttackReconSecurity: '',
            medevacCasevac: '',
            multiship: '',
            mixedMultiShip: '',
            MTFGeneralTraining: '',
            dartOneTimeFlight: '',
            blackout: '',
            waterBucket: '',
            paradrops: '',
            rappelSpiesFries: '',
            externalLoads: '',
            airmovementVIP: '',
            continuation: '',
            CEFS: '',
            fatCow: '',
            terrainFlight: '',
            mountainOperations: '',
            overwaterOperations: '',
            pinnacleOperations: '',
            urbanOperations: '',
            confinedOperations: '',
            OGEwithin10: '',
            IGEwithin10: '',
            OGEwithin5: '',
            IGEwithin5: '',
            progessionEvaluationEPs: '',
            IFRSimulatedIMC: '',
            CBRNE: '',
            nonLiveHoist: '',
            liveHoist: '',
            combatManueveringFlight: '',
            gunneryLiveFire: '',
            CALFEX: '',
            AMS: '',
            pcGt90: '',
            pcGt60: '',
            pcGt30: '',
            piGt90: '',
            piGt60: '',
            piGt30: '',
            nrcm1Gt90: '',
            nrcm1Gt60: '',
            nrcm1Gt30: '',
            nrcm2Gt90: '',
            nrcm2Gt60: '',
            nrcm2Gt30: '',
            nrcm3Gt90: '',
            nrcm3Gt60: '',
            nrcm3Gt30: '',
            hoistGt90: '',
            hoistGt60: '',
            hoistGt30: '',
            specificGt12: '',
            specific2to12: '',
            specificLt2: '',
            vagueGt12: '',
            vague2to12: '',
            vagueLt2: '',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
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
                    <Aircrew control={control} watch={watch} />
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
