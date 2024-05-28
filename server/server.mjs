import express from 'express';
import path from 'path';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
import { clerkClient } from "@clerk/clerk-sdk-node";
import addFlight from './backendFunctions/addFlight.js';
import updateFlight from './backendFunctions/updateFlight.js';
import deleteFlight from './backendFunctions/deleteFlight.js';
import addAircrew from './backendFunctions/addAircrew.js';
import updateAircrew from './backendFunctions/updateAircrew.js';
import addSuggestion from './backendFunctions/addSuggestion.js';

// Use the import.meta.url to get the current file's URL
const currentModuleUrl = new URL(import.meta.url);
// Get the directory path from the URL
const currentDir = path.dirname(currentModuleUrl.pathname);

try {
    // dotenv.config();
    dotenv.config({ path: '../.env' });
} catch (error) {
    console.error('Error loading .env file:', error);
}


// Middleware
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.VITE_PGConnection;


// Create a pool instance using the database connection URL
const pool = new Pool({
    connectionString: DATABASE_URL,
});

// Pre-warm the connection pool
(async () => {
    try {
        const client = await pool.connect();
        await client.query('SELECT NOW()');
        client.release();
        console.log('Connection pool pre-warmed');
    } catch (error) {
        console.error('Error pre-warming connection pool:', error);
    }
})();

app.get('/api/aircrews', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM aircrews ORDER BY name ASC;');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

app.get('/api/flights', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM flights');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

app.post('/api/add-flight', async (req, res) => {
    try {
        const flightData = req.body;
        const client = await pool.connect(); // Acquire a client from the pool
        await addFlight(client, flightData); // Pass the client to the addFlight function
        client.release(); // Release the client back to the pool
        res.status(200).json({ message: 'Flight added successfully' });
    } catch (error) {
        console.error('Error adding flight:', error);
        res.status(500).json({ error: 'An error occurred while adding the flight' });
    }
});

app.put('/api/update-flight', async (req, res) => {
    try {
        const flightData = req.body;

        const client = await pool.connect(); // Acquire a client from the pool
        await updateFlight(client, flightData); // Pass the client to the updateFlight function
        client.release(); // Release the client back to the pool

        res.status(200).json({ message: 'Flight updated successfully' });
    } catch (error) {
        console.error('Error updating flight:', error);
        res.status(500).json({ error: 'An error occurred while updating the flight' });
    }
});

app.delete('/api/delete-flight', async (req, res) => {
    try {
        const flightData = req.body;

        const client = await pool.connect(); // Acquire a client from the pool
        await deleteFlight(client, flightData); // Pass the client to the deleteFlight function
        client.release(); // Release the client back to the pool

        res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
        console.error('Error deleting flight:', error);
        res.status(500).json({ error: 'An error occurred while deleting the flight' });
    }
});

app.post('/api/add-crewmember', async (req, res) => {
    try {
        const crewData = req.body;
        console.log('post from the server', crewData.name)

        const client = await pool.connect();
        await addAircrew(client, crewData);
        client.release();
        res.status(200).json({ message: 'Crewmember added successfully' });
    } catch (error) {
        console.error('Error adding crewmemmber:', error);
        res.status(500).json({ error: 'An error occurred while adding the crewmemmber' });
    }
});

app.put('/api/update-crewmember', async (req, res) => {
    try {
        const crewData = req.body;
        const client = await pool.connect(); // Acquire a client from the pool
        await updateAircrew(client, crewData); // Pass the client to the updateFlight function
        client.release(); // Release the client back to the pool
        res.status(200).json({ message: 'Crewmember updated successfully' });
    } catch (error) {
        console.error('Error updating crewmember:', error);
        res.status(500).json({ error: 'An error occurred while updating the crewmember' });
    }
});

app.post('/api/add-suggesstion', async (req, res) => {
    try {
        const suggestionData = req.body;
        const client = await pool.connect(); // Acquire a client from the pool
        await addSuggestion(client, suggestionData); // Pass the client to the addFlight function
        client.release(); // Release the client back to the pool
        res.status(200).json({ message: 'Flight added successfully' });
    } catch (error) {
        console.error('Error adding flight:', error);
        res.status(500).json({ error: 'An error occurred while adding the flight' });
    }
});

app.post('/api/updateRole', async (req, res) => {
    const { role, userId, rank, admin } = req.body;

    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
            "rank": rank,
            "role": role,
            "admin": admin
        }
    });
    res.status(200).json({ success: true });
});

app.get('/api/userList', async (req, res) => {
    const response = await clerkClient.users.getUserList();
    res.json(response);
})


// Serve the static assets of the React app
app.use(express.static(path.join(currentDir, '..', 'dist')));
// app.use(express.static(path.join(currentDir, '..', 'build')));

// Catch-all route to serve the React app's index.html
app.get('*', (req, res) => {
    console.log("currentDir", currentDir)
    const indexPathing = path.join(currentDir, '..', 'dist/index.html')
    console.log('indexPathing', indexPathing)
    res.sendFile(indexPathing)
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});
