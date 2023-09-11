export default async function addSuggestion(client, suggestion) {
    const startTime = new Date();
    const uuidToCheck = suggestion.id;

    try {
        const suggestionQuery = 'SELECT * FROM suggestions WHERE id = $1';
        const suggestionResult = await client.query(suggestionQuery, [uuidToCheck]);
        const existingSuggestion = suggestionResult.rows[0];

        if (existingSuggestion) {
            console.log(`${suggestion.id} already exists.`);
        } else {
            const insertQuery = 'INSERT INTO suggestions (id, user_name, suggestion, date) VALUES ($1, $2, $3, $4)';
            const insertParams = [
                suggestion.id,
                suggestion.user_name,
                suggestion.suggestion,
                suggestion.date,
            ];

            try {
                await client.query(insertQuery, insertParams);
                const endTime = new Date();
                const duration = (endTime - startTime) / 1000;
                console.log(`Inserted ${suggestion.id} in ${duration} seconds`);
            } catch (insertError) {
                console.error(`Cannot insert ${suggestion.id}:`, insertError);
            }
        }
    } catch (queryError) {
        console.error(`Error querying for ${suggestion.id}:`, queryError);
    }
}