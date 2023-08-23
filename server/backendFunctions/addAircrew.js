import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

async function addCrewmember(crewmember) {
    const startTime = new Date();
    const connectionString = process.env.VITE_PGConnection;

    const client = new pg.Client(connectionString);

    try {
        await client.connect();
        console.log('Connected to ElephantSQL.');

        const uuidToCheck = crewmember.uuid;

        try {
            const personQuery = 'SELECT * FROM aircrews WHERE uuid = $1';
            const personResult = await client.query(personQuery, [uuidToCheck]);
            const existingPerson = personResult.rows[0];

            if (existingPerson) {
                console.log(`${crewmember.name} already exists.`);
            } else {
                const insertQuery = 'INSERT INTO aircrews (uuid, name, position, airframe, aircraft, ng, atleast25inao) VALUES ($1, $2, $3, $4, $5, $6, $7)';
                const insertParams = [
                    crewmember.uuid,
                    crewmember.name,
                    crewmember.position,
                    crewmember.airframe,
                    crewmember.aircraft,
                    crewmember.ng,
                    crewmember.atleast25InAO
                ];

                try {
                    await client.query(insertQuery, insertParams);
                    console.log(`Inserted ${crewmember.name}`);
                } catch (insertError) {
                    console.error(`Cannot insert ${crewmember.name}:`, insertError);
                }
            }
        } catch (queryError) {
            console.error(`Error querying for ${crewmember.name}:`, queryError);
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

addCrewmember({
    uuid: '9631b196-8687-40c6-a77c-4a0468374628',
    name: 'CPT Daddy',
    position: 'pilot',
    airframe: 'HH60M',
    aircraft: 600.2,
    ng: 124.5,
    atleast25InAO: true,
});
