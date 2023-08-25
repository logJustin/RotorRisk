import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useForm } from "react-hook-form"
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Aircrew from './Tabs/Aircrew'
import Mission from './Tabs/Mission'
import Weather from './Tabs/Weather'
import FinalRisk from './Tabs/FinalRisk'
import MBO from './Tabs/MBO'
import FMAA from './Tabs/FMAA'
// import flights from '../../data/seederFlightData'
// import aircrews from '../../data/seederCrewData';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{ height: '100%' }}
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

export default function ModalTabs({ flightData, formMode, handleClose, fetchFlightsData }) {
    const [tabValue, setTabValue] = React.useState(0);
    const [aircrews, setAircrews] = React.useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchAircrewsData();
    }, []); // The empty dependency array ensures this runs once on mount

    const fetchAircrewsData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/aircrews');
            const jsonData = await response.json();
            setAircrews(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const {
        flightID, date, aircraftType, aircraftTail, mission, missionStatement, route, etd, ete, flightConditions, pc, pcRisk, pcSeat, pi, piRisk, piSeat, nrcm1, nrcm1Risk, nrcm2, nrcm2Risk, nrcm3, nrcm3Risk, pcHoursTotal, pcHoursNG, pc25HoursInAO, piHoursTotal, piHoursNG, pi25HoursInAO, nrcm1HoursTotal, nrcm1HoursNG, nrcm125HoursInAO, nrcm2HoursTotal, nrcm2HoursNG, nrcm225HoursInAO, nrcm3HoursTotal, nrcm3HoursNG, nrcm325HoursInAO, aircrewRiskMitigation, aircrewInitialRisk, aircrewMitigatedRisk, airAssault, AH64AttackReconSecurity, MEDEVAC, CASEVAC, FARP, crossCountryBorder, multiship, mixedMultiShip, MTFGeneralTraining, dartOneTimeFlight, blackout, waterBucket, paradrops, rappelSpiesFries, externalLoads, airmovementVIP, continuation, CEFS, fatCow, terrainFlight, mountainOperations, overwaterOperations, pinnacleOperations, urbanOperations, confinedOperations, OGEwithin10, IGEwithin10, OGEwithin5, IGEwithin5, Cruisewithin10, progessionEvaluationEPs, IFRSimulatedIMC, CBRNE, nonLiveHoist, liveHoist, combatManueveringFlight, gunneryLiveFire, CALFEX, AMS, blackoutCurtain, OWUntrained, famFlight, hoverWXRlt500, UH60DoorsOff, OWSea4to5, OWSeaGt6, pcGt90, pcGt60, pcGt30, piGt90, piGt60, piGt30, nrcm1Gt90, nrcm1Gt60, nrcm1Gt30, nrcm2Gt90, nrcm2Gt60, nrcm2Gt30, nrcm3Gt90, nrcm3Gt60, nrcm3Gt30, hoistGt90, hoistGt60, hoistGt30, specificGt12, specific2to12, specificLt2, vagueGt12, vague2to12, vagueLt2, missionRiskMitigation, missionInitialRisk, missionMitigatedRisk, gt1000, lt1000, lt700, lt500, gt3, gt2, gt1, lt1, altRequired, gt25IllumAndgt30degrees, lt25IllumAndlt30degrees, gt25IllumAndgt30degreesLimitedLighting, windGt30, windGt30Hoist, gustSpreadGt20, forecastThunderstorms, modTurbulenceIcing, oatNegative10Positive30, weatherRiskMitigation, weatherInitialRisk, weatherMitigatedRisk, finalRiskMitigation, finalMitigatedRisk, briefer, brieferComment, brieferCommentDate, approver, approverComment, approverCommentDate, finalInitialRisk
    } = flightData

    const { control, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            flightID: flightID !== undefined ? flightID : uuid(),
            date: date !== undefined ? dayjs(date) : dayjs(new Date()),
            aircraftType: aircraftType !== undefined ? aircraftType : 'HH60M',
            aircraftTail: aircraftTail !== undefined ? aircraftTail : '',
            mission: mission !== undefined ? mission : '',
            missionStatement: missionStatement !== undefined ? missionStatement : '',
            route: route !== undefined ? route : '',
            etd: etd !== undefined ? dayjs(etd, "HH:mm") : dayjs(new Date()),
            ete: ete !== undefined ? ete : '',
            flightConditions: flightConditions !== undefined ? flightConditions : '',
            pc: pc !== undefined ? pc : '',
            pcRisk: pcRisk !== undefined ? pcRisk : '',
            pcSeat: pcSeat !== undefined ? pcSeat : 'Left',
            pi: pi !== undefined ? pi : '',
            piRisk: piRisk !== undefined ? piRisk : '',
            piSeat: piSeat !== undefined ? piSeat : 'Right',
            nrcm1: nrcm1 !== undefined ? nrcm1 : '',
            nrcm1Risk: nrcm1Risk !== undefined ? nrcm1Risk : '',
            nrcm2: nrcm2 !== undefined ? nrcm2 : '',
            nrcm2Risk: nrcm2Risk !== undefined ? nrcm2Risk : '',
            nrcm3: nrcm3 !== undefined ? nrcm3 : '',
            nrcm3Risk: nrcm3Risk !== undefined ? nrcm3Risk : '',
            pcHoursTotal: pcHoursTotal !== undefined ? pcHoursTotal : '',
            pcHoursNG: pcHoursNG !== undefined ? pcHoursNG : '',
            pc25HoursInAO: pc25HoursInAO !== undefined ? pc25HoursInAO : '',
            piHoursTotal: piHoursTotal !== undefined ? piHoursTotal : '',
            piHoursNG: piHoursNG !== undefined ? piHoursNG : '',
            pi25HoursInAO: pi25HoursInAO !== undefined ? pi25HoursInAO : '',
            nrcm1HoursTotal: nrcm1HoursTotal !== undefined ? nrcm1HoursTotal : '',
            nrcm1HoursNG: nrcm1HoursNG !== undefined ? nrcm1HoursNG : '',
            nrcm125HoursInAO: nrcm125HoursInAO !== undefined ? nrcm125HoursInAO : '',
            nrcm2HoursTotal: nrcm2HoursTotal !== undefined ? nrcm2HoursTotal : '',
            nrcm2HoursNG: nrcm2HoursNG !== undefined ? nrcm2HoursNG : '',
            nrcm225HoursInAO: nrcm225HoursInAO !== undefined ? nrcm225HoursInAO : '',
            nrcm3HoursTotal: nrcm3HoursTotal !== undefined ? nrcm3HoursTotal : '',
            nrcm3HoursNG: nrcm3HoursNG !== undefined ? nrcm3HoursNG : '',
            nrcm325HoursInAO: nrcm325HoursInAO !== undefined ? nrcm325HoursInAO : '',
            aircrewRiskMitigation: aircrewRiskMitigation !== undefined ? aircrewRiskMitigation : '',
            aircrewInitialRisk: aircrewInitialRisk !== undefined ? aircrewInitialRisk : 'L',
            aircrewMitigatedRisk: aircrewMitigatedRisk !== undefined ? aircrewMitigatedRisk : '',
            airAssault: airAssault !== undefined ? airAssault : '',
            AH64AttackReconSecurity: AH64AttackReconSecurity !== undefined ? AH64AttackReconSecurity : '',
            MEDEVAC: MEDEVAC !== undefined ? MEDEVAC : '',
            CASEVAC: CASEVAC !== undefined ? CASEVAC : '',
            FARP: FARP !== undefined ? FARP : '',
            crossCountryBorder: crossCountryBorder !== undefined ? crossCountryBorder : '',
            multiship: multiship !== undefined ? multiship : '',
            mixedMultiShip: mixedMultiShip !== undefined ? mixedMultiShip : '',
            MTFGeneralTraining: MTFGeneralTraining !== undefined ? MTFGeneralTraining : '',
            dartOneTimeFlight: dartOneTimeFlight !== undefined ? dartOneTimeFlight : '',
            blackout: blackout !== undefined ? blackout : '',
            waterBucket: waterBucket !== undefined ? waterBucket : '',
            paradrops: paradrops !== undefined ? paradrops : '',
            rappelSpiesFries: rappelSpiesFries !== undefined ? rappelSpiesFries : '',
            externalLoads: externalLoads !== undefined ? externalLoads : '',
            airmovementVIP: airmovementVIP !== undefined ? airmovementVIP : '',
            continuation: continuation !== undefined ? continuation : '',
            CEFS: CEFS !== undefined ? CEFS : '',
            fatCow: fatCow !== undefined ? fatCow : '',
            terrainFlight: terrainFlight !== undefined ? terrainFlight : '',
            mountainOperations: mountainOperations !== undefined ? mountainOperations : '',
            overwaterOperations: overwaterOperations !== undefined ? overwaterOperations : '',
            pinnacleOperations: pinnacleOperations !== undefined ? pinnacleOperations : '',
            urbanOperations: urbanOperations !== undefined ? urbanOperations : '',
            confinedOperations: confinedOperations !== undefined ? confinedOperations : '',
            OGEwithin10: OGEwithin10 !== undefined ? OGEwithin10 : '',
            IGEwithin10: IGEwithin10 !== undefined ? IGEwithin10 : '',
            OGEwithin5: OGEwithin5 !== undefined ? OGEwithin5 : '',
            IGEwithin5: IGEwithin5 !== undefined ? IGEwithin5 : '',
            Cruisewithin10: Cruisewithin10 !== undefined ? Cruisewithin10 : '',
            progessionEvaluationEPs: progessionEvaluationEPs !== undefined ? progessionEvaluationEPs : '',
            IFRSimulatedIMC: IFRSimulatedIMC !== undefined ? IFRSimulatedIMC : '',
            CBRNE: CBRNE !== undefined ? CBRNE : '',
            nonLiveHoist: nonLiveHoist !== undefined ? nonLiveHoist : '',
            liveHoist: liveHoist !== undefined ? liveHoist : '',
            combatManueveringFlight: combatManueveringFlight !== undefined ? combatManueveringFlight : '',
            gunneryLiveFire: gunneryLiveFire !== undefined ? gunneryLiveFire : '',
            CALFEX: CALFEX !== undefined ? CALFEX : '',
            AMS: AMS !== undefined ? AMS : '',
            blackoutCurtain: blackoutCurtain !== undefined ? blackoutCurtain : '',
            OWUntrained: OWUntrained !== undefined ? OWUntrained : '',
            famFlight: famFlight !== undefined ? famFlight : '',
            hoverWXRlt500: hoverWXRlt500 !== undefined ? hoverWXRlt500 : '',
            UH60DoorsOff: UH60DoorsOff !== undefined ? UH60DoorsOff : '',
            OWSea4to5: OWSea4to5 !== undefined ? OWSea4to5 : '',
            OWSeaGt6: OWSeaGt6 !== undefined ? OWSeaGt6 : '',
            pcGt90: pcGt90 !== undefined ? pcGt90 : '',
            pcGt60: pcGt60 !== undefined ? pcGt60 : '',
            pcGt30: pcGt30 !== undefined ? pcGt30 : '',
            piGt90: piGt90 !== undefined ? piGt90 : '',
            piGt60: piGt60 !== undefined ? piGt60 : '',
            piGt30: piGt30 !== undefined ? piGt30 : '',
            nrcm1Gt90: nrcm1Gt90 !== undefined ? nrcm1Gt90 : '',
            nrcm1Gt60: nrcm1Gt60 !== undefined ? nrcm1Gt60 : '',
            nrcm1Gt30: nrcm1Gt30 !== undefined ? nrcm1Gt30 : '',
            nrcm2Gt90: nrcm2Gt90 !== undefined ? nrcm2Gt90 : '',
            nrcm2Gt60: nrcm2Gt60 !== undefined ? nrcm2Gt60 : '',
            nrcm2Gt30: nrcm2Gt30 !== undefined ? nrcm2Gt30 : '',
            nrcm3Gt90: nrcm3Gt90 !== undefined ? nrcm3Gt90 : '',
            nrcm3Gt60: nrcm3Gt60 !== undefined ? nrcm3Gt60 : '',
            nrcm3Gt30: nrcm3Gt30 !== undefined ? nrcm3Gt30 : '',
            hoistGt90: hoistGt90 !== undefined ? hoistGt90 : '',
            hoistGt60: hoistGt60 !== undefined ? hoistGt60 : '',
            hoistGt30: hoistGt30 !== undefined ? hoistGt30 : '',
            specificGt12: specificGt12 !== undefined ? specificGt12 : '',
            specific2to12: specific2to12 !== undefined ? specific2to12 : '',
            specificLt2: specificLt2 !== undefined ? specificLt2 : '',
            vagueGt12: vagueGt12 !== undefined ? vagueGt12 : '',
            vague2to12: vague2to12 !== undefined ? vague2to12 : '',
            vagueLt2: vagueLt2 !== undefined ? vagueLt2 : '',
            missionRiskMitigation: missionRiskMitigation !== undefined ? missionRiskMitigation : '',
            missionInitialRisk: missionInitialRisk !== undefined ? missionInitialRisk : 'L',
            missionMitigatedRisk: missionMitigatedRisk !== undefined ? missionMitigatedRisk : '',
            gt1000: gt1000 !== undefined ? gt1000 : '',
            lt1000: lt1000 !== undefined ? lt1000 : '',
            lt700: lt700 !== undefined ? lt700 : '',
            lt500: lt500 !== undefined ? lt500 : '',
            gt3: gt3 !== undefined ? gt3 : '',
            gt2: gt2 !== undefined ? gt2 : '',
            gt1: gt1 !== undefined ? gt1 : '',
            lt1: lt1 !== undefined ? lt1 : '',
            altRequired: altRequired !== undefined ? altRequired : '',
            gt25IllumAndgt30degrees: gt25IllumAndgt30degrees !== undefined ? gt25IllumAndgt30degrees : '',
            lt25IllumAndlt30degrees: lt25IllumAndlt30degrees !== undefined ? lt25IllumAndlt30degrees : '',
            gt25IllumAndgt30degreesLimitedLighting: gt25IllumAndgt30degreesLimitedLighting !== undefined ? gt25IllumAndgt30degreesLimitedLighting : '',
            windGt30: windGt30 !== undefined ? windGt30 : '',
            windGt30Hoist: windGt30Hoist !== undefined ? windGt30Hoist : '',
            gustSpreadGt20: gustSpreadGt20 !== undefined ? gustSpreadGt20 : '',
            forecastThunderstorms: forecastThunderstorms !== undefined ? forecastThunderstorms : '',
            modTurbulenceIcing: modTurbulenceIcing !== undefined ? modTurbulenceIcing : '',
            oatNegative10Positive30: oatNegative10Positive30 !== undefined ? oatNegative10Positive30 : '',
            weatherRiskMitigation: weatherRiskMitigation !== undefined ? weatherRiskMitigation : '',
            weatherInitialRisk: weatherInitialRisk !== undefined ? weatherInitialRisk : 'L',
            weatherMitigatedRisk: weatherMitigatedRisk !== undefined ? weatherMitigatedRisk : '',
            finalInitialRisk: finalInitialRisk !== undefined ? finalInitialRisk : '',
            finalRiskMitigation: finalRiskMitigation !== undefined ? finalRiskMitigation : '',
            finalMitigatedRisk: finalMitigatedRisk !== undefined ? finalMitigatedRisk : '',
            briefer: briefer !== undefined ? briefer : '',
            brieferComment: brieferComment !== undefined ? brieferComment : '',
            brieferCommentDate: brieferCommentDate !== undefined ? brieferCommentDate : '',
            approver: approver !== undefined ? approver : '',
            approverComment: approverComment !== undefined ? approverComment : '',
            approverCommentDate: approverCommentDate !== undefined ? approverCommentDate : '',
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
        const selectedCrewmember = aircrews.find(member => member.name === crewmember);
        if (selectedCrewmember) {
            hoursProperties.aircraft = selectedCrewmember.aircraft;
            hoursProperties.NG = selectedCrewmember.ng;
            hoursProperties.atleast25InAO = selectedCrewmember.atleast25inao;
        }
    };

    const crewMembers = ['pc', 'pi', 'nrcm1', 'nrcm2', 'nrcm3'];
    const onSubmit = (data) => {
        // Flight Date
        data.date = formatDate(data.date);

        // ETD
        const etdHours = data.etd.$H;
        const etdMinutes = String(data.etd.$m).padStart(2, '0');
        data.etd = `${etdHours}:${etdMinutes}`;


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
        // Check if flight ID already exists

        const addFlight = async (flightObject) => {
            console.log('Adding flight')
            try {
                await axios.post('http://localhost:3001/api/add-flight', flightObject);
                await handleClose();
                fetchFlightsData();
            } catch (error) {
                console.error('Error adding flight:', error);
            }
        };
        addFlight(data);
    };



    return (
        <form style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* Tabs */}
            <Box borderBottom={1} borderColor={'divider'}>
                <Tabs value={tabValue} onChange={handleChange} variant="scrollable"
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

            <Box
                style={{
                    flexGrow: 1, // Allow this div to grow and take up available space
                    overflowY: 'auto', // Enable vertical scrolling if needed
                }}
            >
                {/* Tab Panels */}
                <CustomTabPanel value={tabValue} index={0}>
                    <Aircrew control={control} watch={watch} setValue={setValue} aircrews={aircrews} />
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    <Mission control={control} watch={watch} setValue={setValue} />
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={2}>
                    <Weather control={control} watch={watch} setValue={setValue} />
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={3}>
                    <FinalRisk control={control} watch={watch} setValue={setValue} />
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={4}>
                    <MBO control={control} watch={watch} />
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={5}>
                    <FMAA control={control} watch={watch} />
                </CustomTabPanel>
            </Box>

            {/* Submit Button */}
            <Button variant="contained" type="submit" fullWidth sx={{ marginTop: 'auto', marginBottom: '8px' }}>
                {formMode} RCOP
            </Button>
        </form >
    );
}