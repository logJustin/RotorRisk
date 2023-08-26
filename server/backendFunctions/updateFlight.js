import pg from 'pg'; // Import the 'pg' module for PostgreSQL interaction
import dotenv from 'dotenv'; // Import the 'dotenv' module for environment variables
import pkg from 'pg';
const { Pool } = pkg; // Import the 'Pool' class from 'pg' for connection pooling

dotenv.config(); // Load environment variables from a .env file if present

// Create a connection pool using the provided connection string
const pool = new Pool({
    connectionString: process.env.VITE_PGConnection, // Connection string from environment variables
});


export default async function updateFlight(flight) {
    const startTime = new Date(); // Record the start time of the function execution

    try {
        const client = await pool.connect(); // Acquire a client from the connection pool
        console.log('Connected to ElephantSQL.');

        const { flightID } = flight; // Extract the flightID from the provided flight object

        try {
            // Query to check if a flight with the provided flightID exists
            const flightQuery = 'SELECT * FROM flights WHERE flightID = $1';
            const flightResult = await client.query(flightQuery, [flightID]);
            const existingFlight = flightResult.rows[0]; // Get the first row (if any)

            if (existingFlight) {
                // Construct the SET clause of the UPDATE query
                const setStatement = Object.keys(flight).map((param, index) => `${param} = $${index + 1}`);
                const updateQuery = `UPDATE flights
SET ${setStatement.join(', ')}
WHERE flightid = $${Object.keys(flight).length + 1}`;

                try {
                    const values = [...Object.values(flight), flightID]; // Values for the parameterized query
                    await client.query(updateQuery, values); // Execute the parameterized query
                    console.log(`Updated ${flight.flightID}`);
                } catch (updateError) {
                    console.error(`Cannot update ${flight.flightID}:`, updateError);
                }

            } else {
                console.log(`${flight.flightID} does not exist.`);
            }
        } catch (queryError) {
            console.error(`Error querying for ${flight.flightID}:`, queryError);
        } finally {
            client.release(); // Release the client back to the pool
        }
    } catch (connectionError) {
        console.error('Error connecting to ElephantSQL:', connectionError);
    } finally {
        const endTime = new Date(); // Record the end time of the function execution
        const duration = (endTime - startTime) / 1000; // Calculate the duration in seconds
        console.log(`Query ran in ${duration} seconds`);
    }
}