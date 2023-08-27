export default async function deleteFlight(client, flight) {
    const startTime = new Date();

    try {
        const { flightid } = flight;
        const flightQuery = 'SELECT * FROM flights WHERE flightid = $1';
        const flightResult = await client.query(flightQuery, [flightid]);
        const existingFlight = flightResult.rows[0];

        if (existingFlight) {
            const deleteQuery = 'DELETE FROM flights WHERE flightid = $1';
            try {
                await client.query(deleteQuery, [flightid]);

                const endTime = new Date();
                const duration = (endTime - startTime) / 1000;
                console.log(`Deleted flight ${flightid} in ${duration} seconds`);
            } catch (deleteError) {
                console.error(`Cannot delete flight with flightid ${flightid}:`, deleteError);
            }
        } else {
            console.log(`Flight with flightid ${flightid} does not exist.`);
        }
    } catch (queryError) {
        console.error(`Error querying for flight with flightid ${flightid}:`, queryError);
    }
}
