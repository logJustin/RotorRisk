import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkClient } from "@clerk/clerk-sdk-node";
import { createClient } from '@supabase/supabase-js'

try { dotenv.config({ path: '../.env' }); } catch (error) {
    console.error('Error loading .env file:', error);
}

const supabaseUrl = 'https://hkkyucqaompohncyttrc.supabase.co'
const supabaseKey = process.env.VITE_SUPABASE_SECRET_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/api/aircrews', async (req, res) => {
    let { data: aircrews, error } = await supabase
        .from('aircrews')
        .select('*');
    if (error) { return res.status(500).json({ error: error.message }); }
    return res.json(aircrews);
});

app.get('/api/flights', async (req, res) => {
    let { data: flights, error } = await supabase
        .from('flights')
        .select('*');
    if (error) { return res.status(500).json({ error: error.message }); }
    return res.json(flights);
});

app.post('/api/add-flight', async (req, res) => {
    try {
        const flight = req.body;
        const { data, error } = await supabase
            .from('flights')
            .upsert([
                {
                    flightid: flight.flightID,
                    date: flight.date,
                    aircrafttype: flight.aircraftType,
                    aircrafttail: flight.aircraftTail,
                    mission: flight.mission,
                    missionstatement: flight.missionStatement,
                    route: flight.route,
                    etd: flight.etd,
                    ete: flight.ete,
                    flightconditions: flight.flightConditions,
                    pc: flight.pc,
                    pcrisk: flight.pcRisk,
                    pcseat: flight.pcSeat,
                    pi: flight.pi,
                    pirisk: flight.piRisk,
                    piseat: flight.piSeat,
                    nrcm1: flight.nrcm1,
                    nrcm1risk: flight.nrcm1Risk,
                    nrcm2: flight.nrcm2,
                    nrcm2risk: flight.nrcm2Risk,
                    nrcm3: flight.nrcm3,
                    nrcm3risk: flight.nrcm3Risk,
                    pchourstotal: flight.pcHoursTotal,
                    pchoursng: flight.pcHoursNG,
                    pc25hoursinao: flight.pc25HoursInAO,
                    pihourstotal: flight.piHoursTotal,
                    pihoursng: flight.piHoursNG,
                    pi25hoursinao: flight.pi25HoursInAO,
                    nrcm1hourstotal: flight.nrcm1HoursTotal,
                    nrcm1hoursng: flight.nrcm1HoursNG,
                    nrcm125hoursinao: flight.nrcm125HoursInAO,
                    nrcm2hourstotal: flight.nrcm2HoursTotal,
                    nrcm2hoursng: flight.nrcm2HoursNG,
                    nrcm225hoursinao: flight.nrcm225HoursInAO,
                    nrcm3hourstotal: flight.nrcm3HoursTotal,
                    nrcm3hoursng: flight.nrcm3HoursNG,
                    nrcm325hoursinao: flight.nrcm325HoursInAO,
                    aircrewriskmitigation: flight.aircrewRiskMitigation,
                    aircrewinitialrisk: flight.aircrewInitialRisk,
                    aircrewmitigatedrisk: flight.aircrewMitigatedRisk,
                    airassault: flight.airAssault,
                    ah64attackreconsecurity: flight.AH64AttackReconSecurity,
                    medevac: flight.MEDEVAC,
                    casevac: flight.CASEVAC,
                    farp: flight.FARP,
                    crosscountryborder: flight.crossCountryBorder,
                    multiship: flight.multiship,
                    mixedmultiship: flight.mixedMultiShip,
                    mtfgeneraltraining: flight.MTFGeneralTraining,
                    dartonetimeflight: flight.dartOneTimeFlight,
                    blackout: flight.blackout,
                    waterbucket: flight.waterBucket,
                    paradrops: flight.paradrops,
                    rappelspiesfries: flight.rappelSpiesFries,
                    externalloads: flight.externalLoads,
                    airmovementvip: flight.airmovementVIP,
                    continuation: flight.continuation,
                    cefs: flight.CEFS,
                    fatcow: flight.fatCow,
                    terrainflight: flight.terrainFlight,
                    mountainoperations: flight.mountainOperations,
                    overwateroperations: flight.overwaterOperations,
                    pinnacleoperations: flight.pinnacleOperations,
                    urbanoperations: flight.urbanOperations,
                    confinedoperations: flight.confinedOperations,
                    ogewithin10: flight.OGEwithin10,
                    igewithin10: flight.IGEwithin10,
                    ogewithin5: flight.OGEwithin5,
                    igewithin5: flight.IGEwithin5,
                    cruisewithin10: flight.Cruisewithin10,
                    progessionevaluationeps: flight.progessionEvaluationEPs,
                    ifrsimulatedimc: flight.IFRSimulatedIMC,
                    cbrne: flight.CBRNE,
                    nonlivehoist: flight.nonLiveHoist,
                    livehoist: flight.liveHoist,
                    combatmanueveringflight: flight.combatManueveringFlight,
                    gunnerylivefire: flight.gunneryLiveFire,
                    calfex: flight.CALFEX,
                    ams: flight.AMS,
                    blackoutcurtain: flight.blackoutCurtain,
                    owuntrained: flight.OWUntrained,
                    famflight: flight.famFlight,
                    hoverwxrlt500: flight.hoverWXRlt500,
                    uh60doorsoff: flight.UH60DoorsOff,
                    owsea4to5: flight.OWSea4to5,
                    owseagt6: flight.OWSeaGt6,
                    pcgt90: flight.pcGt90,
                    pcgt60: flight.pcGt60,
                    pcgt30: flight.pcGt30,
                    pigt90: flight.piGt90,
                    pigt60: flight.piGt60,
                    pigt30: flight.piGt30,
                    nrcm1gt90: flight.nrcm1Gt90,
                    nrcm1gt60: flight.nrcm1Gt60,
                    nrcm1gt30: flight.nrcm1Gt30,
                    nrcm2gt90: flight.nrcm2Gt90,
                    nrcm2gt60: flight.nrcm2Gt60,
                    nrcm2gt30: flight.nrcm2Gt30,
                    nrcm3gt90: flight.nrcm3Gt90,
                    nrcm3gt60: flight.nrcm3Gt60,
                    nrcm3gt30: flight.nrcm3Gt30,
                    hoistgt90: flight.hoistGt90,
                    hoistgt60: flight.hoistGt60,
                    hoistgt30: flight.hoistGt30,
                    specificgt12: flight.specificGt12,
                    specific2to12: flight.specific2to12,
                    specificlt2: flight.specificLt2,
                    vaguegt12: flight.vagueGt12,
                    vague2to12: flight.vague2to12,
                    vaguelt2: flight.vagueLt2,
                    missionriskmitigation: flight.missionRiskMitigation,
                    missioninitialrisk: flight.missionInitialRisk,
                    missionmitigatedrisk: flight.missionMitigatedRisk,
                    gt1000: flight.gt1000,
                    lt1000: flight.lt1000,
                    lt700: flight.lt700,
                    lt500: flight.lt500,
                    gt3: flight.gt3,
                    gt2: flight.gt2,
                    gt1: flight.gt1,
                    lt1: flight.lt1,
                    altrequired: flight.altRequired,
                    gt25illumandgt30degrees: flight.gt25IllumAndgt30degrees,
                    lt25illumandlt30degrees: flight.lt25IllumAndlt30degrees,
                    gt25illumandgt30degreeslimitedlighting: flight.gt25IllumAndgt30degreesLimitedLighting,
                    windgt30: flight.windGt30,
                    windgt30hoist: flight.windGt30Hoist,
                    gustspreadgt20: flight.gustSpreadGt20,
                    forecastthunderstorms: flight.forecastThunderstorms,
                    modturbulenceicing: flight.modTurbulenceIcing,
                    oatnegative10positive30: flight.oatNegative10Positive30,
                    weatherriskmitigation: flight.weatherRiskMitigation,
                    weatherinitialrisk: flight.weatherInitialRisk,
                    weathermitigatedrisk: flight.weatherMitigatedRisk,
                    finalinitialrisk: flight.finalInitialRisk,
                    finalriskmitigation: flight.finalRiskMitigation,
                    finalmitigatedrisk: flight.finalMitigatedRisk,
                    briefer: flight.briefer,
                    briefercomment: flight.brieferComment,
                    briefercommentdate: flight.brieferCommentDate,
                    approver: flight.approver,
                    approvercomment: flight.approverComment,
                    approvercommentdate: flight.approverCommentDate,
                    greatestrisk: flight.greatestRisk,
                    filerid: flight.filerID,
                    filername: flight.filerName,
                },
            ], { onConflict: ['flightid'] })
            .select();

        if (error) {
            throw error;
        }
        res.status(200).json({ message: 'Flight added or updated successfully', data: data });
    } catch (error) {
        console.error('Error adding or updating flight:', error);
        res.status(500).json({ error: 'An error occurred while adding or updating the flight' });
    }
});

app.delete('/api/delete-flight', async (req, res) => {
    try {
        const flightData = req.body;
        const { flightid } = flightData;

        const { error } = await supabase
            .from('flights')
            .delete()
            .eq('flightid', flightid);

        if (error) {
            console.error('Error deleting flight:', error);
            return res.status(500).json({ error: 'An error occurred while deleting the flight' });
        }

        res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
        console.error('Error deleting flight:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
});

app.post('/api/add-crewmember', async (req, res) => {
    try {
        const crewData = req.body;
        const { data, error } = await supabase
            .from('aircrews')
            .upsert([
                {
                    uuid: crewData.uuid,
                    name: crewData.name,
                    position: crewData.position,
                    airframe: crewData.airframe,
                    aircraft: crewData.aircraft,
                    ng: crewData.ng,
                    atleast25inao: crewData.atleast25inao,
                },
            ], { onConflict: ['uuid'] })
            .select();

        if (error) {
            throw error;
        }
        res.status(200).json({ message: 'Crewmember added or updated successfully', data: data });
    } catch (error) {
        console.error('Error adding or updating crewmember:', error);
        res.status(500).json({ error: 'An error occurred while adding or updating the crewmember' });
    }
});

app.delete('/api/delete-crewmember', async (req, res) => {
    try {
        const { uuid } = req.body;  // Destructure uuid from request body

        const { error } = await supabase
            .from('aircrews')
            .delete()
            .eq('uuid', uuid);

        if (error) {
            throw error;
        }

        res.status(200).json({ message: 'Crewmember deleted successfully' });
    } catch (error) {
        console.error('Error deleting crewmember:', error);
        res.status(500).json({ error: 'An error occurred while deleting the crewmember' });
    }
});


app.post('/api/add-suggestion', async (req, res) => {
    try {
        const suggestion = req.body;
        const { data, error } = await supabase
            .from('suggestions')
            .upsert([
                {
                    id: suggestion.id,
                    user_name: suggestion.user_name,
                    suggestion: suggestion.suggestion,
                    date: suggestion.date,
                },
            ], { onConflict: ['id'] })
            .select();

        if (error) {
            throw error;
        }
        res.status(200).json({ message: 'Suggesions added or updated successfully', data: data });
    } catch (error) {
        console.error('Error adding or updating suggestion:', error);
        res.status(500).json({ error: 'An error occurred while adding or updating the suggestion' });
    }
});

app.post('/api/updateRole', async (req, res) => {
    const { role, userId, rank, admin } = req.body;

    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
            "rank": rank,
            "role": role,
            "admin": admin
        }
    });
    res.status(200).json({ success: true });
});

app.get('/api/userList', async (req, res) => {
    const response = await clerkClient.users.getUserList();
    res.json(response);
})

const currentModuleUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentModuleUrl.pathname);

// Serve the static assets of the React app
app.use(express.static(path.join(currentDir, '..', 'dist')));
// app.use(express.static(path.join(currentDir, '..', 'build')));

// Catch-all route to serve the React app's index.html
app.get('*', (req, res) => {
    const indexPathing = path.join(currentDir, '..', 'dist/index.html')
    res.sendFile(indexPathing)
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});
