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

            console.log(flights)
            // // flights.forEach(async (flight) => {
            // //     try {
            // //         const existingFlightQuery = 'SELECT * FROM flights WHERE flightID = $1';
            // //         const existingFlightResult = await client.query(existingFlightQuery, [flight.flightID]);
            // //         const existingFlight = existingFlightResult.rows[0];

            // //         if (existingFlight) {
            // //             console.log(`${flight.flightID} already exists.`);
            // //         } else {
            // //             const columns = Object.keys(flight).join(', ');
            // //             const placeholders = Object.keys(flight).map((_, index) => '$' + (index + 1)).join(', ');

            // //             const insertQuery = `INSERT INTO flights (${columns}) VALUES (${placeholders})`;
            // //             const insertParams = Object.values(flight);

            // //             try {
            // //                 await client.query(insertQuery, insertParams);
            // //                 console.log(`Inserted ${flight.flightID}`);
            // //             } catch (insertError) {
            // //                 console.error(`Cannot insert ${flight.flightID}:`, insertError);
            // //             }
            // //         }
            // //     } catch (queryError) {
            // //         console.error(`Error querying for ${flight.flightID}:`, queryError);
            // //     }
            // });
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