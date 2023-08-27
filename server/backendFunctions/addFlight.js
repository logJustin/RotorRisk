import pg from 'pg';

export default async function addFlight(client, flight) {
    const startTime = new Date();

    try {
        const flightIDtoCheck = flight.flightID;
        const flightQuery = 'SELECT * FROM flights WHERE flightID = $1';
        const flightResult = await client.query(flightQuery, [flightIDtoCheck]);
        const existingFlight = flightResult.rows[0];

        if (existingFlight) {
            console.log(`${flight.flightID} already exists.`);
            return;
        }

        const columns = Object.keys(flight).join(', ');
        const placeholders = Object.keys(flight).map((_, index) => '$' + (index + 1)).join(', ');

        const insertQuery = `INSERT INTO flights (${columns}) VALUES (${placeholders})`;
        const insertParams = Object.values(flight);

        await client.query(insertQuery, insertParams);
        console.log(`Inserted ${flight.flightID}`);
    } catch (error) {
        console.error('Error adding flight:', error);
    } finally {
        const endTime = new Date();
        const duration = (endTime - startTime) / 1000;
        console.log(`Query ran in ${duration} seconds`);
    }
}
