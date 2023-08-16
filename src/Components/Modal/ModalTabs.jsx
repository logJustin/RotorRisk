import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useForm } from "react-hook-form"
import Aircrew from './Tabs/Aircrew'
import Mission from './Tabs/Mission'
import Weather from './Tabs/Weather'
import FinalRisk from './Tabs/FinalRisk'
import MBO from './Tabs/MBO'
import FMAA from './Tabs/FMAA'
import flights from '../../data/seederFlightData'
import aircrews from '../../data/seederCrewData';
import riskMatrix from '../../data/riskMatrix'


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
            etd: '',
            ete: '',
            flightConditions: '',
            pc: '',
            pcSeat: '',
            pi: '',
            piSeat: '',
            nrcm1: '',
            nrcm2: '',
            nrcm3: '',
            pcHoursTotal: '',
            pcHoursNG: '',
            pc25HoursInAO: '',
            piHoursTotal: '',
            piHoursNG: '',
            pi25HoursInAO: '',
            nrcm1HoursTotal: '',
            nrcm1HoursNG: '',
            nrcm125HoursInAO: '',
            nrcm2HoursTotal: '',
            nrcm2HoursNG: '',
            nrcm225HoursInAO: '',
            nrcm3HoursTotal: '',
            nrcm3HoursNG: '',
            nrcm325HoursInAO: '',
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
    const formatDate = (dateObject) => {
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const day = dateObject.$D;
        const month = months[dateObject.$M];
        const year = dateObject.$d.getFullYear().toString().substr(-2); // Extract the last two digits of the year
        return `${day}${month}${year}`;
    };

    const crewmemberUpdate = (crewmember, hoursProperties) => {
        const selectedCrewmember = aircrews[crewmember];
        if (selectedCrewmember) {
            hoursProperties.aircraft = selectedCrewmember.aircraft;
            hoursProperties.NG = selectedCrewmember.NG;
            hoursProperties.atleast25InAO = selectedCrewmember.atleast25InAO;
        }
    };

    const onSubmit = (data) => {
        // Flight Date
        data.date = formatDate(data.date);

        // ETD
        const etdHours = data.etd.$H;
        const etdMinutes = String(data.etd.$m).padStart(2, '0');
        data.etd = `${etdHours}:${etdMinutes}`;

        const crewMembers = ['pc', 'pi', 'nrcm1', 'nrcm2', 'nrcm3'];

        // update crewmembers
        for (const crewmember of crewMembers) {
            // initialize an hoursProperties object so it can be updated
            const hoursProperties = {
                aircraft: data[`${crewmember}HoursTotal`],
                NG: data[`${crewmember}HoursNG`],
                atleast25InAO: data[`${crewmember}25HoursInAO`]
            };
            crewmemberUpdate(data[crewmember], hoursProperties);

            data[`${crewmember}HoursTotal`] = hoursProperties.aircraft;
            data[`${crewmember}HoursNG`] = hoursProperties.NG;
            data[`${crewmember}25HoursInAO`] = hoursProperties.atleast25InAO;
        }

        console.log(data);

        flights.push(data);
    };

    // Watch and useEffect for multiple fields
    const fieldsToWatch = ['pc', 'pi', 'nrcm1', 'nrcm2', 'nrcm3'];

    useEffect(() => {
        fieldsToWatch.forEach(fieldName => {
            const fieldValue = watch(fieldName);
            console.log(`${fieldName} field value changed:`, fieldValue);
        });
    }, fieldsToWatch.map(fieldName => watch(fieldName)));


    return (
        <form style={{ height: '100%', display: 'flex', flexDirection: 'column', marginBottom: '15px' }}
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* Tabs */}
            <Box borderBottom={1} borderColor={'divider'}>
                <Tabs value={value} onChange={handleChange} variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
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
                <MBO control={control} watch={watch} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <FMAA control={control} watch={watch} />
            </CustomTabPanel>

            {/* Submit Button */}
            <Button variant="contained" type="submit" fullWidth sx={{ marginTop: 'auto', marginBottom: '15px' }}>
                File RCOP
            </Button>
        </form>


    );
}
