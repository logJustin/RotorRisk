import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

async function retrieveFlights() {
    const startTime = new Date();
    const connectionString = process.env.VITE_PGConnection;
    const client = new pg.Client(connectionString);

    try {
        await client.connect();
        console.log('Connected to ElephantSQL.');

        try {
            const flightQuery = 'SELECT * FROM flights';
            const flightResult = await client.query(flightQuery);
            const flights = flightResult.rows;
            return flights
        } catch (queryError) {
            console.error('Error querying flights:', queryError);
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

export default retrieveFlights;