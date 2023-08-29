export default async function addAircrew(client, crewmember) {
    const startTime = new Date();
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
                crewmember.atleast25inao
            ];

            try {
                await client.query(insertQuery, insertParams);
                const endTime = new Date();
                const duration = (endTime - startTime) / 1000;
                console.log(`Inserted ${crewmember.name} in ${duration} seconds`);
            } catch (insertError) {
                console.error(`Cannot insert ${crewmember.name}:`, insertError);
            }
        }
    } catch (queryError) {
        console.error(`Error querying for ${crewmember.name}:`, queryError);
    }
}