export default async function updateFlight(client, flight) {
    const startTime = new Date();

    try {
        const { flightID } = flight;
        const flightQuery = 'SELECT * FROM flights WHERE flightID = $1';
        const flightResult = await client.query(flightQuery, [flightID]);
        const existingFlight = flightResult.rows[0];

        if (existingFlight) {
            const setStatement = Object.keys(flight).map((param, index) => `${param} = $${index + 1}`);
            const updateQuery = `UPDATE flights SET ${setStatement.join(', ')} WHERE flightid = $${Object.keys(flight).length + 1}`;

            try {
                const values = [...Object.values(flight), flightID];
                await client.query(updateQuery, values);

                const endTime = new Date();
                const duration = (endTime - startTime) / 1000;
                console.log(`Updated ${flight.flightID} in ${duration} seconds`);
            } catch (updateError) {
                console.error(`Cannot update ${flight.flightID}:`, updateError);
            }

        } else {
            console.log(`${flight.flightID} does not exist.`);
        }
    } catch (queryError) {
        console.error(`Error querying for ${flight.flightID}:`, queryError);
    }
}
