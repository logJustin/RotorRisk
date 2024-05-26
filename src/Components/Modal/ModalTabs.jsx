import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form"
import { Box, Button, Tabs, Tab, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import Aircrew from './Tabs/Aircrew'
import Mission from './Tabs/Mission'
import Weather from './Tabs/Weather'
import FinalRisk from './Tabs/FinalRisk'
import MBO from './Tabs/MBO'
import FMAA from './Tabs/FMAA'
import { useGlobalState } from '../../contexts/GlobalStateContext';
import { useFlash } from '../../contexts/FlashContext';

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

export default function FlightModal({ open, handleLoadingChange }) {

    const { handleModalClose, formMode, flightData, setFlights, fetchFlightsData, aircrews } = useGlobalState();
    const { handleFlashClick, setFlashMessage } = useFlash()

    // State for Button Message
    const [buttonMessage, setButtonMessage] = useState('Go to Mission')
    const scrollableContainerRef = useRef(null);

    // State for scrolling function
    const [scrollAtBottom, setScrollAtBottom] = useState(false);
    const handleScroll = (event) => {
        const element = event.target;
        // Calculate the distance from the bottom of the scrollable content to the current scroll position
        const distanceToBottom = element.scrollHeight - (element.scrollTop + element.clientHeight);

        // Check if the distance to the bottom is very small (consider it at the bottom)
        if (distanceToBottom < 10) {
            setScrollAtBottom(true);
        } else {
            setScrollAtBottom(false);
        }
    };



    // State for Tabs on Modal
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabClick = (event, newValue) => {
        setTabValue(newValue);
        setScrollAtBottom(false)
        if (newValue > 3) { }
        if (newValue === 0) {
            setButtonMessage('Go to Mission');
        } else if (newValue === 1) {
            setButtonMessage('Go to Weather');
        } else if (newValue === 2) {
            setButtonMessage('Go to Final Risk');
        } else if (newValue > 2) {
            setButtonMessage(`${formMode} RCOP`);
            setScrollAtBottom(true)
        }
        scrollableContainerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleSubmitButtonClick = (value) => {
        if (value === 0) {
            setTabValue(1);
            setButtonMessage('Go to Weather');
            setScrollAtBottom(false);
        } else if (value === 1) {
            setTabValue(2);
            setButtonMessage('Go to Final Risk');
            setScrollAtBottom(false);
        } else if (value === 2) {
            setTabValue(3);
            setButtonMessage(`${formMode} RCOP`);
            setScrollAtBottom(false);
        } else if (value > 2) {
            // Directly call the onSubmit function with the form data
            handleLoadingChange(true)
            onSubmit(watch());
        }
        scrollableContainerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const {
        flightid, date, aircrafttype, aircrafttail, mission, missionstatement, route, etd, ete, flightconditions, pc, pcrisk, pcseat, pi, pirisk, piseat, nrcm1, nrcm1risk, nrcm2, nrcm2risk, nrcm3, nrcm3risk, pchourstotal, pchoursng, pc25hoursinao, pihourstotal, pihoursng, pi25hoursinao, nrcm1hourstotal, nrcm1hoursng, nrcm125hoursinao, nrcm2hourstotal, nrcm2hoursng, nrcm225hoursinao, nrcm3hourstotal, nrcm3hoursng, nrcm325hoursinao, aircrewriskmitigation, aircrewinitialrisk, aircrewmitigatedrisk, airassault, AH64attackreconsecurity, medevac, casevac, farp, crosscountryborder, multiship, mixedmultiship, mtfgeneraltraining, dartonetimeflight, blackout, waterbucket, paradrops, rappelspiesfries, externalloads, airmovementvip, continuation, cefs, fatcow, terrainflight, mountainoperations, overwateroperations, pinnacleoperations, urbanoperations, confinedoperations, ogewithin10, igewithin10, ogewithin5, igewithin5, cruisewithin10, progessionevaluationeps, ifrsimulatedimc, cbrne, nonlivehoist, livehoist, combatmanueveringflight, gunnerylivefire, calfex, ams, blackoutcurtain, owuntrained, famflight, hoverwxrlt500, uh60doorsOff, owsea4to5, owseagt6, pcgt90, pcgt60, pcgt30, pigt90, pigt60, pigt30, nrcm1gt90, nrcm1gt60, nrcm1gt30, nrcm2gt90, nrcm2gt60, nrcm2gt30, nrcm3gt90, nrcm3gt60, nrcm3gt30, hoistgt90, hoistgt60, hoistgt30, specificgt12, specific2to12, specificlt2, vaguegt12, vague2to12, vaguelt2, missionriskmitigation, missioninitialrisk, missionmitigatedrisk, gt1000, lt1000, lt700, lt500, gt3, gt2, gt1, lt1, altrequired, gt25illumandgt30degrees, lt25illumandlt30degrees, gt25illumandgt30degreeslimitedlighting, windgt30, windgt30hoist, gustspreadgt20, forecastthunderstorms, modturbulenceicing, oatnegative10positive30, weatherriskmitigation, weatherinitialrisk, weathermitigatedrisk, finalriskmitigation, finalmitigatedrisk, briefer, briefercomment, briefercommentdate, approver, approvercomment, approvercommentdate, finalinitialrisk, greatestrisk
    } = flightData

    const { control, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            flightID: flightid !== undefined ? flightid : uuid(),
            date: date !== undefined ? dayjs(date) : dayjs(new Date()),
            aircraftType: aircrafttype !== undefined ? aircrafttype : 'HH60M',
            aircraftTail: aircrafttail !== undefined ? aircrafttail : '',
            mission: mission !== undefined ? mission : '',
            missionStatement: missionstatement !== undefined ? missionstatement : '',
            route: route !== undefined ? route : '',
            etd: etd !== undefined ? dayjs(etd, "HH:mm") : dayjs(new Date()),
            ete: ete !== undefined ? ete : '',
            flightConditions: flightconditions !== undefined ? flightconditions : '',
            pc: pc !== undefined ? pc : '',
            pcRisk: pcrisk !== undefined ? pcrisk : '',
            pcSeat: pcseat !== undefined ? pcseat : 'Left',
            pi: pi !== undefined ? pi : '',
            piRisk: pirisk !== undefined ? pirisk : '',
            piSeat: piseat !== undefined ? piseat : 'Right',
            nrcm1: nrcm1 !== undefined ? nrcm1 : '',
            nrcm1Risk: nrcm1risk !== undefined ? nrcm1risk : '',
            nrcm2: nrcm2 !== undefined ? nrcm2 : '',
            nrcm2Risk: nrcm2risk !== undefined ? nrcm2risk : '',
            nrcm3: nrcm3 !== undefined ? nrcm3 : '',
            nrcm3Risk: nrcm3risk !== undefined ? nrcm3risk : '',
            pcHoursTotal: pchourstotal !== undefined ? pchourstotal : '',
            pcHoursNG: pchoursng !== undefined ? pchoursng : '',
            pc25HoursInAO: pc25hoursinao !== undefined ? pc25hoursinao : '',
            piHoursTotal: pihourstotal !== undefined ? pihourstotal : '',
            piHoursNG: pihoursng !== undefined ? pihoursng : '',
            pi25HoursInAO: pi25hoursinao !== undefined ? pi25hoursinao : '',
            nrcm1HoursTotal: nrcm1hourstotal !== undefined ? nrcm1hourstotal : '',
            nrcm1HoursNG: nrcm1hoursng !== undefined ? nrcm1hoursng : '',
            nrcm125HoursInAO: nrcm125hoursinao !== undefined ? nrcm125hoursinao : '',
            nrcm2HoursTotal: nrcm2hourstotal !== undefined ? nrcm2hourstotal : '',
            nrcm2HoursNG: nrcm2hoursng !== undefined ? nrcm2hoursng : '',
            nrcm225HoursInAO: nrcm225hoursinao !== undefined ? nrcm225hoursinao : '',
            nrcm3HoursTotal: nrcm3hourstotal !== undefined ? nrcm3hourstotal : '',
            nrcm3HoursNG: nrcm3hoursng !== undefined ? nrcm3hoursng : '',
            nrcm325HoursInAO: nrcm325hoursinao !== undefined ? nrcm325hoursinao : '',
            aircrewRiskMitigation: aircrewriskmitigation !== undefined ? aircrewriskmitigation : '',
            aircrewInitialRisk: aircrewinitialrisk !== undefined ? aircrewinitialrisk : 'L',
            aircrewMitigatedRisk: aircrewmitigatedrisk !== undefined ? aircrewmitigatedrisk : '',
            airAssault: airassault !== undefined ? airassault : '',
            AH64AttackReconSecurity: AH64attackreconsecurity !== undefined ? AH64attackreconsecurity : '',
            MEDEVAC: medevac !== undefined ? medevac : '',
            CASEVAC: casevac !== undefined ? casevac : '',
            FARP: farp !== undefined ? farp : '',
            crossCountryBorder: crosscountryborder !== undefined ? crosscountryborder : '',
            multiship: multiship !== undefined ? multiship : '',
            mixedMultiShip: mixedmultiship !== undefined ? mixedmultiship : '',
            MTFGeneralTraining: mtfgeneraltraining !== undefined ? mtfgeneraltraining : '',
            dartOneTimeFlight: dartonetimeflight !== undefined ? dartonetimeflight : '',
            blackout: blackout !== undefined ? blackout : '',
            waterBucket: waterbucket !== undefined ? waterbucket : '',
            paradrops: paradrops !== undefined ? paradrops : '',
            rappelSpiesFries: rappelspiesfries !== undefined ? rappelspiesfries : '',
            externalLoads: externalloads !== undefined ? externalloads : '',
            airmovementVIP: airmovementvip !== undefined ? airmovementvip : '',
            continuation: continuation !== undefined ? continuation : '',
            CEFS: cefs !== undefined ? cefs : '',
            fatCow: fatcow !== undefined ? fatcow : '',
            terrainFlight: terrainflight !== undefined ? terrainflight : '',
            mountainOperations: mountainoperations !== undefined ? mountainoperations : '',
            overwaterOperations: overwateroperations !== undefined ? overwateroperations : '',
            pinnacleOperations: pinnacleoperations !== undefined ? pinnacleoperations : '',
            urbanOperations: urbanoperations !== undefined ? urbanoperations : '',
            confinedOperations: confinedoperations !== undefined ? confinedoperations : '',
            OGEwithin10: ogewithin10 !== undefined ? ogewithin10 : '',
            IGEwithin10: igewithin10 !== undefined ? igewithin10 : '',
            OGEwithin5: ogewithin5 !== undefined ? ogewithin5 : '',
            IGEwithin5: igewithin5 !== undefined ? igewithin5 : '',
            Cruisewithin10: cruisewithin10 !== undefined ? cruisewithin10 : '',
            progessionEvaluationEPs: progessionevaluationeps !== undefined ? progessionevaluationeps : '',
            IFRSimulatedIMC: ifrsimulatedimc !== undefined ? ifrsimulatedimc : '',
            CBRNE: cbrne !== undefined ? cbrne : '',
            nonLiveHoist: nonlivehoist !== undefined ? nonlivehoist : '',
            liveHoist: livehoist !== undefined ? livehoist : '',
            combatManueveringFlight: combatmanueveringflight !== undefined ? combatmanueveringflight : '',
            gunneryLiveFire: gunnerylivefire !== undefined ? gunnerylivefire : '',
            CALFEX: calfex !== undefined ? calfex : '',
            AMS: ams !== undefined ? ams : '',
            blackoutCurtain: blackoutcurtain !== undefined ? blackoutcurtain : '',
            OWUntrained: owuntrained !== undefined ? owuntrained : '',
            famFlight: famflight !== undefined ? famflight : '',
            hoverWXRlt500: hoverwxrlt500 !== undefined ? hoverwxrlt500 : '',
            UH60DoorsOff: uh60doorsOff !== undefined ? uh60doorsOff : '',
            OWSea4to5: owsea4to5 !== undefined ? owsea4to5 : '',
            OWSeaGt6: owseagt6 !== undefined ? owseagt6 : '',
            pcGt90: pcgt90 !== undefined ? pcgt90 : '',
            pcGt60: pcgt60 !== undefined ? pcgt60 : '',
            pcGt30: pcgt30 !== undefined ? pcgt30 : '',
            piGt90: pigt90 !== undefined ? pigt90 : '',
            piGt60: pigt60 !== undefined ? pigt60 : '',
            piGt30: pigt30 !== undefined ? pigt30 : '',
            nrcm1Gt90: nrcm1gt90 !== undefined ? nrcm1gt90 : '',
            nrcm1Gt60: nrcm1gt60 !== undefined ? nrcm1gt60 : '',
            nrcm1Gt30: nrcm1gt30 !== undefined ? nrcm1gt30 : '',
            nrcm2Gt90: nrcm2gt90 !== undefined ? nrcm2gt90 : '',
            nrcm2Gt60: nrcm2gt60 !== undefined ? nrcm2gt60 : '',
            nrcm2Gt30: nrcm2gt30 !== undefined ? nrcm2gt30 : '',
            nrcm3Gt90: nrcm3gt90 !== undefined ? nrcm3gt90 : '',
            nrcm3Gt60: nrcm3gt60 !== undefined ? nrcm3gt60 : '',
            nrcm3Gt30: nrcm3gt30 !== undefined ? nrcm3gt30 : '',
            hoistGt90: hoistgt90 !== undefined ? hoistgt90 : '',
            hoistGt60: hoistgt60 !== undefined ? hoistgt60 : '',
            hoistGt30: hoistgt30 !== undefined ? hoistgt30 : '',
            specificGt12: specificgt12 !== undefined ? specificgt12 : '',
            specific2to12: specific2to12 !== undefined ? specific2to12 : '',
            specificLt2: specificlt2 !== undefined ? specificlt2 : '',
            vagueGt12: vaguegt12 !== undefined ? vaguegt12 : '',
            vague2to12: vague2to12 !== undefined ? vague2to12 : '',
            vagueLt2: vaguelt2 !== undefined ? vaguelt2 : '',
            missionRiskMitigation: missionriskmitigation !== undefined ? missionriskmitigation : '',
            missionInitialRisk: missioninitialrisk !== undefined ? missioninitialrisk : 'L',
            missionMitigatedRisk: missionmitigatedrisk !== undefined ? missionmitigatedrisk : '',
            gt1000: gt1000 !== undefined ? gt1000 : '',
            lt1000: lt1000 !== undefined ? lt1000 : '',
            lt700: lt700 !== undefined ? lt700 : '',
            lt500: lt500 !== undefined ? lt500 : '',
            gt3: gt3 !== undefined ? gt3 : '',
            gt2: gt2 !== undefined ? gt2 : '',
            gt1: gt1 !== undefined ? gt1 : '',
            lt1: lt1 !== undefined ? lt1 : '',
            altRequired: altrequired !== undefined ? altrequired : '',
            gt25IllumAndgt30degrees: gt25illumandgt30degrees !== undefined ? gt25illumandgt30degrees : '',
            lt25IllumAndlt30degrees: lt25illumandlt30degrees !== undefined ? lt25illumandlt30degrees : '',
            gt25IllumAndgt30degreesLimitedLighting: gt25illumandgt30degreeslimitedlighting !== undefined ? gt25illumandgt30degreeslimitedlighting : '',
            windGt30: windgt30 !== undefined ? windgt30 : '',
            windGt30Hoist: windgt30hoist !== undefined ? windgt30hoist : '',
            gustSpreadGt20: gustspreadgt20 !== undefined ? gustspreadgt20 : '',
            forecastThunderstorms: forecastthunderstorms !== undefined ? forecastthunderstorms : '',
            modTurbulenceIcing: modturbulenceicing !== undefined ? modturbulenceicing : '',
            oatNegative10Positive30: oatnegative10positive30 !== undefined ? oatnegative10positive30 : '',
            weatherRiskMitigation: weatherriskmitigation !== undefined ? weatherriskmitigation : '',
            weatherInitialRisk: weatherinitialrisk !== undefined ? weatherinitialrisk : 'L',
            weatherMitigatedRisk: weathermitigatedrisk !== undefined ? weathermitigatedrisk : '',
            finalInitialRisk: finalinitialrisk !== undefined ? finalinitialrisk : '',
            finalRiskMitigation: finalriskmitigation !== undefined ? finalriskmitigation : '',
            finalMitigatedRisk: finalmitigatedrisk !== undefined ? finalmitigatedrisk : '',
            briefer: briefer !== undefined ? briefer : '',
            brieferComment: briefercomment !== undefined ? briefercomment : '',
            brieferCommentDate: briefercommentdate !== undefined ? briefercommentdate : '',
            approver: approver !== undefined ? approver : '',
            approverComment: approvercomment !== undefined ? approvercomment : '',
            approverCommentDate: approvercommentdate !== undefined ? approvercommentdate : '',
            greatestRisk: greatestrisk !== undefined ? greatestrisk : '',
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

        const handleFlight = async (flightObject) => {
            if (formMode === "File") {
                setFlashMessage('Flight added successfully')
                try {
                    await axios.post('http://localhost:3001/api/add-flight', flightObject);
                    await fetchFlightsData(setFlights);
                    await handleLoadingChange(false)
                    await handleModalClose();
                    handleFlashClick();
                } catch (error) {
                    console.error('Error adding flight:', error);
                }
            } else if (formMode === "Update") {
                setFlashMessage('Flight updated successfully')
                try {
                    await axios.put('http://localhost:3001/api/update-flight', flightObject);
                    await fetchFlightsData(setFlights);
                    await handleLoadingChange(false)
                    await handleModalClose();
                    handleFlashClick();
                } catch (error) {
                    console.error('Error adding flight:', error);
                }
            }
        };
        handleFlight(data)
    };

    return (
        <>
            <form style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Tabs */}
                <Box borderBottom={1} borderColor={'divider'}>
                    <Tabs value={tabValue} onChange={handleTabClick} variant="scrollable"
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
                        flexGrow: 1, // Allows div to grow and take up available space
                        overflowY: 'auto', // Enable vertical scrolling if needed
                    }}
                    onScroll={handleScroll}
                    ref={scrollableContainerRef}
                >
                    <IconButton
                        aria-label="close"
                        onClick={handleModalClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
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
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ marginTop: 'auto', marginBottom: '8px' }}
                    disabled={!scrollAtBottom}
                    onClick={() => { handleSubmitButtonClick(tabValue) }}
                >
                    {buttonMessage}
                </Button>
            </form >
        </>
    );
}