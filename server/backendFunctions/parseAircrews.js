import aircrews from '../src/data/seederCrewData.js';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config()

async function insertAircrewsToDatabase() {
  const startTime = new Date()
  let crewCounter = 1;
  const connectionString = process.env.VITE_PGConnection
  try {
    var client = new pg.Client(connectionString);
    await client.connect();
    console.log('Connected to ElephantSQL.');

    // clear all entries from aircrews
    await client.query('DELETE FROM aircrews');
    console.log('Cleared the aircrews database.');

    for (const crewmember of aircrews) {
      console.log(`Inserting crewmember #${crewCounter}:`, crewmember.name);
      // You can uncomment and modify the query below
      const query = `INSERT INTO aircrews (uuid, name, position, airframe, aircraft, NG, atleast25InAO)
        VALUES ('${crewmember.uuid}','${crewmember.name}','${crewmember.position}','${crewmember.airframe}',${crewmember.aircraft},${crewmember.NG},${crewmember.atleast25InAO});`;

      try {
        // await adding the crewmember
        const result = await client.query(query);
      } catch (queryError) {
        console.error(`Error inserting ${crewmember.name}:`, queryError);
      }

      crewCounter++;
    }

    const endTime = new Date()
    const duration = (endTime - startTime) / 1000
    console.log(`${crewCounter} crewmembers inserted in ${duration} seconds`);
    await client.end();
    console.log('The connection is closed.');

  } catch (error) {
    console.error('Error connecting to ElephantSQL:', error);
  }
}

insertAircrewsToDatabase();
