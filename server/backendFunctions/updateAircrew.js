import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

async function updateCrewmember(crewmember) {
    const startTime = new Date();
    const connectionString = process.env.VITE_PGConnection;

    try {
        const client = new pg.Client(connectionString);
        await client.connect();
        console.log('Connected to ElephantSQL.');

        const uuidToCheck = crewmember.uuid;

        try {
            const personQuery = 'SELECT * FROM aircrews WHERE uuid = $1';
            const person = await client.query(personQuery, [uuidToCheck]);
            console.log('Found Person:', person.rows[0].name);

            if (person.rows.length > 0) {
                const setQuery = 'UPDATE aircrews SET name = $1, position = $2, airframe = $3, aircraft = $4, ng = $5, atleast25inao = $6 WHERE uuid = $7';
                const setParams = [
                    crewmember.name,
                    crewmember.position,
                    crewmember.airframe,
                    crewmember.aircraft,
                    crewmember.ng,
                    crewmember.atleast25InAO,
                    uuidToCheck
                ];

                try {
                    await client.query(setQuery, setParams);
                    console.log(`Updated ${crewmember.name}`);
                } catch (error) {
                    console.error(`Cannot set ${crewmember.name}:`, error);
                }
            } else {
                console.error(`Cannot find ${crewmember.name}`);
            }
        } catch (error) {
            console.error(`Error querying for ${crewmember.name}:`, error);
        }

        const endTime = new Date();
        const duration = (endTime - startTime) / 1000;
        console.log(`Query ran in ${duration} seconds`);
        await client.end();
        console.log('The connection is closed.');
    } catch (error) {
        console.error('Error connecting to ElephantSQL:', error);
    }
}

updateCrewmember({
    uuid: '9631b196-8687-40c6-a77c-4a0463302b2c',
    name: 'CPT Reynolds',
    position: 'pilot',
    airframe: 'HH60M',
    aircraft: 510.8,
    ng: 124.5,
    atleast25InAO: true,
});
