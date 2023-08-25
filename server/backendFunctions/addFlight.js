import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export default async function addFlight(flight) {
    const startTime = new Date();
    const connectionString = process.env.VITE_PGConnection;
    const client = new pg.Client(connectionString);

    try {
        await client.connect();
        console.log('Connected to ElephantSQL.');

        const flightIDtoCheck = flight.flightID;

        try {

            const flightQuery = 'SELECT * FROM flights WHERE flightID = $1';
            const flightResult = await client.query(flightQuery, [flightIDtoCheck]);
            const existingFlight = flightResult.rows[0];

            if (existingFlight) {
                console.log(`${flight.flightID} already exists.`);
            } else {
                const columns = Object.keys(flight).join(', ');
                const placeholders = Object.keys(flight).map((_, index) => '$' + (index + 1)).join(', ');

                const insertQuery = `INSERT INTO flights (${columns}) VALUES (${placeholders})`;
                const insertParams = Object.values(flight);

                try {
                    await client.query(insertQuery, insertParams);
                    console.log(`Inserted ${flight.flightID}`);
                } catch (insertError) {
                    console.error(`Cannot insert ${flight.flightID}:`, insertError);
                }
            }
        } catch (queryError) {
            console.error(`Error querying for ${flight.name}:`, queryError);
        }
    } catch (connectionError) {
        console.error('Error connecting to ElephantSQL:', connectionError);
    } finally {
        const endTime = new Date();
        const duration = (endTime - startTime) / 1000;
        console.log(`Query ran in ${duration} seconds`);

        if (client) {
            await client.end();
            console.log('The connection is closed.');
        }
    }
}

// Your flight object here
// const flightObject = {
//     flightID: "fab9273c-110e-4cd4-831d-748dc5d473c5",
//     date: "30AUG23",
//     aircraftType: "HH60M",
//     aircraftTail: "20-20132",
//     mission: "CONT TNG",
//     missionStatement: "IFR Flight in local area for WXR minimums",
//     route: "ETIC-EDQM-ETIC",
//     etd: "10:00",
//     ete: "0",
//     flightConditions: "1 4",
//     pc: "CW2 Montiel",
//     pcRisk: "M",
//     pcSeat: "Left",
//     pi: "WO1 Baswell",
//     piRisk: "M",
//     piSeat: "Right",
//     nrcm1: "SPC Yenter",
//     nrcm1Risk: "M",
//     nrcm2: "",
//     nrcm2Risk: "L",
//     nrcm3: "",
//     nrcm3Risk: "L",
//     pcHoursTotal: "583.5",
//     pcHoursNG: "155.3",
//     pc25HoursInAO: true,
//     piHoursTotal: "181.7",
//     piHoursNG: "47.2",
//     pi25HoursInAO: true,
//     nrcm1HoursTotal: "408.0",
//     nrcm1HoursNG: "117.7",
//     nrcm125HoursInAO: true,
//     nrcm2HoursTotal: "",
//     nrcm2HoursNG: "",
//     nrcm225HoursInAO: "",
//     nrcm3HoursTotal: "",
//     nrcm3HoursNG: "",
//     nrcm325HoursInAO: "",
//     aircrewRiskMitigation: "Aircrew has PC with 250+ hours in local area. NRCM1 has 200+ hours in local area. NRCM1 will sit behind PI to ensure airspace surveillance during SIM IMC portions of flight.",
//     aircrewInitialRisk: "M",
//     aircrewMitigatedRisk: "L",
//     airAssault: "",
//     AH64AttackReconSecurity: "",
//     MEDEVAC: "",
//     CASEVAC: "",
//     FARP: "",
//     crossCountryBorder: "",
//     multiship: "",
//     mixedMultiShip: "",
//     MTFGeneralTraining: "",
//     dartOneTimeFlight: "",
//     blackout: "",
//     waterBucket: "",
//     paradrops: "",
//     rappelSpiesFries: "",
//     externalLoads: "",
//     airmovementVIP: "",
//     continuation: "D",
//     CEFS: "",
//     fatCow: "",
//     terrainFlight: "",
//     mountainOperations: "",
//     overwaterOperations: "",
//     pinnacleOperations: "",
//     urbanOperations: "",
//     confinedOperations: "",
//     OGEwithin10: "",
//     IGEwithin10: "",
//     OGEwithin5: "",
//     IGEwithin5: "",
//     Cruisewithin10: "",
//     progessionEvaluationEPs: "",
//     IFRSimulatedIMC: "D",
//     CBRNE: "",
//     nonLiveHoist: "",
//     liveHoist: "",
//     combatManueveringFlight: "",
//     gunneryLiveFire: "",
//     CALFEX: "",
//     AMS: "",
//     blackoutCurtain: "",
//     OWUntrained: "",
//     famFlight: "",
//     hoverWXRlt500: "",
//     UH60DoorsOff: "",
//     OWSea4to5: "",
//     OWSeaGt6: "",
//     pcGt90: "",
//     pcGt60: "",
//     pcGt30: "D",
//     piGt90: "",
//     piGt60: "D",
//     piGt30: "",
//     nrcm1Gt90: "",
//     nrcm1Gt60: "",
//     nrcm1Gt30: "",
//     nrcm2Gt90: "",
//     nrcm2Gt60: "",
//     nrcm2Gt30: "",
//     nrcm3Gt90: "",
//     nrcm3Gt60: "",
//     nrcm3Gt30: "",
//     hoistGt90: "",
//     hoistGt60: "",
//     hoistGt30: "",
//     specificGt12: "",
//     specific2to12: "",
//     specificLt2: "",
//     vagueGt12: "true",
//     vague2to12: "",
//     vagueLt2: "",
//     missionRiskMitigation: "Aircrew Brief will discuss all aspects of flight planning and execution: PPC, route, minimum fuel required, ITO technique, holding procedures, and precision approach procedures.",
//     missionInitialRisk: "L",
//     missionMitigatedRisk: "L",
//     gt1000: "D",
//     lt1000: "",
//     lt700: "",
//     lt500: "",
//     gt3: "D",
//     gt2: "",
//     gt1: "",
//     lt1: "",
//     altRequired: "false",
//     gt25IllumAndgt30degrees: "",
//     lt25IllumAndlt30degrees: "",
//     gt25IllumAndgt30degreesLimitedLighting: "",
//     windGt30: "",
//     windGt30Hoist: "",
//     gustSpreadGt20: "",
//     forecastThunderstorms: "",
//     modTurbulenceIcing: "",
//     oatNegative10Positive30: "",
//     weatherRiskMitigation: "-1 will be received ~2 hours prior to departure. A thorough analysis of weather hazards will be conducted; deliberate acknowledgment of minimum freezing levels will be conducted regardless of flight execution during the summer season.",
//     weatherInitialRisk: "L",
//     weatherMitigatedRisk: "L",
//     finalInitialRisk: "M",
//     finalRiskMitigation: "Discussion of employment and pre-execution checks of anti/de-ice equipment will ensure FMC status of required equipment, and the crews' ability to use it, if necessary.",
//     finalMitigatedRisk: "L",
//     briefer: "",
//     brieferComment: "",
//     brieferCommentDate: "",
//     approver: "",
//     approverComment: "",
//     approverCommentDate: "",
//     greatestRisk: "Unexpected Icing Conditions"
// };

// addFlight(flightObject);

// module.exports = addFlight;