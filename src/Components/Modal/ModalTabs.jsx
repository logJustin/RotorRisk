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
import Input from "@mui/material/Input"
import { Today } from '@mui/icons-material';
import Aircrew from './Tabs/Aircrew'
import Mission from './Tabs/Mission'
import Weather from './Tabs/Weather'
import FinalRisk from './Tabs/FinalRisk'


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

export default function ModalTabs() {
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
            aircrewRiskMitigation: '',
            aircrewInitialRisk: 'L',
            aircrewMitigatedRisk: '',
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
            missionRiskMitigation: '',
            missionInitialRisk: 'M',
            missionMitigatedRisk: '',
            gt1000: '',
            lt1000: '',
            lt700: '',
            lt500: '',
            gt3: '',
            gt2: '',
            gt1: '',
            lt1: '',
            altRequired: '',
            gt25IllumAndgt30degrees: '',
            lt25IllumAndlt30degrees: '',
            gt25IllumAndgt30degreesLimitedLighting: '',
            windGt30: '',
            windGt30Hoist: '',
            gustSpreadGt20: '',
            forecastThunderstorms: '',
            modTurbulenceIcing: '',
            oatNegative10Positive30: '',
            weatherRiskMitigation: '',
            weatherInitialRisk: 'H',
            weatherMitigatedRisk: '',
            finalRiskMitigation: '',
            finalMitigatedRisk: ''
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
                        <Tab label="MBO" {...a11yProps(4)} />
                        <Tab label="FMAA" {...a11yProps(5)} />
                    </Tabs>
                </Box>

                {/* Tab Panels */}
                <CustomTabPanel value={value} index={0}>
                    <Aircrew control={control} watch={watch} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Mission control={control} watch={watch} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Weather control={control} watch={watch} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <FinalRisk control={control} watch={watch} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    Placeholder
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                    Placeholder
                </CustomTabPanel>

                {/* Submit Button */}
                <Button variant="contained" type="submit" fullWidth sx={{ marginTop: 'auto', marginBottom: '5px' }}>
                    File RCOP
                </Button>
            </form>
        </Box >


    );
}
