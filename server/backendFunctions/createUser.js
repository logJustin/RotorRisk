export default async function createUser(client, user) {
    const startTime = new Date();

    try {

        const columns = Object.keys(user).join(', ');
        const placeholders = Object.keys(user).map((_, index) => '$' + (index + 1)).join(', ');

        const insertQuery = `INSERT INTO clerk_users (${columns}) VALUES (${placeholders})`;
        const insertParams = Object.values(user);

        await client.query(insertQuery, insertParams);
        console.log(`Inserted ${user.first_name, user.last_name}`);
    } catch (error) {
        console.error('Error adding user:', error);
    } finally {
        const endTime = new Date();
        const duration = (endTime - startTime) / 1000;
        console.log(`Query ran in ${duration} seconds`);
    }
}
