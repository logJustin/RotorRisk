export default async function updateAircrew(client, crewmember) {
    const startTime = new Date();
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
                crewmember.atleast25inao,
                uuidToCheck
            ];

            try {
                await client.query(setQuery, setParams);
                const endTime = new Date();
                const duration = (endTime - startTime) / 1000;
                console.log(`Updated ${crewmember.name} in ${duration} seconds`);
            } catch (error) {
                console.error(`Cannot update ${crewmember.name}:`, error);
            }
        } else {
            console.error(`Cannot find ${crewmember.name}, try adding them to Rotor Risk.`);
        }
    } catch (error) {
        console.error(`Error querying for ${crewmember.name}:`, error);
    }
}