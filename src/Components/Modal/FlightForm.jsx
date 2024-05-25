import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Box, Button, Tabs, Tab, Typography, Modal } from '@mui/material';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import Aircrew from './Tabs/Aircrew';
import Mission from './Tabs/Mission';
import Weather from './Tabs/Weather';
import FinalRisk from './Tabs/FinalRisk';
import MBO from './Tabs/MBO';
import FMAA from './Tabs/FMAA';
import { useGlobalState } from '../../contexts/GlobalStateContext';

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

export default function FlightForm({ open, flightData, formMode, handleFlashClick }) {
    console.log('flightData', flightData)
    const [tabValue, setTabValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const { fetchFlightsData, aircrews, handleModalClose } = useGlobalState();

    const {
        flightid = uuid(),
        date = dayjs(new Date()),
        aircrafttype = 'HH60M',
        aircrafttail = '',
        mission = '',
        missionstatement = '',
        route = '',
        etd = dayjs(new Date()),
        ete = '',
        flightconditions = '',
        pc = '',
        pcrisk = '',
        pcseat = 'Left',
        pi = '',
        pirisk = '',
        piseat = 'Right',
        nrcm1 = '',
        nrcm1risk = '',
        nrcm2 = '',
        nrcm2risk = '',
        nrcm3 = '',
        nrcm3risk = '',
        pchourstotal = '',
        pchoursng = '',
        pc25hoursinao = '',
        pihourstotal = '',
        pihoursng = '',
        pi25hoursinao = '',
        nrcm1hourstotal = '',
        nrcm1hoursng = '',
        nrcm125hoursinao = '',
        nrcm2hourstotal = '',
        nrcm2hoursng = '',
        nrcm225hoursinao = '',
        nrcm3hourstotal = '',
        nrcm3hoursng = '',
        nrcm325hoursinao = '',
        aircrewriskmitigation = '',
        aircrewinitialrisk = '',
        aircrewmitigatedrisk = '',
        airassault = '',
        AH64attackreconsecurity = '',
        medevac = '',
        casevac = '',
        farp = '',
        crosscountryborder = '',
        multiship = '',
        mixedmultiship = '',
        mtfgeneraltraining = '',
        dartonetimeflight = '',
        blackout = '',
        waterbucket = '',
        paradrops = '',
        rappelspiesfries = '',
        externalloads = '',
        airmovementvip = '',
        continuation = '',
        cefs = '',
        fatcow = '',
        terrainflight = '',
        mountainoperations = '',
        overwateroperations = '',
        pinnacleoperations = '',
        urbanoperations = '',
        confinedoperations = '',
        ogewithin10 = '',
        igewithin10 = '',
        ogewithin5 = '',
        igewithin5 = '',
        cruisewithin10 = '',
        progessionevaluationeps = '',
        ifrsimulatedimc = '',
        cbrne = '',
        nonlivehoist = '',
        livehoist = '',
        combatmanueveringflight = '',
        gunnerylivefire = '',
        calfex = '',
        ams = '',
        blackoutcurtain = '',
        owuntrained = '',
        famflight = '',
        hoverwxrlt500 = '',
        uh60doorsOff = '',
        owsea4to5 = '',
        owseagt6 = '',
        pcgt90 = '',
        pcgt60 = '',
        pcgt30 = '',
        pigt90 = '',
        pigt60 = '',
        pigt30 = '',
        nrcm1gt90 = '',
        nrcm1gt60 = '',
        nrcm1gt30 = '',
        nrcm2gt90 = '',
        nrcm2gt60 = '',
        nrcm2gt30 = '',
        nrcm3gt90 = '',
        nrcm3gt60 = '',
        nrcm3gt30 = '',
        hoistgt90 = '',
        hoistgt60 = '',
        hoistgt30 = '',
        specificgt12 = '',
        specific2to12 = '',
        specificlt2 = '',
        vaguegt12 = '',
        vague2to12 = '',
        vaguelt2 = '',
        missionriskmitigation = '',
        missioninitialrisk = '',
        missionmitigatedrisk = '',
        gt1000 = '',
        lt1000 = '',
        lt700 = '',
        lt500 = '',
        gt3 = '',
        gt2 = '',
        gt1 = '',
        lt1 = '',
        altrequired = '',
        gt25illumandgt30degrees = '',
        lt25illumandlt30degrees = '',
        gt25illumandgt30degreeslimitedlighting = '',
        windgt30 = '',
        windgt30hoist = '',
        gustspreadgt20 = '',
        forecastthunderstorms = '',
        modturbulenceicing = '',
        oatnegative10positive30 = '',
        weatherriskmitigation = '',
        weatherinitialrisk = '',
        weathermitigatedrisk = '',
        finalinitialrisk = '',
        finalriskmitigation = '',
        finalmitigatedrisk = '',
        briefer = '',
        briefercomment = '',
        briefercommentdate = '',
        approver = '',
        approvercomment = '',
        approvercommentdate = '',
        greatestrisk = '',
    } = flightData || {};
    console.log('inside form', pc)
    const { control, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            flightID: flightid,
            date: date,
            aircraftType: aircrafttype,
            aircraftTail: aircrafttail,
            mission: mission,
            missionStatement: missionstatement,
            route: route,
            etd: etd,
            ete: ete,
            flightConditions: flightconditions,
            pc: pc,
            pcRisk: pcrisk,
            pcSeat: pcseat,
            pi: pi,
            piRisk: pirisk,
            piSeat: piseat,
            nrcm1: nrcm1,
            nrcm1Risk: nrcm1risk,
            nrcm2: nrcm2,
            nrcm2Risk: nrcm2risk,
            nrcm3: nrcm3,
            nrcm3Risk: nrcm3risk,
            pcHoursTotal: pchourstotal,
            pcHoursNG: pchoursng,
            pc25HoursInAO: pc25hoursinao,
            piHoursTotal: pihourstotal,
            piHoursNG: pihoursng,
            pi25HoursInAO: pi25hoursinao,
            nrcm1HoursTotal: nrcm1hourstotal,
            nrcm1HoursNG: nrcm1hoursng,
            nrcm125HoursInAO: nrcm125hoursinao,
            nrcm2HoursTotal: nrcm2hourstotal,
            nrcm2HoursNG: nrcm2hoursng,
            nrcm225HoursInAO: nrcm225hoursinao,
            nrcm3HoursTotal: nrcm3hourstotal,
            nrcm3HoursNG: nrcm3hoursng,
            nrcm325HoursInAO: nrcm325hoursinao,
            aircrewRiskMitigation: aircrewriskmitigation,
            aircrewInitialRisk: aircrewinitialrisk,
            aircrewMitigatedRisk: aircrewmitigatedrisk,
            airAssault: airassault,
            AH64AttackReconSecurity: AH64attackreconsecurity,
            MEDEVAC: medevac,
            CASEVAC: casevac,
            FARP: farp,
            crossCountryBorder: crosscountryborder,
            multiship: multiship,
            mixedMultiShip: mixedmultiship,
            MTFGeneralTraining: mtfgeneraltraining,
            dartOneTimeFlight: dartonetimeflight,
            blackout: blackout,
            waterBucket: waterbucket,
            paradrops: paradrops,
            rappelSpiesFries: rappelspiesfries,
            externalLoads: externalloads,
            airmovementVIP: airmovementvip,
            continuation: continuation,
            CEFS: cefs,
            fatCow: fatcow,
            terrainFlight: terrainflight,
            mountainOperations: mountainoperations,
            overwaterOperations: overwateroperations,
            pinnacleOperations: pinnacleoperations,
            urbanOperations: urbanoperations,
            confinedOperations: confinedoperations,
            OGEwithin10: ogewithin10,
            IGEwithin10: igewithin10,
            OGEwithin5: ogewithin5,
            IGEwithin5: igewithin5,
            Cruisewithin10: cruisewithin10,
            progessionEvaluationEPs: progessionevaluationeps,
            IFRSimulatedIMC: ifrsimulatedimc,
            CBRNE: cbrne,
            nonLiveHoist: nonlivehoist,
            liveHoist: livehoist,
            combatManueveringFlight: combatmanueveringflight,
            gunneryLiveFire: gunnerylivefire,
            CALFEX: calfex,
            AMS: ams,
            blackoutCurtain: blackoutcurtain,
            OWUntrained: owuntrained,
            famFlight: famflight,
            hoverWXRlt500: hoverwxrlt500,
            UH60DoorsOff: uh60doorsOff,
            OWSea4to5: owsea4to5,
            OWSeaGt6: owseagt6,
            pcGt90: pcgt90,
            pcGt60: pcgt60,
            pcGt30: pcgt30,
            piGt90: pigt90,
            piGt60: pigt60,
            piGt30: pigt30,
            nrcm1Gt90: nrcm1gt90,
            nrcm1Gt60: nrcm1gt60,
            nrcm1Gt30: nrcm1gt30,
            nrcm2Gt90: nrcm2gt90,
            nrcm2Gt60: nrcm2gt60,
            nrcm2Gt30: nrcm2gt30,
            nrcm3Gt90: nrcm3gt90,
            nrcm3Gt60: nrcm3gt60,
            nrcm3Gt30: nrcm3gt30,
            hoistGt90: hoistgt90,
            hoistGt60: hoistgt60,
            hoistGt30: hoistgt30,
            specificGt12: specificgt12,
            specific2to12: specific2to12,
            specificLt2: specificlt2,
            vagueGt12: vaguegt12,
            vague2to12: vague2to12,
            vagueLt2: vaguelt2,
            missionRiskMitigation: missionriskmitigation,
            missionInitialRisk: missioninitialrisk,
            missionMitigatedRisk: missionmitigatedrisk,
            gt1000: gt1000,
            lt1000: lt1000,
            lt700: lt700,
            lt500: lt500,
            gt3: gt3,
            gt2: gt2,
            gt1: gt1,
            lt1: lt1,
            altRequired: altrequired,
            gt25IllumAndgt30degrees: gt25illumandgt30degrees,
            lt25IllumAndlt30degrees: lt25illumandlt30degrees,
            gt25IllumAndgt30degreesLimitedLighting: gt25illumandgt30degreeslimitedlighting,
            windGt30: windgt30,
            windGt30Hoist: windgt30hoist,
            gustSpreadGt20: gustspreadgt20,
            forecastThunderstorms: forecastthunderstorms,
            modTurbulenceIcing: modturbulenceicing,
            oatNegative10Positive30: oatnegative10positive30,
            weatherRiskMitigation: weatherriskmitigation,
            weatherInitialRisk: weatherinitialrisk,
            weatherMitigatedRisk: weathermitigatedrisk,
            finalInitialRisk: finalinitialrisk,
            finalRiskMitigation: finalriskmitigation,
            finalMitigatedRisk: finalmitigatedrisk,
            briefer: briefer,
            brieferComment: briefercomment,
            brieferCommentDate: briefercommentdate,
            approver: approver,
            approverComment: approvercomment,
            approverCommentDate: approvercommentdate,
            greatestRisk: greatestrisk,
        },
    });
    // functions for Form submit
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


        const handleFlight = async (flightObject) => {
            if (formMode === "File") {
                try {
                    await axios.post('http://localhost:3001/api/add-flight', flightObject);
                    await handleModalClose();
                    await fetchFlightsData();
                    handleFlashClick();
                } catch (error) {
                    console.error('Error adding flight:', error);
                }
            } else if (formMode === "Update") {
                try {
                    await axios.put('http://localhost:3001/api/update-flight', flightObject);
                    await handleModalClose();
                    await fetchFlightsData();
                    handleFlashClick();
                } catch (error) {
                    console.error('Error adding flight:', error);
                }
            }
        };
        handleFlight(data);
    };

    return (
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
                bgcolor: 'background.paper',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: ' 0 32px 8px 32px',
                marginbottom: '16px',
                overflow: 'auto',
                height: '85%'
            }}>
                <form
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Box borderBottom={1} borderColor={'divider'}>
                        <Tabs value={tabValue} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile>
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
                            flexGrow: 1,
                            overflowY: 'auto',
                        }}
                    >
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

                    <Button variant="contained" type="submit" fullWidth sx={{ marginTop: 'auto', marginBottom: '8px' }}>
                        {formMode} RCOP
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}
