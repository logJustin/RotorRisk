import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

async function addFlight(flight) {
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
const flightObject = {
    AH64AttackReconSecurity: "",
    AMS: "",
    CALFEX: "",
    CASEVAC: "",
    CBRNE: "",
    CEFS: "D",
    Cruisewithin10: "",
    FARP: "",
    IFRSimulatedIMC: "",
    IGEwithin5: "",
    IGEwithin10: "",
    MEDEVAC: "",
    MTFGeneralTraining: "",
    OGEwithin5: "",
    OGEwithin10: "",
    OWSea4to5: "",
    OWSeaGt6: "",
    OWUntrained: "",
    UH60DoorsOff: "",
    airAssault: "",
    aircraftTail: "20-20130",
    aircraftType: "HH60M",
    aircrewInitialRisk: "M",
    aircrewMitigatedRisk: "L",
    aircrewRiskMitigation: "Aircrew will brief all tasks during crew brief and again prior to execution to ensure shared understanding prior to implementation.",
    airmovementVIP: "",
    altRequired: "",
    approver: "MAJ Thomas",
    approverComment: "Fly safe!",
    approverCommentDate: "27AUG23",
    blackout: "",
    blackoutCurtain: "",
    briefer: "CW3 Zapata",
    brieferComment: "- Call Weather\n- Review Task 1070\n- Conduct simulated EPs in downwind leg to ensure FI has sufficient time.",
    brieferCommentDate: "26AUG23",
    combatManueveringFlight: "",
    confinedOperations: "",
    continuation: "",
    crossCountryBorder: "",
    dartOneTimeFlight: "",
    date: "28AUG23",
    etd: "15:00",
    ete: "2.0",
    externalLoads: "",
    famFlight: "",
    fatCow: "",
    finalInitialRisk: "M",
    finalMitigatedRisk: "L",
    finalRiskMitigation: "All actions will be done IAW Task 1070. Aircrew will mutually acknowledge the real-world emergency and training will stop until the emergency is complete.",
    flightConditions: "1",
    flightID: "650a9954-ebfe-475c-8a2c-be0858fc54cd",
    forecastThunderstorms: "",
    greatestRisk: "Crew efficiency during a real-world emergency. ",
    gt1: "",
    gt2: "",
    gt3: "D",
    gt25IllumAndgt30degrees: "",
    gt25IllumAndgt30degreesLimitedLighting: "",
    gt1000: "D",
    gunneryLiveFire: "",
    gustSpreadGt20: "",
    hoistGt30: "",
    hoistGt60: "",
    hoistGt90: "",
    hoverWXRlt500: "",
    liveHoist: "",
    lt1: "",
    lt25IllumAndlt30degrees: "",
    lt500: "",
    lt700: "",
    lt1000: "",
    mission: "NRCM RL Progression",
    missionInitialRisk: "L",
    missionMitigatedRisk: "L",
    missionRiskMitigation: "CEFS Operations will be discussed in detail to ensure progressing NRCM understands how to adjust tasks/scan sectors prior to flight.",
    missionStatement: "NRCM RL Progression in local area.",
    mixedMultiShip: "",
    modTurbulenceIcing: "",
    mountainOperations: "",
    multiship: "",
    nonLiveHoist: "",
    nrcm1: "SSG Stewart",
    nrcm1Gt30: "",
    nrcm1Gt60: "",
    nrcm1Gt90: "",
    nrcm1HoursNG: "480.4",
    nrcm1HoursTotal: "1579.7",
    nrcm1Risk: "L",
    nrcm2: "SPC Dilick",
    nrcm2Gt30: "",
    nrcm2Gt60: "",
    nrcm2Gt90: "",
    nrcm2HoursNG: "69.3",
    nrcm2HoursTotal: "176.6",
    nrcm2Risk: "M",
    nrcm3: "",
    nrcm3Gt30: "",
    nrcm3Gt60: "",
    nrcm3Gt90: "",
    nrcm3HoursNG: "",
    nrcm3HoursTotal: "",
    nrcm3Risk: "L",
    nrcm125HoursInAO: true,
    nrcm225HoursInAO: true,
    nrcm325HoursInAO: "",
    oatNegative10Positive30: "",
    overwaterOperations: "",
    paradrops: "",
    pc: "CW2 Brandes",
    pc25HoursInAO: true,
    pcGt30: "",
    pcGt60: "",
    pcGt90: "",
    pcHoursNG: "103.3",
    pcHoursTotal: "400.3",
    pcRisk: "M",
    pcSeat: "Left",
    pi: "CW2 Rappisi",
    pi25HoursInAO: true,
    piGt30: "D",
    piGt60: "",
    piGt90: "",
    piHoursNG: "64.5",
    piHoursTotal: "273.1",
    piRisk: "M",
    piSeat: "Right",
    pinnacleOperations: "",
    progessionEvaluationEPs: "D",
    rappelSpiesFries: "",
    route: "ETIC-ETIC",
    specific2to12: "",
    specificGt12: "",
    specificLt2: "",
    terrainFlight: "D",
    urbanOperations: "",
    vague2to12: "",
    vagueGt12: "true",
    vagueLt2: "",
    waterBucket: "",
    weatherInitialRisk: "L",
    weatherMitigatedRisk: "L",
    weatherRiskMitigation: "Will not below above minimums.",
    windGt30: "",
    windGt30Hoist: ""
};

addFlight(flightObject);
